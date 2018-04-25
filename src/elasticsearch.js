const elasticsearch = require('elasticsearch');

module.exports = function () {
  const app = this;
  const settings = app.get('elasticsearch');
  const client = new elasticsearch.Client(Object.assign({
    log: 'trace'
  }, settings));

  app.set('elasticsearchClient', client);
};
