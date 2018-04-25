/* eslint-disable quotes */

const executions = require('./executions.mappings.js');

// Here is a useful command for copying the final file to your clipboard.
// node -e "console.log(JSON.stringify(require('./src/models/elasticsearch/index'), null, '  '))" | pbcopy
const indexSettings = {
  "settings" : {
    "index" : {
      "number_of_shards" : 1,
      "number_of_replicas" : 1,
      "sort.field" : "start_timestamp",
      "sort.order" : "desc"
    }
  },
  "mappings": {
    "executions": executions
  }
};

// By default we disable dynamic mappings. This is because the StackStorm data
// is very large and we only need to index small pieces of it. The entire
// "_source" object will be preserved, and we will only index the fields
// explicitly defined by individual mappings (models).
Object.keys(indexSettings.mappings).forEach(type => {
  indexSettings.mappings[type].dynamic = false;
});

module.exports = indexSettings;
