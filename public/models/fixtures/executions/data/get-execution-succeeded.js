export default {
  "status": "succeeded",
  "start_timestamp": "2017-10-18T05:04:59.123216Z",
  "log": [
    {
      "status": "requested",
      "timestamp": "2017-10-18T05:04:59.160000Z"
    },
    {
      "status": "scheduled",
      "timestamp": "2017-10-18T05:04:59.315000Z"
    },
    {
      "status": "running",
      "timestamp": "2017-10-18T05:04:59.458000Z"
    },
    {
      "status": "succeeded",
      "timestamp": "2017-10-18T05:05:00.477000Z"
    }
  ],
  "parameters": {
    "format": "html",
    "color": "purple",
    "display_root_execution_id": true,
    "ctx": {
      "endpoint": "http:\/\/0.0.0.0:9101\/v1\/actionexecutions",
      "api_url": "http:\/\/0.0.0.0:9101\/v1",
      "parent": {
        "parent": {
          "parent": {
            "execution_id": "59e6e0f2271fb22466b5a765",
            "trigger_instance": {
              "id": "59e6e0f2271fb22466b5a762",
              "name": null
            },
            "trace_context": {
              "id_": "59e6e0f2271fb22466b5a763",
              "trace_tag": "trigger_instance-59e6e0f2271fb22466b5a762"
            },
            "rule": {
              "id": "59765375271fb276c5380e14",
              "name": "imedic_mail_received"
            },
            "user": "stanley"
          },
          "user": "stanley",
          "execution_id": "59e6e0f5271fb205081782e8",
          "mistral": {
            "action_execution_id": "a03bc66d-1a6b-4f22-b6b0-c52ec49750e9",
            "task_id": "ad7cd132-b4ea-4ca6-bd74-92f9d1a22d7b",
            "workflow_name": "email.handle-email-received-imedic",
            "workflow_execution_id": "306070d5-c776-4454-989c-ef74f6be1a9c",
            "task_tags": null,
            "task_name": "handle_email_radar",
            "callback_url": "\/v2\/action_executions\/a03bc66d-1a6b-4f22-b6b0-c52ec49750e9"
          }
        },
        "user": "stanley",
        "execution_id": "59e6e0fa271fb205081782f0",
        "mistral": {
          "action_execution_id": "f71dcfab-fb5d-4fca-9114-41c951cdd415",
          "task_id": "5e6121fb-0a61-4f04-ba94-b1128a77daa5",
          "workflow_name": "radar.handle_email_received",
          "workflow_execution_id": "3cecd71d-7b03-49d4-87b6-e0223690ad47",
          "task_tags": null,
          "task_name": "notify",
          "callback_url": "\/v2\/action_executions\/f71dcfab-fb5d-4fca-9114-41c951cdd415"
        }
      },
      "auth_token": "ddf0702916f74faf8bc52e28aca745b6",
      "notify": {

      },
      "skip_notify_tasks": [
        "run"
      ]
    },
    "hipchat_room": "glinda",
    "message": "&lt;<a href=\"rdar:\/\/problem\/35040191\" >rdar:\/\/problem\/35040191<\/a>&gt;<br>Problem 'State Change' in component 'iCloud-SRE' | 'Glinda':<br> <b>Title<\/b>:&nbsp;[17 G] : Glinda is showing status as 100% completed for a failed local install ticket<br>\n <b>Assignee<\/b>:&nbsp;<a target=\"_blank\" href=\"mailto:nvirani@apple.com\">Nikunj Virani<\/a><br>  <b>Resolution<\/b>:&nbsp;Behaves Correctly,  <b>State<\/b>:&nbsp;Verify,  <b>Originator<\/b>:&nbsp;Oct 17, 2017 by <a target=\"_blank\" href=\"mailto:rahul_k@apple.com\">Rahul (iCloud) Kumar<\/a>, "
  },
  "runner": {
    "runner_module": "local_runner",
    "uid": "runner_type:local-shell-script",
    "enabled": true,
    "name": "local-shell-script",
    "runner_parameters": {
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      }
    },
    "id": "591537d2271fb21ce5f37fd9",
    "description": "A runner to execute local actions as a fixed user."
  },
  "elapsed_seconds": 1.318215,
  "web_url": "https:\/\/st11p00me-sre002.me.com\/#\/history\/59e6e0fb271fb205081782f2\/general",
  "parent": "59e6e0fa271fb205081782f0",
  "result": {
    "failed": false,
    "stderr": "",
    "return_code": 0,
    "succeeded": true,
    "stdout": 204
  },
  "context": {
    "user": "stanley",
    "parent": {
      "parent": {
        "parent": {
          "execution_id": "59e6e0f2271fb22466b5a765",
          "trigger_instance": {
            "id": "59e6e0f2271fb22466b5a762",
            "name": null
          },
          "trace_context": {
            "id_": "59e6e0f2271fb22466b5a763",
            "trace_tag": "trigger_instance-59e6e0f2271fb22466b5a762"
          },
          "rule": {
            "id": "59765375271fb276c5380e14",
            "name": "imedic_mail_received"
          },
          "user": "stanley"
        },
        "user": "stanley",
        "execution_id": "59e6e0f5271fb205081782e8",
        "mistral": {
          "action_execution_id": "a03bc66d-1a6b-4f22-b6b0-c52ec49750e9",
          "task_id": "ad7cd132-b4ea-4ca6-bd74-92f9d1a22d7b",
          "workflow_name": "email.handle-email-received-imedic",
          "workflow_execution_id": "306070d5-c776-4454-989c-ef74f6be1a9c",
          "task_tags": null,
          "task_name": "handle_email_radar",
          "callback_url": "\/v2\/action_executions\/a03bc66d-1a6b-4f22-b6b0-c52ec49750e9"
        }
      },
      "user": "stanley",
      "execution_id": "59e6e0fa271fb205081782f0",
      "mistral": {
        "action_execution_id": "f71dcfab-fb5d-4fca-9114-41c951cdd415",
        "task_id": "5e6121fb-0a61-4f04-ba94-b1128a77daa5",
        "workflow_name": "radar.handle_email_received",
        "workflow_execution_id": "3cecd71d-7b03-49d4-87b6-e0223690ad47",
        "task_tags": null,
        "task_name": "notify",
        "callback_url": "\/v2\/action_executions\/f71dcfab-fb5d-4fca-9114-41c951cdd415"
      }
    },
    "mistral": {
      "action_execution_id": "a4a0b712-630c-4f57-a7da-9d158ad12a6b",
      "task_id": "64e8fe7f-108a-41f2-af54-22f9b153afdf",
      "workflow_name": "chatops.hipchat_post_html",
      "workflow_execution_id": "ccc3556d-3bf8-4205-91c9-3c524a665861",
      "task_tags": null,
      "task_name": "run",
      "callback_url": "\/v2\/action_executions\/a4a0b712-630c-4f57-a7da-9d158ad12a6b"
    }
  },
  "action": {
    "runner_type": "local-shell-script",
    "name": "post_hipchat_message",
    "parameters": {
      "format": {
        "default": "html",
        "type": "string",
        "description": "Format can be either text or html"
      },
      "color": {
        "default": "gray",
        "type": "string",
        "description": "Message color choose from: [yellow, red, green, purple, gray, random], default: gray"
      },
      "display_root_execution_id": {
        "default": true,
        "type": "boolean",
        "description": "Whether or not to append the root execution id"
      },
      "ctx": {
        "type": "object",
        "description": "The context where this action is being executed"
      },
      "hipchat_room": {
        "type": "string",
        "description": "Room ID or Mention Name for private messages If mention name, please include the '@'"
      },
      "message": {
        "required": true,
        "type": "string",
        "description": "Message to send."
      }
    },
    "tags": [

    ],
    "enabled": true,
    "entry_point": "post_hipchat_message",
    "notify": {

    },
    "uid": "action:chatops:post_hipchat_message",
    "pack": "chatops",
    "ref": "chatops.post_hipchat_message",
    "id": "59931f78271fb2050b69589e",
    "description": "Post a message to hipchat"
  },
  "liveaction": {
    "runner_info": {
      "hostname": "st11p00me-sre002.me.com",
      "pid": 8694
    },
    "parameters": {
      "format": "html",
      "color": "purple",
      "display_root_execution_id": true,
      "ctx": {
        "endpoint": "http:\/\/0.0.0.0:9101\/v1\/actionexecutions",
        "api_url": "http:\/\/0.0.0.0:9101\/v1",
        "parent": {
          "parent": {
            "execution_id": "59e6e0f5271fb205081782e8",
            "user": "stanley",
            "parent": {
              "execution_id": "59e6e0f2271fb22466b5a765",
              "trigger_instance": {
                "id": "59e6e0f2271fb22466b5a762",
                "name": null
              },
              "trace_context": {
                "id_": "59e6e0f2271fb22466b5a763",
                "trace_tag": "trigger_instance-59e6e0f2271fb22466b5a762"
              },
              "rule": {
                "id": "59765375271fb276c5380e14",
                "name": "imedic_mail_received"
              },
              "user": "stanley"
            },
            "mistral": {
              "action_execution_id": "a03bc66d-1a6b-4f22-b6b0-c52ec49750e9",
              "task_id": "ad7cd132-b4ea-4ca6-bd74-92f9d1a22d7b",
              "workflow_name": "email.handle-email-received-imedic",
              "workflow_execution_id": "306070d5-c776-4454-989c-ef74f6be1a9c",
              "task_tags": null,
              "task_name": "handle_email_radar",
              "callback_url": "\/v2\/action_executions\/a03bc66d-1a6b-4f22-b6b0-c52ec49750e9"
            }
          },
          "user": "stanley",
          "execution_id": "59e6e0fa271fb205081782f0",
          "mistral": {
            "action_execution_id": "f71dcfab-fb5d-4fca-9114-41c951cdd415",
            "task_id": "5e6121fb-0a61-4f04-ba94-b1128a77daa5",
            "workflow_name": "radar.handle_email_received",
            "workflow_execution_id": "3cecd71d-7b03-49d4-87b6-e0223690ad47",
            "task_tags": null,
            "task_name": "notify",
            "callback_url": "\/v2\/action_executions\/f71dcfab-fb5d-4fca-9114-41c951cdd415"
          }
        },
        "auth_token": "ddf0702916f74faf8bc52e28aca745b6",
        "skip_notify_tasks": [
          "run"
        ],
        "notify": {

        }
      },
      "hipchat_room": "glinda",
      "message": "&lt;<a href=\"rdar:\/\/problem\/35040191\" >rdar:\/\/problem\/35040191<\/a>&gt;<br>Problem 'State Change' in component 'iCloud-SRE' | 'Glinda':<br> <b>Title<\/b>:&nbsp;[17 G] : Glinda is showing status as 100% completed for a failed local install ticket<br>\n <b>Assignee<\/b>:&nbsp;<a target=\"_blank\" href=\"mailto:nvirani@apple.com\">Nikunj Virani<\/a><br>  <b>Resolution<\/b>:&nbsp;Behaves Correctly,  <b>State<\/b>:&nbsp;Verify,  <b>Originator<\/b>:&nbsp;Oct 17, 2017 by <a target=\"_blank\" href=\"mailto:rahul_k@apple.com\">Rahul (iCloud) Kumar<\/a>, "
    },
    "action_is_workflow": false,
    "callback": {
      "url": "http:\/\/0.0.0.0:8989\/v2\/action_executions\/a4a0b712-630c-4f57-a7da-9d158ad12a6b",
      "source": "mistral"
    },
    "action": "chatops.post_hipchat_message",
    "id": "59e6e0fb271fb205081782f1"
  },
  "id": "59e6e0fb271fb205081782f2",
  "end_timestamp": "2017-10-18T05:05:00.441431Z"
}
