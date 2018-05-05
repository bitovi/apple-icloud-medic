export default [
  {
    "description": "Trigger encapsulating the completion of an action execution.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.generic.actiontrigger",
    "payload_schema": {
      "type": "object",
      "properties": {
        "status": {},
        "start_timestamp": {},
        "parameters": {},
        "runner_ref": {},
        "action_name": {},
        "result": {},
        "action_ref": {},
        "execution_id": {}
      }
    },
    "uid": "trigger_type:core:st2.generic.actiontrigger",
    "ref": "core.st2.generic.actiontrigger",
    "id": "5ae3adb309f69900ca7c841e",
    "pack": "core"
  },
  {
    "description": "Notification trigger.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.generic.notifytrigger",
    "payload_schema": {
      "type": "object",
      "properties": {
        "status": {},
        "start_timestamp": {},
        "route": {},
        "runner_ref": {},
        "execution_id": {},
        "action_ref": {},
        "data": {},
        "message": {},
        "channel": {},
        "end_timestamp": {}
      }
    },
    "uid": "trigger_type:core:st2.generic.notifytrigger",
    "ref": "core.st2.generic.notifytrigger",
    "id": "5ae3adb309f69900ca7c8420",
    "pack": "core"
  },
  {
    "description": "Trigger encapsulating action file being written on disk.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.action.file_writen",
    "payload_schema": {
      "type": "object",
      "properties": {
        "host_info": {},
        "ref": {},
        "file_path": {}
      }
    },
    "uid": "trigger_type:core:st2.action.file_writen",
    "ref": "core.st2.action.file_writen",
    "id": "5ae3adb309f69900ca7c8422",
    "pack": "core"
  },
  {
    "description": "Trigger indicating a new \"inquiry\" has entered \"pending\" status",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.generic.inquiry",
    "payload_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "route": {
          "required": true,
          "type": "string",
          "description": "An arbitrary value for allowing rules to route to proper notification channel."
        },
        "id": {
          "required": true,
          "type": "string",
          "description": "ID of the new inquiry."
        }
      }
    },
    "uid": "trigger_type:core:st2.generic.inquiry",
    "ref": "core.st2.generic.inquiry",
    "id": "5ae3adb309f69900ca7c8424",
    "pack": "core"
  },
  {
    "description": "Trigger encapsulating datastore item creation.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.key_value_pair.create",
    "payload_schema": {
      "type": "object",
      "properties": {
        "object": {}
      }
    },
    "uid": "trigger_type:core:st2.key_value_pair.create",
    "ref": "core.st2.key_value_pair.create",
    "id": "5ae3adb309f69900ca7c8426",
    "pack": "core"
  },
  {
    "description": "Triggers on specified intervals. e.g. every 30s, 1week etc.",
    "parameters_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "timezone": {
          "type": "string"
        },
        "unit": {
          "enum": [
            "weeks",
            "days",
            "hours",
            "minutes",
            "seconds"
          ],
          "required": true
        },
        "delta": {
          "required": true,
          "type": "integer"
        }
      }
    },
    "tags": [],
    "name": "st2.IntervalTimer",
    "payload_schema": {
      "type": "object",
      "properties": {
        "executed_at": {
          "default": "2014-07-30 05:04:24.578325",
          "type": "string",
          "format": "date-time"
        },
        "schedule": {
          "default": {
            "units": "seconds",
            "delta": 30
          },
          "type": "object"
        }
      }
    },
    "uid": "trigger_type:core:st2.IntervalTimer",
    "ref": "core.st2.IntervalTimer",
    "id": "5ae3adb309f6990037ead22d",
    "pack": "core"
  },
  {
    "description": "Triggers exactly once when the current time matches the specified time. e.g. timezone:UTC date:2014-12-31 23:59:59.",
    "parameters_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "date": {
          "required": true,
          "type": "string",
          "format": "date-time"
        },
        "timezone": {
          "type": "string"
        }
      }
    },
    "tags": [],
    "name": "st2.DateTimer",
    "payload_schema": {
      "type": "object",
      "properties": {
        "executed_at": {
          "default": "2014-07-30 05:04:24.578325",
          "type": "string",
          "format": "date-time"
        },
        "schedule": {
          "default": {
            "units": "seconds",
            "delta": 30
          },
          "type": "object"
        }
      }
    },
    "uid": "trigger_type:core:st2.DateTimer",
    "ref": "core.st2.DateTimer",
    "id": "5ae3adb309f6990037ead22e",
    "pack": "core"
  },
  {
    "description": "Triggers whenever current time matches the specified time constaints like a UNIX cron scheduler.",
    "parameters_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "week": {
          "minimum": 1,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 53
        },
        "hour": {
          "minimum": 0,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 23
        },
        "day_of_week": {
          "minimum": 0,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 6
        },
        "month": {
          "minimum": 1,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 12
        },
        "second": {
          "minimum": 0,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 59
        },
        "year": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ]
        },
        "timezone": {
          "type": "string"
        },
        "day": {
          "minimum": 1,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 31
        },
        "minute": {
          "minimum": 0,
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            }
          ],
          "maximum": 59
        }
      }
    },
    "tags": [],
    "name": "st2.CronTimer",
    "payload_schema": {
      "type": "object",
      "properties": {
        "executed_at": {
          "default": "2014-07-30 05:04:24.578325",
          "type": "string",
          "format": "date-time"
        },
        "schedule": {
          "default": {
            "units": "seconds",
            "delta": 30
          },
          "type": "object"
        }
      }
    },
    "uid": "trigger_type:core:st2.CronTimer",
    "ref": "core.st2.CronTimer",
    "id": "5ae3adb309f6990037ead22f",
    "pack": "core"
  },
  {
    "description": "Trigger encapsulating datastore set action.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.key_value_pair.update",
    "payload_schema": {
      "type": "object",
      "properties": {
        "object": {}
      }
    },
    "uid": "trigger_type:core:st2.key_value_pair.update",
    "ref": "core.st2.key_value_pair.update",
    "id": "5ae3adb309f69900ca7c8428",
    "pack": "core"
  },
  {
    "description": "Trigger encapsulating a change of datastore item value.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.key_value_pair.value_change",
    "payload_schema": {
      "type": "object",
      "properties": {
        "new_object": {},
        "old_object": {}
      }
    },
    "uid": "trigger_type:core:st2.key_value_pair.value_change",
    "ref": "core.st2.key_value_pair.value_change",
    "id": "5ae3adb309f69900ca7c842a",
    "pack": "core"
  },
  {
    "description": "Trigger encapsulating datastore item deletion.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.key_value_pair.delete",
    "payload_schema": {
      "type": "object",
      "properties": {
        "object": {}
      }
    },
    "uid": "trigger_type:core:st2.key_value_pair.delete",
    "ref": "core.st2.key_value_pair.delete",
    "id": "5ae3adb309f69900ca7c842c",
    "pack": "core"
  },
  {
    "description": "Trigger indicating sensor process is started up.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.sensor.process_spawn",
    "payload_schema": {
      "type": "object",
      "properties": {
        "object": {}
      }
    },
    "uid": "trigger_type:core:st2.sensor.process_spawn",
    "ref": "core.st2.sensor.process_spawn",
    "id": "5ae3adb309f69900ca7c842e",
    "pack": "core"
  },
  {
    "description": "Trigger indicating sensor process is stopped.",
    "parameters_schema": {},
    "tags": [],
    "name": "st2.sensor.process_exit",
    "payload_schema": {
      "type": "object",
      "properties": {
        "object": {}
      }
    },
    "uid": "trigger_type:core:st2.sensor.process_exit",
    "ref": "core.st2.sensor.process_exit",
    "id": "5ae3adb309f69900ca7c8430",
    "pack": "core"
  },
  {
    "description": "Trigger type for registering webhooks that can consume arbitrary payload.",
    "parameters_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "url": {
          "required": true,
          "type": "string"
        }
      }
    },
    "tags": [],
    "name": "st2.webhook",
    "payload_schema": {
      "type": "object"
    },
    "uid": "trigger_type:core:st2.webhook",
    "ref": "core.st2.webhook",
    "id": "5ae3adb409f69900ca7c8435",
    "pack": "core"
  },
  {
    "description": "Trigger which indicates a new line has been detected",
    "parameters_schema": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "file_path": {
          "required": true,
          "type": "string",
          "description": "Path to the file to monitor"
        }
      }
    },
    "tags": [],
    "name": "file_watch.line",
    "payload_schema": {
      "type": "object",
      "properties": {
        "file_name": {
          "type": "string"
        },
        "line": {
          "type": "string"
        },
        "file_path": {
          "type": "string"
        }
      }
    },
    "uid": "trigger_type:linux:file_watch.line",
    "ref": "linux.file_watch.line",
    "id": "5ae3adb909f69901cfc95460",
    "pack": "linux"
  },
  {
    "description": "Sample trigger",
    "parameters_schema": {},
    "tags": [],
    "name": "sample_trigger",
    "payload_schema": {},
    "uid": "trigger_type:examples:sample_trigger",
    "ref": "examples.sample_trigger",
    "id": "5ae7310509f699030501bc6a",
    "pack": "examples"
  },
  {
    "description": "Echo flask sensor.",
    "parameters_schema": {},
    "tags": [],
    "name": "echoflasksensor",
    "payload_schema": {
      "type": "object",
      "properties": {
        "payload": {
          "type": "object"
        }
      }
    },
    "uid": "trigger_type:examples:echoflasksensor",
    "ref": "examples.echoflasksensor",
    "id": "5ae7310509f699030501bc6c",
    "pack": "examples"
  },
  {
    "description": "An example trigger.",
    "parameters_schema": {},
    "tags": [],
    "name": "polling_event",
    "payload_schema": {
      "type": "object",
      "properties": {
        "executed_at": {
          "default": "2014-07-30 05:04:24.578325",
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "uid": "trigger_type:examples:polling_event",
    "ref": "examples.polling_event",
    "id": "5ae7310609f699030501bc6f",
    "pack": "examples"
  },
  {
    "description": "An example trigger.",
    "parameters_schema": {},
    "tags": [],
    "name": "event",
    "payload_schema": {
      "type": "object",
      "properties": {
        "executed_at": {
          "default": "2014-07-30 05:04:24.578325",
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "uid": "trigger_type:examples:event",
    "ref": "examples.event",
    "id": "5ae7310609f699030501bc72",
    "pack": "examples"
  }
];
