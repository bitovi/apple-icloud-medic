const mergeDeep = require('merge-deep');
const DEFAULT_INDEX_SETTINGS = require('../../models/elasticsearch/index');

// All indexes will be created with the suffix "--v1"
// and an alias without the suffix for consistent referencing.
// This allows us to reindex with no down time.
// SEE: https://www.elastic.co/blog/changing-mapping-with-zero-downtime
const REG_VERSION = /--v(\d+)$/;
const DEFAULT_INDEX_VERSION = '--v1';
// https://www.elastic.co/guide/en/elasticsearch/reference/6.2/docs-reindex.html
const DEFAULT_REINDEX_BODY = {
  conflicts: 'proceed', // useful if an reindex has to be restarted
  dest: {
    version_type: 'external' // preserves version numbers (default: "internal")
  }
};
// Number of executions to load from StackStorm at a time.
const SYNC_BATCH_SIZE = 100;
// Number of batches to run for a single "sync"
const SYNC_BATCH_COUNT = 10;

// just in case...
if (!REG_VERSION.test(DEFAULT_INDEX_VERSION)) {
  throw new Error('The DEFAULT_INDEX_VERSION does not match the REG_VERSION');
}

/**
 * Returns an object with a "versioned" name and a "plain" name
 */
const getVersionedIndexName = (index) => {
  if (REG_VERSION.test(index)) {
    return {
      versioned: index,
      plain: index.replace(REG_VERSION, '')
    };
  }
  return {
    versioned: index + DEFAULT_INDEX_VERSION,
    plain: index
  };
};

const actions = {
  // Loads all indices and their aliases.
  // NOTE: returns a dictionary of indexName -> indexData
  // There's no single method to list indices and aliases together... so we do it ourselves
  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-cat-indices
  listIndices(client, params) {
    return Promise.all([
      client.cat.indices(mergeDeep({ format: 'json' }, params)),
      actions.listAliases(client)
    ]).then(([indices, aliases]) =>
      // Create a map of indexName => indexObj (with aliases)
      indices.reduce((obj, o) => {
        o.aliases = aliases.filter(a => a.index === o.index).map(a => a.alias);
        return Object.assign(obj, { [o.index]: o });
      }, {})
    );
  },

  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-cat-aliases
  listAliases(client, params) {
    return client.cat.aliases(mergeDeep({ format: 'json' }, params));
  },

  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-putalias
  addAlias(client, index, name, params) {
    return client.indices.putAlias(mergeDeep({ index, name }, params));
  },

  /**
   * Ensures an index (or array of indices) exists. If not, it
   * creates them with the createIndexParams.
   * https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-create
   */
  ensureIndexExists(client, index, createIndexParams) {
    const indices = [].concat(index); // always work with array
    return Promise.all(indices.map(index =>
      client.indices.exists({ index }).then(exists =>
        exists || actions.createIndex(client, index, createIndexParams)
      )
    ));
  },

  // Creates a "versioned" index with a "plain" alias.
  // This is particularly useful for zero downtime reindexing.
  // https://www.elastic.co/blog/changing-mapping-with-zero-downtime
  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-create
  createIndex(client, index, params = {}) {
    const { versioned, plain } = getVersionedIndexName(index);
    // in case users pass the index settings directly
    if (params.mappings || params.settings) {
      params = { body: params };
    }
    if (!params.body) params.body = {};

    // We intentially use a shallow merging here
    const settings = Object.assign({}, DEFAULT_INDEX_SETTINGS.settings, params.body.settings);
    const mappings = Object.assign({}, DEFAULT_INDEX_SETTINGS.mappings, params.body.mappings);
    const body = Object.assign({
      // we allow aliases to be overridden by the value passed in.
      // this is crucial for reindexing - aliases are added at the end
      aliases: { [plain]: {} }
    }, DEFAULT_INDEX_SETTINGS, params.body, { settings, mappings });

    return client.indices.create(Object.assign({}, params, {
      index: versioned,
      body
    }));
  },

  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-putsettings
  updateIndexSettings(client, index, settings, params) {
    return client.putSettings(mergeDeep({ index, body: settings }, params));
  },

  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-delete
  deleteIndex(client, index, params) {
    return client.indices.delete(mergeDeep({ index }, params));
  },

  // Reindex a source onto a dest. If the dest does not exist, it is
  // created with the createIndexParams (see client.indices.create).
  // NOTE: This expects versioned source and dest index names!
  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-reindex
  // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-indices-create
  reindex(client, reindexParams, createIndexParams) {
    if (reindexParams.source && reindexParams.dest) {
      reindexParams = { body: reindexParams };
    }
    const { source, dest } = reindexParams.body;
    if (!REG_VERSION.test(source.index) || !REG_VERSION.test(dest.index)) {
      return Promise.reject(new Error('The source and dest index names MUST include the version'));
    }

    // 1. Ensure the source index exists by listing it (we need its aliases later)
    return actions.listIndices(client, { index: source.index }).then(
      results => results[source.index]
    ).then(oldIndex => {
      // 2. Ensure the dest index exists, but WITHOUT aliases yet (we add those later)
      const createParams = Object.assign({}, createIndexParams, { aliases: {} });
      return actions.ensureIndexExists(client, dest.index, createParams).then(() =>
        // 3. Reindex
        client.reindex(mergeDeep({}, {
          body: DEFAULT_REINDEX_BODY
        }, reindexParams)).catch(err => {
          throw new Error('Error during reindex: ' + err.message);
        })
      ).then(() => {
        // 4. Move aliases from old index to new index - this operation is atomic
        // TODO: add aliases which were passed in createIndexParams
        return client.indices.updateAliases({ body: {
          actions: oldIndex.aliases.reduce((result, alias) => {
            result.push(
              { remove: { alias, index: source.index } },
              { add:    { alias, index: dest.index } }
            );
            return result;
          }, [])
        }});
      });
    }).then(() =>
      // 5. Finally, delete the old index
      actions.deleteIndex(client, source.index)
    );
  },

  syncExecutions(client, direction, executionsService, st2executionsService, _count = 1) {
    direction = direction === 'older' ? 1 : -1;
    const $sort = { start_timestamp: direction };
    return executionsService.find({ query: {
      $sort,
      $limit: 1,
      teamName: '_all'
    }}).then(results =>
      results.data.length ? results.data[0] : null
    ).then(execution => {
      if (!execution) return;
      const sortKey = direction > 0 ? 'timestamp_lt' : 'timestamp_gt';
      return st2executionsService.find({ query: {
        limit: SYNC_BATCH_SIZE,
        [sortKey]: execution.start_timestamp
      }});
    }).then(st2Executions => {
      if (!st2Executions.length) return [];
      return executionsService.create(st2Executions);
    }).then(executions => {
      if (executions.length === SYNC_BATCH_SIZE && _count < SYNC_BATCH_COUNT) {
        return actions.syncExecutions(client, direction, executionsService, st2executionsService, _count + 1);
      }
      const part1msg = `Successfully sync'd ${(_count - 1) * SYNC_BATCH_SIZE + executions.length} executions in ${_count} batches.`;
      return actions.syncRunningExecutions(client, executionsService, st2executionsService).then(part2msg => {
        return part1msg + '. ' + part2msg;
      });
    });
  },

  syncRunningExecutions(client, executionsService, st2executionsService, _count = 1) {
    return executionsService.find({ query: {
      $limit: SYNC_BATCH_SIZE,
      teamName: '_all',
      status: { $nin: ['succeeded', 'failed'] }
    }}).then(unfinished => {
      if (!unfinished.data.length) return [];
      const ids = unfinished.data.map(item => item.id);
      return st2executionsService.find({ query: {
        id: ids.join(',')
      }});
    }).then(st2Executions => {
      if (!st2Executions.length) return [];
      return executionsService.create(st2Executions);
    }).then(executions => {
      if (executions.length === SYNC_BATCH_SIZE && _count < 3) {
        return actions.syncRunningExecutions(client, executionsService, st2executionsService, _count + 1);
      }
      return `Successfully sync'd ${(_count - 1) * SYNC_BATCH_SIZE + executions.length} "running" executions in ${_count} batches.`;
    });
  }
};

module.exports = actions;
