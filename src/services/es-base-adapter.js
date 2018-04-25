const { Service } = require('feathers-elasticsearch');
const errors = require('feathers-errors');

const INDEX_PREFIX = 'team--';
const getTeamIndexName = (teamName) => {
  return teamName === '_all' ? teamName : INDEX_PREFIX + teamName;
};

const pluckTeamName = (data) => {
  const { teamName } = data;
  delete data.teamName;
  return teamName;
};

/**
 * This adapter should be used when communicating with Elasticsearch.
 * Every team will have its own index in elasticsearch.
 * This "super" service creates an instance of the feathers-elasticsearch Service
 * for each team. Whenever a request comes in, the request data should contain
 * information about the team to which the data belongs. It is the
 * responsiblity of individual services to decorate the data with teamName
 * wherever possible (see the "executions" service and hooks).
 */
class ESBaseAdapter {
  constructor(options) {
    if (!options.Model) {
      throw new Error('You must provide the Model (elasticsearch client)');
    }
    if (!options.utilService) {
      throw new Error('You must provide the elasticsearch utilService');
    }
    if (!options.elasticsearch) {
      throw new Error('You must pass eleasticsearch options');
    }
    if (!options.elasticsearch.type) {
      throw new Error('You must pass the eleasticsearch.type option');
    }
    if (options.elasticsearch.index) {
      throw new Error('You should not set the eleasticsearch.index option - instead pass the teamName (team.codeName) with all requests.');
    }

    // this.config.name MUST have a value in order for permission checks to work
    this.config = options;
    this.client = options.Model;
    this.util = options.utilService;
    this.indexMap = {};
  }

  /**
   * Every team will have its own index, so we must create an instance of
   * the feathers-elasticsearch service for each index.
   */
  callMethodForIndex(method, dataWithTeamName, args) {
    const teamName = pluckTeamName(dataWithTeamName);
    if (!teamName) {
      return Promise.reject(new errors.BadRequest(`You must pass a teamName for all elasticsearch services. ${method + ':' + this.config.elasticsearch.type}`));
    }

    const index = getTeamIndexName(teamName);
    if (index === '_all') {
      if (method !== 'find' && method !== 'get') {
        return Promise.reject(new errors.Forbidden(`You cannot ${method} all teams`));
      }
      // params is always the last argument
      const params = args[args.length - 1];
      if (params.provider && !params.user.isSuperAdmin) {
        return Promise.reject(new errors.Forbidden('You cannot access all teams'));
      }
    }

    let promise = Promise.resolve();
    let service = this.indexMap[index];
    if (!service) {
      service = this.indexMap[index] = new Service({
        Model: this.config.Model,
        paginate: this.config.paginate,
        elasticsearch: Object.assign({ index }, this.config.elasticsearch)
      });
      if (index !== '_all') {
        promise = this.util.update('ensure-index-exists', { index });
      }
    }

    return promise.then(() => service[method].apply(service, args));
  }

  get(id, params) {
    return this.callMethodForIndex('get', params.query, [id, params]);
  }

  find(params) {
    return this.callMethodForIndex('find', params.query, [params]);
  }

  // The feathers-elasticsearch creat/bulkCreate does not do what we need,
  // so we had to roll our own. The main difference here is that we
  // always use "index", whereas feathers-elasticsearch uses "create" or
  // "index" based on the presence of an _id. We also create data across
  // multiple indexes simultaneously.
  create(data, params) {
    // For create, there should be a before hook which adds teamName to the data
    if (!Array.isArray(data)) {
      // Always use bulkCreate (doesn't hurt, and ensures consistency)
      data = [data];
    }
    return this.bulkCreate(data, params);
  }

  bulkCreate(data) {
    try {
      const teamIndices = new Set();
      const mgetDocs = [];
      const body = data.reduce((arr, item) => {
        const teamName = pluckTeamName(item);
        if (!teamName) throw new errors.BadRequest(`An item in the list does not have a teamName: (${item.id})`);
        // ES bulk operations require an action description followed by the
        // data for that action. "index" actions will create or replace.
        const _index = getTeamIndexName(teamName);
        const location = { _index, _id: item.id };
        teamIndices.add(_index);
        mgetDocs.push(location); // we will use the same data in the mget later
        arr.push({ index: location });
        arr.push(item);
        return arr;
      }, []);

      return this.util.update('ensure-index-exists', { index: [...teamIndices] }).then(() =>
        this.client.bulk(Object.assign({ body }, this.config.elasticsearch))
      ).then(() =>
        this.client.mget(Object.assign({ body: { docs: mgetDocs }}, this.config.elasticsearch))
      ).then(results => {
        return results.docs.map(doc => doc._source);
      });
    } catch (ex) {
      return Promise.reject(ex);
    }
  }

  update(id, data, params) {
    return this.callMethodForIndex('update', data, [id, data, params]);
  }

  patch(id, data, params) {
    return this.callMethodForIndex('patch', data, [id, data, params]);
  }

  remove(id, params) {
    return this.callMethodForIndex('remove', params.query, [id, params]);
  }
}

module.exports = function createService(options) {
  return new ESBaseAdapter(options);
};

module.exports.Service = ESBaseAdapter;
