const errors = require('feathers-errors');
const actions = require('./actions');

class ElasticSearchUtil {
  constructor(options) {
    if (!options.elasticsearchClient) {
      throw new Error('You must specify the elasticsearch client');
    }

    this.config = options;
    this.client = options.elasticsearchClient;
  }

  /**
   * The "id" is used as the action name
   */
  get(id, params) {
    const action = id;
    switch (action) {
    case 'list-indices': {
      return actions.listIndices(this.client, params.query);
    }

    case 'list-aliases':{
      return actions.listAliases(this.client, params.query);
    }

    case 'sync-executions':{
      if (!params.executionsService || !params.st2executionsService) {
        throw new Error('You must specify the necessary executions services');
      }
      const direction = params.query && params.query.direction;
      return actions.syncExecutions(this.client, direction, params.executionsService, params.st2executionsService);
    }

    default:
      return Promise.reject(new errors.BadRequest('Unknown action: ' + action));
    }
  }

  /**
   * The "id" is used as the action name
   */
  update(id, data /*, params*/) {
    const action = id;
    switch (action) {

    /* {
      index: 'team--icloud--v3',
      name: 'team--icloud'
    } */
    case 'add-alias': {
      let { index, name } = data;
      return actions.addAlias(this.client, index, name);
    }

    /* {
      index: 'team--icloud'
    } */
    case 'ensure-index-exists': {
      let { index } = data;
      return actions.ensureIndexExists(this.client, index);
    }

    /* {
      index: 'team--icloud',
      settings: {
        index: { refresh_interval: -1 }
      }
    } */
    case 'update-index-settings': {
      let { index, settings } = data;
      return actions.updateIndexSettings(this.client, index, settings);
    }

    /* {
      reindexParams: {
        source: { index: 'team--icloud--v1'},
        dest: { index: 'team--icloud--v2'},
      },
      createIndexParams: { settings: {...}, mappings: {...} }
    } */
    case 'reindex': {
      let { reindexParams, createIndexParams } = data;
      return actions.reindex(this.client, reindexParams, createIndexParams);
    }

    default:
      return Promise.reject(new errors.BadRequest('Unknown action: ' + action));
    }
  }

  /**
   * The "id" is used as the action name
   */
  remove(id, params) {
    const action = id;
    switch (action) {

    /* ?index=team--icloud */
    case 'delete-index': {
      let { index } = params.query;
      return actions.deleteIndex(this.client, index);
    }

    default:
      return Promise.reject(new errors.BadRequest('Unknown action: ' + action));
    }
  }
}

module.exports = function (options) {
  return new ElasticSearchUtil(options);
};

module.exports.Service = ElasticSearchUtil;
