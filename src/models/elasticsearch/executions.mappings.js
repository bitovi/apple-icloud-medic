/* eslint-disable quotes */

/**
 * Mappings for the executions type
 */
const executions = {
  "properties": {
    "id":              { "type": "keyword" },
    // This is a special property which will be an array of
    // parent IDs, starting with the root execution and every
    // subsequent execution leading to the child execution.
    // This allows us to lookup a deeply nested execution using
    // *any* of its ancestor IDs.
    "parentIds":       { "type": "keyword" },
    "parent":          { "type": "keyword" },
    "status":          { "type": "keyword" },
    "start_timestamp": { "type": "date" },
    "end_timestamp":   { "type": "date" },
    "elapsed_seconds": { "type": "double" },
    "children":        { "type": "keyword" },
    "rule": {
      "type": "object",
      "properties": {
        "id":            { "type": "keyword" },
        "name":          { "type": "keyword" },
        "pack":          { "type": "keyword" },
        "ref":           { "type": "keyword" },
        "description":   { "type": "text" }
      }
    },
    "action": {
      "type": "object",
      "properties": {
        "id":            { "type": "keyword" },
        "name":          { "type": "keyword" },
        "pack":          { "type": "keyword" },
        "ref":           { "type": "keyword" }
      }
    },
    "trigger_type": {
      "type": "object",
      "properties": {
        "id":            { "type": "keyword" },
        "name":          { "type": "keyword" },
        "pack":          { "type": "keyword" },
        "ref":           { "type": "keyword" }
      }
    },
    "runner": {
      "type": "object",
      "properties": {
        "id":            { "type": "keyword" },
        "name":          { "type": "keyword" }
      }
    },
    "context": {
      "type": "object",
      "properties": {
        "user":          { "type": "keyword" }
      }
    }
  }
};

module.exports = executions;
