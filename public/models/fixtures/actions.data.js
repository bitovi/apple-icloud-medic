/* eslint-disable */

export default [
  {
    "name": "format_execution_result",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "execution_id": {
        "required": true,
        "type": "string",
        "description": "Id of execution to format"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Format an execution result for chatops",
    "enabled": true,
    "entry_point": "format_execution_result.py",
    "notify": {},
    "uid": "action:chatops:format_execution_result",
    "pack": "chatops",
    "ref": "chatops.format_execution_result",
    "id": "5ae3adba09f69901cfc95482",
    "runner_type": "python-script"
  },
  {
    "name": "match",
    "parameters": {
      "text": {
        "required": true,
        "type": "string",
        "description": "The text to match"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Match a string to an action alias",
    "enabled": true,
    "entry_point": "match.py",
    "notify": {},
    "uid": "action:chatops:match",
    "pack": "chatops",
    "ref": "chatops.match",
    "id": "5ae3adba09f69901cfc95483",
    "runner_type": "python-script"
  },
  {
    "name": "match_and_execute",
    "parameters": {
      "text": {
        "required": true,
        "type": "string",
        "description": "The text to match"
      },
      "source_channel": {
        "required": false,
        "type": "string",
        "description": "The source channel to set on the execution"
      },
      "user": {
        "required": false,
        "type": "string",
        "description": "User ID calling the command"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Execute a chatops string to an action alias",
    "enabled": true,
    "entry_point": "match_and_execute.py",
    "notify": {},
    "uid": "action:chatops:match_and_execute",
    "pack": "chatops",
    "ref": "chatops.match_and_execute",
    "id": "5ae3adba09f69901cfc95484",
    "runner_type": "python-script"
  },
  {
    "name": "post_message",
    "parameters": {
      "extra": {
        "type": "object",
        "description": "Extra adapter-specific parameters."
      },
      "whisper": {
        "default": false,
        "type": "boolean",
        "description": "Send a private message to user"
      },
      "route": {
        "default": "chatops",
        "minLength": 1,
        "type": "string",
        "description": "The routing_key used to route the message to consumers. Might be a list of words, delimited by dots.",
        "maxLength": 255
      },
      "experimental": {
        "default": true,
        "required": true,
        "type": "boolean",
        "description": "Flag to indicate acknowledgment of using experimental runner",
        "immutable": true
      },
      "user": {
        "type": "string",
        "description": "Explicitly notify a user"
      },
      "message": {
        "required": true,
        "type": "string",
        "description": "Message to send."
      },
      "channel": {
        "required": true,
        "type": "string",
        "description": "Channel to post to"
      }
    },
    "tags": [],
    "description": "Post a message to stream for chatops",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:chatops:post_message",
    "pack": "chatops",
    "ref": "chatops.post_message",
    "id": "5ae3adba09f69901cfc95485",
    "runner_type": "announcement"
  },
  {
    "name": "post_result",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "channel": {
        "required": true,
        "type": "string",
        "description": "Channel to post to"
      },
      "whisper": {
        "default": false,
        "type": "boolean",
        "description": "Send a private message to user"
      },
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "user": {
        "type": "string",
        "description": "Explicitly notify a user"
      },
      "execution_id": {
        "required": true,
        "type": "string",
        "description": "ID of an execution to send"
      }
    },
    "tags": [],
    "description": "Post an execution result to stream for chatops",
    "enabled": true,
    "entry_point": "workflows/post_result.yaml",
    "notify": {},
    "uid": "action:chatops:post_result",
    "pack": "chatops",
    "ref": "chatops.post_result",
    "id": "5ae3adba09f69901cfc95486",
    "runner_type": "action-chain"
  },
  {
    "name": "run",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "whisper": {
        "default": false,
        "type": "boolean",
        "description": "Send a private message to user"
      },
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "user": {
        "type": "string",
        "description": "Explicitly notify a user"
      },
      "text": {
        "required": true,
        "type": "string",
        "description": "Chatops command"
      },
      "channel": {
        "required": true,
        "type": "string",
        "description": "Channel to post to"
      }
    },
    "tags": [],
    "description": "Match a text chatops command, execute it and post the result",
    "enabled": true,
    "entry_point": "workflows/run.yaml",
    "notify": {},
    "uid": "action:chatops:run",
    "pack": "chatops",
    "ref": "chatops.run",
    "id": "5ae3adba09f69901cfc95487",
    "runner_type": "action-chain"
  },
  {
    "name": "announcement",
    "parameters": {
      "route": {
        "default": "general",
        "minLength": 1,
        "type": "string",
        "description": "The routing_key used to route the message to consumers. Might be a list of words, delimited by dots.",
        "maxLength": 255
      },
      "message": {
        "type": "object",
        "description": "Message to broadcast."
      },
      "experimental": {
        "default": true,
        "required": true,
        "type": "boolean",
        "description": "Flag to indicate acknowledgment of using experimental runner",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Action that broadcasts the announcement to all stream consumers.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:announcement",
    "pack": "core",
    "ref": "core.announcement",
    "id": "5ae3adb909f69901cfc95476",
    "runner_type": "announcement"
  },
  {
    "name": "ask",
    "parameters": {
      "route": {
        "default": "",
        "required": false,
        "type": "string",
        "description": "An arbitrary value for allowing rules to route to proper notification channel"
      },
      "schema": {
        "default": {
          "type": "object",
          "properties": {
            "continue": {
              "required": true,
              "type": "boolean",
              "description": "Would you like to continue the workflow?"
            }
          },
          "title": "response_data"
        },
        "required": true,
        "type": "object",
        "description": "A JSON schema that will be used to validate the response data"
      },
      "users": {
        "default": [],
        "required": false,
        "type": "array",
        "description": "A list of usernames that are permitted to respond to the action (if nothing provided, all are permitted)"
      },
      "roles": {
        "default": [],
        "required": false,
        "type": "array",
        "description": "A list of roles that are permitted to respond to the action (if nothing provided, all are permitted) - REQUIRES ENTERPRISE FEATURES"
      },
      "ttl": {
        "default": 1440,
        "required": true,
        "type": "integer",
        "description": "Time (in minutes) to wait before timing out the inquiry if no response is received"
      }
    },
    "tags": [],
    "description": "Action for initiating an Inquiry (usually in a workflow)",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:ask",
    "pack": "core",
    "ref": "core.ask",
    "id": "5ae3adba09f69901cfc95477",
    "runner_type": "inquirer"
  },
  {
    "name": "http",
    "parameters": {
      "username": {
        "type": "string",
        "description": "Username required by basic authentication."
      },
      "body": {
        "type": "string",
        "description": "Body to send with the request"
      },
      "cookies": {
        "type": "object",
        "description": "Optional cookies to send with the request."
      },
      "https_proxy": {
        "type": "string",
        "description": "URL of HTTPS proxy to use (e.g. http://10.10.1.10:3128)."
      },
      "url": {
        "required": true,
        "type": "string",
        "description": "URL to the HTTP endpoint."
      },
      "file_name": {
        "type": "string",
        "description": "Magic attribute which is automatically populated when file_path is specified"
      },
      "file_content_type": {
        "type": "string",
        "description": "Optional content type for the uploaded file"
      },
      "http_proxy": {
        "type": "string",
        "description": "URL of HTTP proxy to use (e.g. http://10.10.1.10:3128)."
      },
      "auth": {
        "type": "string",
        "description": "Auth string to be used. This can be like 'x-auth-token=XYZ'."
      },
      "method": {
        "enum": [
          "HEAD",
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "type": "string",
        "description": "HTTP method to use."
      },
      "file_content": {
        "type": "string",
        "description": "Magic attribute which is automatically populated when file_path is specified"
      },
      "params": {
        "type": "object",
        "description": "Query params to be used with the HTTP request."
      },
      "timeout": {
        "default": 60,
        "type": "number",
        "description": "Timeout for the HTTP request."
      },
      "allow_redirects": {
        "default": false,
        "type": "boolean",
        "description": "Set to True if POST/PUT/DELETE redirect following is allowed."
      },
      "password": {
        "type": "string",
        "description": "Password required by basic authentication."
      },
      "file_path": {
        "type": "string",
        "description": "Path to the file to upload"
      },
      "verify_ssl_cert": {
        "default": true,
        "type": "boolean",
        "description": "Certificate for HTTPS request is verified by default using requests CA bundle which comes from Mozilla. Verification using a custom CA bundle is not yet supported. Set to False to skip verification."
      },
      "headers": {
        "type": "object",
        "description": "HTTP headers to use with the request."
      }
    },
    "tags": [],
    "description": "Action that performs an http request.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:http",
    "pack": "core",
    "ref": "core.http",
    "id": "5ae3adba09f69901cfc95478",
    "runner_type": "http-request"
  },
  {
    "name": "local",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the local host."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action that executes an arbitrary Linux command on the localhost.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:local",
    "pack": "core",
    "ref": "core.local",
    "id": "5ae3adba09f69901cfc95479",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "local_sudo",
    "parameters": {
      "sudo": {
        "default": true,
        "type": "boolean",
        "description": "The command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action that executes an arbitrary Linux command on the localhost.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:local_sudo",
    "pack": "core",
    "ref": "core.local_sudo",
    "id": "5ae3adba09f69901cfc9547a",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "noop",
    "parameters": {},
    "tags": [],
    "description": "Action that does nothing",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:noop",
    "pack": "core",
    "ref": "core.noop",
    "id": "5ae3adba09f69901cfc9547b",
    "runner_type": "noop"
  },
  {
    "name": "pause",
    "parameters": {
      "max_pause": {
        "position": 0,
        "required": true,
        "type": "integer",
        "description": "Maximum length of time to pause (Seconds)"
      },
      "random": {
        "default": false,
        "position": 1,
        "required": false,
        "type": "boolean",
        "description": "Randomize pause for current flow/sub-flow to a max of max_pause. "
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action to pause current thread of workflow/sub-workflow.",
    "enabled": true,
    "entry_point": "pause.py",
    "notify": {},
    "uid": "action:core:pause",
    "pack": "core",
    "ref": "core.pause",
    "id": "5ae3adba09f69901cfc9547c",
    "runner_type": "python-script"
  },
  {
    "name": "remote",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Action to execute arbitrary linux command remotely.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:remote",
    "pack": "core",
    "ref": "core.remote",
    "id": "5ae3adba09f69901cfc9547d",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "remote_sudo",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": true,
        "type": "boolean",
        "description": "The remote command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Action to execute arbitrary linux command remotely.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:remote_sudo",
    "pack": "core",
    "ref": "core.remote_sudo",
    "id": "5ae3adba09f69901cfc9547e",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "sendmail",
    "parameters": {
      "send_empty_body": {
        "default": true,
        "position": 3,
        "required": false,
        "type": "boolean",
        "description": "Send a message even if the body is empty."
      },
      "body": {
        "position": 5,
        "required": true,
        "type": "string",
        "description": "Body of the email."
      },
      "from": {
        "default": "stanley",
        "position": 0,
        "required": false,
        "type": "string",
        "description": "Sender email address."
      },
      "content_type": {
        "default": "text/html",
        "position": 4,
        "type": "string",
        "description": "Content type of message to be sent"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo.",
        "immutable": true
      },
      "attachments": {
        "position": 6,
        "required": false,
        "type": "string",
        "description": "Array of attachment file paths, comma-delimited."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "to": {
        "position": 1,
        "required": true,
        "type": "string",
        "description": "Recipient email address."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "subject": {
        "position": 2,
        "required": true,
        "type": "string",
        "description": "Subject of the email."
      }
    },
    "tags": [],
    "description": "This sends an email",
    "enabled": true,
    "entry_point": "send_mail/send_mail",
    "notify": {},
    "uid": "action:core:sendmail",
    "pack": "core",
    "ref": "core.sendmail",
    "id": "5ae3adba09f69901cfc9547f",
    "runner_type": "local-shell-script"
  },
  {
    "name": "uuid",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "uuid_type": {
        "default": "uuid4",
        "enum": [
          "uuid1",
          "uuid4"
        ],
        "type": "string",
        "description": "UUID type (uuid1 or uuid4). Defaults to uuid4"
      }
    },
    "tags": [],
    "description": "Generate a new UUID (default uuid4)",
    "enabled": true,
    "entry_point": "generate_uuid.py",
    "notify": {},
    "uid": "action:core:uuid",
    "pack": "core",
    "ref": "core.uuid",
    "id": "5ae3adba09f69901cfc95480",
    "runner_type": "python-script"
  },
  {
    "name": "windows_cmd",
    "parameters": {
      "username": {
        "default": "Administrator",
        "required": true,
        "type": "string",
        "description": "Username used to log-in."
      },
      "password": {
        "secret": true,
        "required": true,
        "type": "string",
        "description": "Password used to log in."
      },
      "host": {
        "required": true,
        "type": "string",
        "description": "Host to execute the command on"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Windows command to be executed on the remote host."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action to execute arbitrary Windows command remotely.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:core:windows_cmd",
    "pack": "core",
    "ref": "core.windows_cmd",
    "id": "5ae3adba09f69901cfc95481",
    "runner_type": "windows-cmd"
  },
  {
    "name": "send_email",
    "parameters": {
      "account": {
        "required": true,
        "type": "string",
        "description": "Account to use. Must be configured in email.yaml"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "attachments": {
        "items": {
          "type": "string"
        },
        "type": "array",
        "description": "The absolute paths to the files to be included as attachments."
      },
      "mime": {
        "default": "plain",
        "enum": [
          "plain",
          "html"
        ],
        "type": "string",
        "description": "The mime type of the message (html or plain)."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "email_to": {
        "required": true,
        "type": "array",
        "description": "Email addresses to send TO."
      },
      "message": {
        "required": true,
        "type": "string",
        "description": "Message to send on the email"
      },
      "email_from": {
        "required": true,
        "type": "string",
        "description": "Email address to use as FROM."
      },
      "subject": {
        "required": true,
        "type": "string",
        "description": "Subject of the email"
      }
    },
    "tags": [],
    "description": "Send an email.",
    "enabled": true,
    "entry_point": "send_email.py",
    "notify": {},
    "uid": "action:email:send_email",
    "pack": "email",
    "ref": "email.send_email",
    "id": "5aed218c2e5ce900d76109cb",
    "runner_type": "python-script"
  },
  {
    "name": "action_chain_streaming_demo",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "sleep_delay": {
        "default": 0.2,
        "required": true,
        "type": "number"
      },
      "count": {
        "default": 5,
        "required": true,
        "type": "integer"
      }
    },
    "tags": [],
    "description": "Action output streaming functionality demo for action chain workflows.",
    "enabled": true,
    "entry_point": "chains/action_chain_streaming_demo.yaml",
    "notify": {},
    "uid": "action:examples:action_chain_streaming_demo",
    "pack": "examples",
    "ref": "examples.action_chain_streaming_demo",
    "id": "5ae7310709f699030501bc75",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-cancel",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "tempfile": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Simple action chain to test cancellation.",
    "enabled": true,
    "entry_point": "chains/chain_test_cancel.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-cancel",
    "pack": "examples",
    "ref": "examples.chain-test-cancel",
    "id": "5ae7310709f699030501bc77",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-cancel-with-subworkflow",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "tempfile": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Simple action chain with a Mistral subworkflow to test cancellation.",
    "enabled": true,
    "entry_point": "chains/chain_test_cancel_with_subworkflow.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-cancel-with-subworkflow",
    "pack": "examples",
    "ref": "examples.chain-test-cancel-with-subworkflow",
    "id": "5ae7310709f699030501bc76",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-inquiry",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "A basic ActionChain workflow illustrating the use of Inquiries",
    "enabled": true,
    "entry_point": "chains/chain_test_inquiry.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-inquiry",
    "pack": "examples",
    "ref": "examples.chain-test-inquiry",
    "id": "5ae7310709f699030501bc79",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-inquiry-parent",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "A workflow to test Inquiry pausing nested actionchain workflows",
    "enabled": true,
    "entry_point": "chains/chain_test_inquiry_parent.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-inquiry-parent",
    "pack": "examples",
    "ref": "examples.chain-test-inquiry-parent",
    "id": "5ae7310709f699030501bc78",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-pause-resume",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "tempfile": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Simple action chain to test pause and resume.",
    "enabled": true,
    "entry_point": "chains/chain_test_pause_resume.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-pause-resume",
    "pack": "examples",
    "ref": "examples.chain-test-pause-resume",
    "id": "5ae7310709f699030501bc7c",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-pause-resume-with-subchain",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "tempfile": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Simple action chain with a subchain to test pause and resume.",
    "enabled": true,
    "entry_point": "chains/chain_test_pause_resume_with_subchain.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-pause-resume-with-subchain",
    "pack": "examples",
    "ref": "examples.chain-test-pause-resume-with-subchain",
    "id": "5ae7310709f699030501bc7a",
    "runner_type": "action-chain"
  },
  {
    "name": "chain-test-pause-resume-with-subworkflow",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "tempfile": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Simple action chain with a Mistral subworkflow to test pause and resume.",
    "enabled": true,
    "entry_point": "chains/chain_test_pause_resume_with_subworkflow.yaml",
    "notify": {},
    "uid": "action:examples:chain-test-pause-resume-with-subworkflow",
    "pack": "examples",
    "ref": "examples.chain-test-pause-resume-with-subworkflow",
    "id": "5ae7310709f699030501bc7b",
    "runner_type": "action-chain"
  },
  {
    "name": "cloudslang-basic",
    "parameters": {
      "inputs": {
        "default": {},
        "type": "object",
        "description": "Inputs which will be available to CloudSlang flow execution(e.g. input1=val1,input2=val2)"
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "text": {
        "type": "string",
        "description": "Text to print to the console"
      }
    },
    "tags": [],
    "description": "Greet StackStorm from cloudslang ;) !",
    "enabled": true,
    "entry_point": "workflows/print_text.sl",
    "notify": {},
    "uid": "action:examples:cloudslang-basic",
    "pack": "examples",
    "ref": "examples.cloudslang-basic",
    "id": "5ae7310709f699030501bc7d",
    "runner_type": "cloudslang"
  },
  {
    "name": "data_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja data filters in st2.",
    "enabled": true,
    "entry_point": "chains/data_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:data_jinja_filter",
    "pack": "examples",
    "ref": "examples.data_jinja_filter",
    "id": "5ae7310709f699030501bc7e",
    "runner_type": "action-chain"
  },
  {
    "name": "decrypt_kv_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja crypto filters in st2.",
    "enabled": true,
    "entry_point": "chains/decrypt_kv_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:decrypt_kv_jinja_filter",
    "pack": "examples",
    "ref": "examples.decrypt_kv_jinja_filter",
    "id": "5ae7310709f699030501bc7f",
    "runner_type": "action-chain"
  },
  {
    "name": "echochain",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [
          "c2"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow",
    "enabled": true,
    "entry_point": "chains/echochain.yaml",
    "notify": {
      "on-complete": {
        "routes": [
          "slack"
        ],
        "message": "\"@channel: Action succeeded.\""
      }
    },
    "uid": "action:examples:echochain",
    "pack": "examples",
    "ref": "examples.echochain",
    "id": "5ae7310709f699030501bc80",
    "runner_type": "action-chain"
  },
  {
    "name": "echochain-param",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "input1": {
        "required": true,
        "type": "string",
        "description": "Any string to pass down"
      }
    },
    "tags": [],
    "description": "Action Chain workflow passing variables",
    "enabled": true,
    "entry_point": "chains/echochain_param.yaml",
    "notify": {},
    "uid": "action:examples:echochain-param",
    "pack": "examples",
    "ref": "examples.echochain-param",
    "id": "5ae7310709f699030501bc81",
    "runner_type": "action-chain"
  },
  {
    "name": "echochain_task_failure",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow with task failure",
    "enabled": true,
    "entry_point": "chains/echochain_task_failure.yaml",
    "notify": {},
    "uid": "action:examples:echochain_task_failure",
    "pack": "examples",
    "ref": "examples.echochain_task_failure",
    "id": "5ae7310709f699030501bc82",
    "runner_type": "action-chain"
  },
  {
    "name": "echochain_top_level_failure",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow with a top level (chain) failure",
    "enabled": true,
    "entry_point": "chains/echochain_top_level_failure.yaml",
    "notify": {},
    "uid": "action:examples:echochain_top_level_failure",
    "pack": "examples",
    "ref": "examples.echochain_top_level_failure",
    "id": "5ae7310709f699030501bc83",
    "runner_type": "action-chain"
  },
  {
    "name": "env_reader",
    "parameters": {
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
    "tags": [],
    "description": "Reads env vars.",
    "enabled": true,
    "entry_point": "env_reader.sh",
    "notify": {},
    "uid": "action:examples:env_reader",
    "pack": "examples",
    "ref": "examples.env_reader",
    "id": "5ae7310709f699030501bc84",
    "runner_type": "local-shell-script"
  },
  {
    "name": "forloop_chain",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "github_organization_url": {
        "default": "https://github.com/StackStorm-Exchange",
        "required": false,
        "type": "string",
        "description": "Organization url to parse data from"
      }
    },
    "tags": [],
    "description": "Action Chain to loop over an organization github page and get all the repositories list",
    "enabled": true,
    "entry_point": "chains/forloop_chain.yaml",
    "notify": {},
    "uid": "action:examples:forloop_chain",
    "pack": "examples",
    "ref": "examples.forloop_chain",
    "id": "5ae7310709f699030501bc85",
    "runner_type": "action-chain"
  },
  {
    "name": "forloop_get_github_page",
    "parameters": {
      "url": {
        "required": true,
        "type": "string",
        "description": "Url of the page to be requested"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "page": {
        "required": false,
        "type": "string",
        "description": "Page number to request"
      }
    },
    "tags": [],
    "description": "Action to get the contents of a github page with support to choose the page",
    "enabled": true,
    "entry_point": "pythonactions/forloop_get_github_page.py",
    "notify": {},
    "uid": "action:examples:forloop_get_github_page",
    "pack": "examples",
    "ref": "examples.forloop_get_github_page",
    "id": "5ae7310709f699030501bc86",
    "runner_type": "python-script"
  },
  {
    "name": "forloop_increase_index_and_check_condition",
    "parameters": {
      "index": {
        "required": true,
        "type": "string",
        "description": "Index to be operated on"
      },
      "input": {
        "required": true,
        "type": "object",
        "description": "Dataset to compare to the pagesize"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pagesize": {
        "required": true,
        "type": "string",
        "description": "Expected number of items on each page"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Increase a for-loop index by a certain value and return false if condition is broken",
    "enabled": true,
    "entry_point": "pythonactions/forloop_increase_index_and_check_condition.py",
    "notify": {},
    "uid": "action:examples:forloop_increase_index_and_check_condition",
    "pack": "examples",
    "ref": "examples.forloop_increase_index_and_check_condition",
    "id": "5ae7310709f699030501bc87",
    "runner_type": "python-script"
  },
  {
    "name": "forloop_parse_github_repos",
    "parameters": {
      "content": {
        "required": true,
        "type": "string",
        "description": "Complete html page of the github request"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action to parse the data and make it readable",
    "enabled": true,
    "entry_point": "pythonactions/forloop_parse_github_repos.py",
    "notify": {},
    "uid": "action:examples:forloop_parse_github_repos",
    "pack": "examples",
    "ref": "examples.forloop_parse_github_repos",
    "id": "5ae7310709f699030501bc88",
    "runner_type": "python-script"
  },
  {
    "name": "forloop_push_github_repos",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "data_to_push": {
        "required": true,
        "type": "object",
        "description": "Dictonary of the data to be pushed"
      }
    },
    "tags": [],
    "description": "Action to push the data to an external service",
    "enabled": true,
    "entry_point": "pythonactions/forloop_push_github_repos.py",
    "notify": {},
    "uid": "action:examples:forloop_push_github_repos",
    "pack": "examples",
    "ref": "examples.forloop_push_github_repos",
    "id": "5ae7310709f699030501bc89",
    "runner_type": "python-script"
  },
  {
    "name": "get_windows_uptime",
    "parameters": {
      "username": {
        "default": "Administrator",
        "required": true,
        "type": "string",
        "description": "Username used to log-in."
      },
      "host": {
        "required": true,
        "type": "string",
        "description": "Host to execute the command on"
      },
      "password": {
        "secret": true,
        "required": true,
        "type": "string",
        "description": "Password used to log in."
      },
      "share": {
        "default": "C$",
        "required": true,
        "type": "string",
        "description": "Name of the Windows share where script files are uploaded"
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action that returns Windows host's uptime.",
    "enabled": true,
    "entry_point": "windows/get_uptime.ps1",
    "notify": {},
    "uid": "action:examples:get_windows_uptime",
    "pack": "examples",
    "ref": "examples.get_windows_uptime",
    "id": "5ae7310909f699030501bced",
    "runner_type": "windows-script"
  },
  {
    "name": "hello",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "default": "echo Hello {{name}}!",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host.",
        "immutable": true
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      },
      "name": {
        "default": "human",
        "type": "string",
        "description": "A human name"
      }
    },
    "tags": [],
    "description": "Says hello with a shell command",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:examples:hello",
    "pack": "examples",
    "ref": "examples.hello",
    "id": "5ae3adba09f69901cfc95496",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "invoke-mistral-with-jinja",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "cmd": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Example to invoke a Mistral workflow from an Action Chain",
    "enabled": true,
    "entry_point": "chains/invoke_mistral_with_jinja.yaml",
    "notify": {},
    "uid": "action:examples:invoke-mistral-with-jinja",
    "pack": "examples",
    "ref": "examples.invoke-mistral-with-jinja",
    "id": "5ae7310709f699030501bc8a",
    "runner_type": "action-chain"
  },
  {
    "name": "isprime",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "value": {
        "type": "integer"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Check if an integer is prime.",
    "enabled": true,
    "entry_point": "pythonactions/isprime.py",
    "notify": {},
    "uid": "action:examples:isprime",
    "pack": "examples",
    "ref": "examples.isprime",
    "id": "5ae7310709f699030501bc8b",
    "runner_type": "python-script"
  },
  {
    "name": "json_escape_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja json_escape filter",
    "enabled": true,
    "entry_point": "chains/json_escape_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:json_escape_jinja_filter",
    "pack": "examples",
    "ref": "examples.json_escape_jinja_filter",
    "id": "5ae7310709f699030501bc8c",
    "runner_type": "action-chain"
  },
  {
    "name": "json_string_to_object",
    "parameters": {
      "json_str": {
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Convert JSON str to object.",
    "enabled": true,
    "entry_point": "pythonactions/json_string_to_object.py",
    "notify": {},
    "uid": "action:examples:json_string_to_object",
    "pack": "examples",
    "ref": "examples.json_string_to_object",
    "id": "5ae7310709f699030501bc8d",
    "runner_type": "python-script"
  },
  {
    "name": "local-notify",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "required": true,
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action that executes an arbitrary Linux command on the localhost.",
    "enabled": true,
    "entry_point": "",
    "notify": {
      "on-complete": {
        "routes": [
          "slack"
        ],
        "message": "\"@channel: Action run by {{action_context.user}} succeeded. Cmd run was {{cmd}}.\""
      }
    },
    "uid": "action:examples:local-notify",
    "pack": "examples",
    "ref": "examples.local-notify",
    "id": "5ae7310709f699030501bc8f",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "local-random-exit",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action that returns a randomly generated exit code.",
    "enabled": true,
    "entry_point": "bash_exit_code/bash_exit_code.sh",
    "notify": {},
    "uid": "action:examples:local-random-exit",
    "pack": "examples",
    "ref": "examples.local-random-exit",
    "id": "5ae7310709f699030501bc8e",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "local_command_runner_print_to_stdout_and_stderr",
    "parameters": {
      "count": {
        "default": 100,
        "position": 1,
        "required": true,
        "type": "integer",
        "description": "Number of repetitions."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "sleep_delay": {
        "default": 0.5,
        "position": 2,
        "required": true,
        "type": "number",
        "description": "Sleep delay between each repetition."
      },
      "cmd": {
        "default": "i=0; while [ $i -lt {{ count }} ]; do j=$[$i+1]; if [ $(( $i % 2)) -eq 0 ]; then echo \"stderr line ${j}\" >&2; else echo \"stdout line ${j}\"; fi;\ni=$[$i+1];\nsleep {{ sleep_delay }}; done\n",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action which periodically prints to stdout and stderr. Useful for testing action output streaming.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:examples:local_command_runner_print_to_stdout_and_stderr",
    "pack": "examples",
    "ref": "examples.local_command_runner_print_to_stdout_and_stderr",
    "id": "5ae7310709f699030501bc90",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "local_script_runner_print_to_stdout_and_stderr",
    "parameters": {
      "count": {
        "default": 100,
        "position": 1,
        "required": true,
        "type": "integer",
        "description": "Number of repetitions."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "sleep_delay": {
        "default": 0.5,
        "position": 2,
        "required": true,
        "type": "number",
        "description": "Sleep delay between each repetition."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the script will be executed in"
      }
    },
    "tags": [],
    "description": "Action which periodically prints to stdout and stderr. Useful for testing action output streaming.",
    "enabled": true,
    "entry_point": "print_to_stdout_and_stderr.sh",
    "notify": {},
    "uid": "action:examples:local_script_runner_print_to_stdout_and_stderr",
    "pack": "examples",
    "ref": "examples.local_script_runner_print_to_stdout_and_stderr",
    "id": "5ae7310709f699030501bc91",
    "runner_type": "local-shell-script"
  },
  {
    "name": "mistral-ask-basic",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A basic Mistral workflow illustrating the use of Inquiries",
    "enabled": true,
    "entry_point": "workflows/mistral-ask-basic.yaml",
    "notify": {},
    "uid": "action:examples:mistral-ask-basic",
    "pack": "examples",
    "ref": "examples.mistral-ask-basic",
    "id": "5ae7310709f699030501bc92",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-ask-parent",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Workflow for demonstrating \"ask\" functionality\n",
    "enabled": true,
    "entry_point": "workflows/mistral-ask-parent.yaml",
    "notify": {},
    "uid": "action:examples:mistral-ask-parent",
    "pack": "examples",
    "ref": "examples.mistral-ask-parent",
    "id": "5ae7310709f699030501bc93",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-basic",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "timeout": {
        "default": 60,
        "type": "integer"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "cmd": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Run a local linux command",
    "enabled": true,
    "entry_point": "workflows/mistral-basic.yaml",
    "notify": {},
    "uid": "action:examples:mistral-basic",
    "pack": "examples",
    "ref": "examples.mistral-basic",
    "id": "5ae7310809f699030501bc95",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-basic-two-tasks-with-notifications",
    "parameters": {
      "skip_notify": {
        "default": [
          "task2"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Run mistral workflow with two tasks.",
    "enabled": true,
    "entry_point": "workflows/mistral-basic-two-tasks-with-notifications.yaml",
    "notify": {
      "on-complete": {
        "routes": [
          "slack"
        ],
        "message": "@channel: Action succeeded."
      }
    },
    "uid": "action:examples:mistral-basic-two-tasks-with-notifications",
    "pack": "examples",
    "ref": "examples.mistral-basic-two-tasks-with-notifications",
    "id": "5ae7310709f699030501bc94",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-branching",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "which": {
        "required": true,
        "type": "string",
        "enum": [
          "a",
          "b",
          "c"
        ]
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Demonstrate how to use condition to select branch of execution.",
    "enabled": true,
    "entry_point": "workflows/mistral-branching.yaml",
    "notify": {},
    "uid": "action:examples:mistral-branching",
    "pack": "examples",
    "ref": "examples.mistral-branching",
    "id": "5ae7310809f699030501bc96",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-env-var",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Example to return workflow's environment variable",
    "enabled": true,
    "entry_point": "workflows/mistral-env-var.yaml",
    "notify": {},
    "uid": "action:examples:mistral-env-var",
    "pack": "examples",
    "ref": "examples.mistral-env-var",
    "id": "5ae7310809f699030501bc97",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-error-bad-action",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow for testing error handling if action does not exist.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-error-bad-action.yaml",
    "notify": {},
    "uid": "action:examples:mistral-error-bad-action",
    "pack": "examples",
    "ref": "examples.mistral-error-bad-action",
    "id": "5ae7310809f699030501bc98",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-error-bad-task-transition",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test bad task transition statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-error-bad-task-transition.yaml",
    "notify": {},
    "uid": "action:examples:mistral-error-bad-task-transition",
    "pack": "examples",
    "ref": "examples.mistral-error-bad-task-transition",
    "id": "5ae7310809f699030501bc99",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-error-bad-wf-arg",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-error-bad-wf-arg.wf1",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input passed to subworkflow.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-error-bad-wf-arg.yaml",
    "notify": {},
    "uid": "action:examples:mistral-error-bad-wf-arg",
    "pack": "examples",
    "ref": "examples.mistral-error-bad-wf-arg",
    "id": "5ae7310809f699030501bc9a",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-error-bad-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input to with-items statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-error-bad-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-error-bad-with-items",
    "pack": "examples",
    "ref": "examples.mistral-error-bad-with-items",
    "id": "5ae7310809f699030501bc9b",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-handle-error",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "cmd": {
        "default": "foobar",
        "type": "string",
        "immutable": true
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Workflow example for error handling.",
    "enabled": true,
    "entry_point": "workflows/mistral-handle-error.yaml",
    "notify": {},
    "uid": "action:examples:mistral-handle-error",
    "pack": "examples",
    "ref": "examples.mistral-handle-error",
    "id": "5ae7310809f699030501bc9d",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-handle-error-task-default",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "cmd": {
        "default": "foobar",
        "type": "string",
        "immutable": true
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Workflow example for error handling.",
    "enabled": true,
    "entry_point": "workflows/mistral-handle-error-task-default.yaml",
    "notify": {},
    "uid": "action:examples:mistral-handle-error-task-default",
    "pack": "examples",
    "ref": "examples.mistral-handle-error-task-default",
    "id": "5ae7310809f699030501bc9c",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-handle-retry",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-handle-retry.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Workflow example for error, rollback, and retry.",
    "enabled": true,
    "entry_point": "workflows/mistral-handle-retry.yaml",
    "notify": {},
    "uid": "action:examples:mistral-handle-retry",
    "pack": "examples",
    "ref": "examples.mistral-handle-retry",
    "id": "5ae7310809f699030501bc9e",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-branching",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "which": {
        "required": true,
        "type": "string",
        "enum": [
          "a",
          "b",
          "c"
        ]
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Demonstrate how to use condition to select branch of execution.",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-branching.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-branching",
    "pack": "examples",
    "ref": "examples.mistral-jinja-branching",
    "id": "5ae7310809f699030501bc9f",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-env-var",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Example to return workflow's environment variable",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-env-var.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-env-var",
    "pack": "examples",
    "ref": "examples.mistral-jinja-env-var",
    "id": "5ae7310809f699030501bca0",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-repeat-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "cmds": {
        "minItems": 1,
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "tags": [],
    "description": "Run several linux commands in a single task.",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-repeat-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-repeat-with-items",
    "pack": "examples",
    "ref": "examples.mistral-jinja-repeat-with-items",
    "id": "5ae7310809f699030501bca1",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-st2kv-system-scope",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow that accesses st2kv via jinja to get a system scope kvp from st2.\n",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-st2kv-system-scope.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-st2kv-system-scope",
    "pack": "examples",
    "ref": "examples.mistral-jinja-st2kv-system-scope",
    "id": "5ae7310809f699030501bca3",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-st2kv-system-scope-encrypted",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow that accesses st2kv via jinja to get an encrypted system scope kvp from st2.\n",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-st2kv-system-scope-encrypted.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-st2kv-system-scope-encrypted",
    "pack": "examples",
    "ref": "examples.mistral-jinja-st2kv-system-scope-encrypted",
    "id": "5ae7310809f699030501bca2",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-jinja-workbook-complex",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "vm_name": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "default": "examples.mistral-jinja-workbook-complex.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      },
      "cpu_cores": {
        "default": 1,
        "type": "integer"
      },
      "memory_mb": {
        "default": 1024,
        "type": "integer"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Run a series of simulated actions.",
    "enabled": true,
    "entry_point": "workflows/mistral-jinja-workbook-complex.yaml",
    "notify": {},
    "uid": "action:examples:mistral-jinja-workbook-complex",
    "pack": "examples",
    "ref": "examples.mistral-jinja-workbook-complex",
    "id": "5ae7310809f699030501bca4",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-join",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Demonstrate how to join multiple parallel branches.",
    "enabled": true,
    "entry_point": "workflows/mistral-join.yaml",
    "notify": {},
    "uid": "action:examples:mistral-join",
    "pack": "examples",
    "ref": "examples.mistral-join",
    "id": "5ae7310809f699030501bca5",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-repeat",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "count": {
        "default": 3,
        "type": "integer"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "cmd": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Repeat a local linux command for given number of times.",
    "enabled": true,
    "entry_point": "workflows/mistral-repeat.yaml",
    "notify": {},
    "uid": "action:examples:mistral-repeat",
    "pack": "examples",
    "ref": "examples.mistral-repeat",
    "id": "5ae7310809f699030501bca7",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-repeat-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "cmds": {
        "minItems": 1,
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "tags": [],
    "description": "Run several linux commands in a single task.",
    "enabled": true,
    "entry_point": "workflows/mistral-repeat-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-repeat-with-items",
    "pack": "examples",
    "ref": "examples.mistral-repeat-with-items",
    "id": "5ae7310809f699030501bca6",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-streaming-demo",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "count": {
        "default": 5,
        "required": true,
        "type": "integer"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "sleep_delay": {
        "default": 0.2,
        "required": true,
        "type": "number"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Action output streaming functionality demo for Mistral workflows.",
    "enabled": true,
    "entry_point": "workflows/mistral-streaming-demo.yaml",
    "notify": {},
    "uid": "action:examples:mistral-streaming-demo",
    "pack": "examples",
    "ref": "examples.mistral-streaming-demo",
    "id": "5ae7310809f699030501bca8",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-cancel",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cancel feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-cancel.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-cancel",
    "pack": "examples",
    "ref": "examples.mistral-test-cancel",
    "id": "5ae7310809f699030501bcab",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-cancel-subworkflow-action",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cascading cancel of subworkflow action.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-cancel-subworkflow-action.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-cancel-subworkflow-action",
    "pack": "examples",
    "ref": "examples.mistral-test-cancel-subworkflow-action",
    "id": "5ae7310809f699030501bca9",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-cancel-subworkflow-chain",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cascading cancellation of subchain.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-cancel-subworkflow-chain.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-cancel-subworkflow-chain",
    "pack": "examples",
    "ref": "examples.mistral-test-cancel-subworkflow-chain",
    "id": "5ae7310809f699030501bcaa",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-from-json-string",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "input_str": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"from_json_string\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-from-json-string.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-from-json-string",
    "pack": "examples",
    "ref": "examples.mistral-test-func-from-json-string",
    "id": "5ae7310809f699030501bcac",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-from-yaml-string",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "input_str": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"from_yaml_string\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-from-yaml-string.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-from-yaml-string",
    "pack": "examples",
    "ref": "examples.mistral-test-func-from-yaml-string",
    "id": "5ae7310809f699030501bcad",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-json-escape",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "input_str": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test json_escape custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-json-escape.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-json-escape",
    "pack": "examples",
    "ref": "examples.mistral-test-func-json-escape",
    "id": "5ae7310809f699030501bcae",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-jsonpath-query",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "input_query": {
        "required": true,
        "type": "string"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "input_obj": {
        "required": true,
        "type": "object"
      }
    },
    "tags": [],
    "description": "Test jsonpath_query custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-jsonpath-query.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-jsonpath-query",
    "pack": "examples",
    "ref": "examples.mistral-test-func-jsonpath-query",
    "id": "5ae7310809f699030501bcaf",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-regex-match",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "regex_pattern": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "input_str": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Test regex_match custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-regex-match.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-regex-match",
    "pack": "examples",
    "ref": "examples.mistral-test-func-regex-match",
    "id": "5ae7310809f699030501bcb0",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-regex-replace",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "regex_pattern": {
        "required": true,
        "type": "string"
      },
      "replacement_str": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "input_str": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Test regex_replace custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-regex-replace.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-regex-replace",
    "pack": "examples",
    "ref": "examples.mistral-test-func-regex-replace",
    "id": "5ae7310809f699030501bcb1",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-regex-search",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "regex_pattern": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "input_str": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Test regex_search custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-regex-search.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-regex-search",
    "pack": "examples",
    "ref": "examples.mistral-test-func-regex-search",
    "id": "5ae7310809f699030501bcb2",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-regex-substring",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "regex_pattern": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "input_str": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "Test regex_substring custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-regex-substring.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-regex-substring",
    "pack": "examples",
    "ref": "examples.mistral-test-func-regex-substring",
    "id": "5ae7310809f699030501bcb3",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-to-complex",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "input_obj": {
        "required": true,
        "type": "object"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"to_complex\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-to-complex.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-to-complex",
    "pack": "examples",
    "ref": "examples.mistral-test-func-to-complex",
    "id": "5ae7310809f699030501bcb4",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-to-human-time-from-seconds",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "seconds": {
        "required": true,
        "type": "integer"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test to_human_time_from_seconds custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-to-human-time-from-seconds.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-to-human-time-from-seconds",
    "pack": "examples",
    "ref": "examples.mistral-test-func-to-human-time-from-seconds",
    "id": "5ae7310809f699030501bcb5",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-to-json-string",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "input_obj": {
        "required": true,
        "type": "object"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"to_json_string\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-to-json-string.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-to-json-string",
    "pack": "examples",
    "ref": "examples.mistral-test-func-to-json-string",
    "id": "5ae7310809f699030501bcb6",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-to-yaml-string",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "input_obj": {
        "required": true,
        "type": "object"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"to_yaml_string\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-to-yaml-string.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-to-yaml-string",
    "pack": "examples",
    "ref": "examples.mistral-test-func-to-yaml-string",
    "id": "5ae7310809f699030501bcb7",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-use-none",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "input_str": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Example for using the custom filter \"use_none\"",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-use-none.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-use-none",
    "pack": "examples",
    "ref": "examples.mistral-test-func-use-none",
    "id": "5ae7310809f699030501bcb8",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-bump-major",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "version": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test version_bump_major custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-bump-major.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-bump-major",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-bump-major",
    "id": "5ae7310809f699030501bcb9",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-bump-minor",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "version": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test version_bump_minor custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-bump-minor.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-bump-minor",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-bump-minor",
    "id": "5ae7310809f699030501bcba",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-bump-patch",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "version": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test version_bump_patch custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-bump-patch.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-bump-patch",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-bump-patch",
    "id": "5ae7310909f699030501bcbb",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-compare",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "version_a": {
        "required": true,
        "type": "string"
      },
      "version_b": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Test version_compare custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-compare.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-compare",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-compare",
    "id": "5ae7310909f699030501bcbc",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-equal",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "version_a": {
        "required": true,
        "type": "string"
      },
      "version_b": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Test version_equal custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-equal.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-equal",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-equal",
    "id": "5ae7310909f699030501bcbd",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-less-than",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "version_a": {
        "required": true,
        "type": "string"
      },
      "version_b": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Test version_less_than custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-less-than.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-less-than",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-less-than",
    "id": "5ae7310909f699030501bcbe",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-match",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "version_a": {
        "required": true,
        "type": "string"
      },
      "version_b": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Test version_match custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-match.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-match",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-match",
    "id": "5ae7310909f699030501bcbf",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-more-than",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "version_a": {
        "required": true,
        "type": "string"
      },
      "version_b": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Test version_more_than custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-more-than.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-more-than",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-more-than",
    "id": "5ae7310909f699030501bcc0",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-func-version-strip-patch",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "version": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Test version_strip_patch custom filter in mistral",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-func-version-strip-patch.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-func-version-strip-patch",
    "pack": "examples",
    "ref": "examples.mistral-test-func-version-strip-patch",
    "id": "5ae7310909f699030501bcc1",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-jinja-bad-expr",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A basic workflow for testing Jinja evaluation error.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-jinja-bad-expr.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-jinja-bad-expr",
    "pack": "examples",
    "ref": "examples.mistral-test-jinja-bad-expr",
    "id": "5ae7310909f699030501bcc2",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-jinja-bad-publish",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A basic workflow for testing Jinja evaluation error.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-jinja-bad-publish.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-jinja-bad-publish",
    "pack": "examples",
    "ref": "examples.mistral-test-jinja-bad-publish",
    "id": "5ae7310909f699030501bcc3",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-jinja-bad-subworkflow-input",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-test-jinja-bad-subworkflow-input.wf1",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input passed to subworkflow.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-jinja-bad-subworkflow-input.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-jinja-bad-subworkflow-input",
    "pack": "examples",
    "ref": "examples.mistral-test-jinja-bad-subworkflow-input",
    "id": "5ae7310909f699030501bcc4",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-jinja-bad-task-transition",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test bad task transition statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-jinja-bad-task-transition.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-jinja-bad-task-transition",
    "pack": "examples",
    "ref": "examples.mistral-test-jinja-bad-task-transition",
    "id": "5ae7310909f699030501bcc5",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-jinja-bad-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input to with-items statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-jinja-bad-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-jinja-bad-with-items",
    "pack": "examples",
    "ref": "examples.mistral-test-jinja-bad-with-items",
    "id": "5ae7310909f699030501bcc6",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-before-task",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test auto pause specified in the task.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-before-task.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-before-task",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-before-task",
    "id": "5ae7310909f699030501bcc9",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-before-task-subworkflow-action",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cascading pause and resume of subworkflow action.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-before-task-subworkflow-action.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-before-task-subworkflow-action",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-before-task-subworkflow-action",
    "id": "5ae7310909f699030501bcc7",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-before-task-subworkflow-workbook",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "message": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-test-pause-before-task-subworkflow-workbook.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workbook used to test the cascading pause and resume of subworkflow.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-before-task-subworkflow-workbook.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-before-task-subworkflow-workbook",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-before-task-subworkflow-workbook",
    "id": "5ae7310909f699030501bcc8",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-resume",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the pause and resume feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-resume.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-resume",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-resume",
    "id": "5ae7310909f699030501bccd",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-resume-subworkflow-action",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cascading pause and resume of subworkflow action.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-resume-subworkflow-action.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-resume-subworkflow-action",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-resume-subworkflow-action",
    "id": "5ae7310909f699030501bcca",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-resume-subworkflow-chain",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the cascading pause and resume of subchain.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-resume-subworkflow-chain.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-resume-subworkflow-chain",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-resume-subworkflow-chain",
    "id": "5ae7310909f699030501bccb",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-pause-resume-subworkflow-workbook",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "default": "examples.mistral-test-pause-resume-subworkflow-workbook.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string"
      }
    },
    "tags": [],
    "description": "A sample workbook used to test the cascading pause and resume of subworkflow.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-pause-resume-subworkflow-workbook.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-pause-resume-subworkflow-workbook",
    "pack": "examples",
    "ref": "examples.mistral-test-pause-resume-subworkflow-workbook",
    "id": "5ae7310909f699030501bccc",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-rerun",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the rerun feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-rerun.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-rerun",
    "pack": "examples",
    "ref": "examples.mistral-test-rerun",
    "id": "5ae7310909f699030501bcd1",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-rerun-subflow",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-test-rerun-subflow.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the rerun feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-rerun-subflow.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-rerun-subflow",
    "pack": "examples",
    "ref": "examples.mistral-test-rerun-subflow",
    "id": "5ae7310909f699030501bccf",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-rerun-subflow-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-test-rerun-subflow-with-items.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the rerun feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-rerun-subflow-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-rerun-subflow-with-items",
    "pack": "examples",
    "ref": "examples.mistral-test-rerun-subflow-with-items",
    "id": "5ae7310909f699030501bcce",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-rerun-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "tempfile": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test the rerun feature.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-rerun-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-rerun-with-items",
    "pack": "examples",
    "ref": "examples.mistral-test-rerun-with-items",
    "id": "5ae7310909f699030501bcd0",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-yaql-bad-expr",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A basic workflow for testing YAQL evaluation error.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-yaql-bad-expr.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-yaql-bad-expr",
    "pack": "examples",
    "ref": "examples.mistral-test-yaql-bad-expr",
    "id": "5ae7310909f699030501bcd2",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-yaql-bad-publish",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A basic workflow for testing YAQL evaluation error.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-yaql-bad-publish.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-yaql-bad-publish",
    "pack": "examples",
    "ref": "examples.mistral-test-yaql-bad-publish",
    "id": "5ae7310909f699030501bcd3",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-yaql-bad-subworkflow-input",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-test-yaql-bad-subworkflow-input.wf1",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input passed to subworkflow.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-yaql-bad-subworkflow-input.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-yaql-bad-subworkflow-input",
    "pack": "examples",
    "ref": "examples.mistral-test-yaql-bad-subworkflow-input",
    "id": "5ae7310909f699030501bcd4",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-yaql-bad-task-transition",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow used to test bad task transition statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-yaql-bad-task-transition.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-yaql-bad-task-transition",
    "pack": "examples",
    "ref": "examples.mistral-test-yaql-bad-task-transition",
    "id": "5ae7310909f699030501bcd5",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-test-yaql-bad-with-items",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow for testing bad input to with-items statement.",
    "enabled": true,
    "entry_point": "workflows/tests/mistral-test-yaql-bad-with-items.yaml",
    "notify": {},
    "uid": "action:examples:mistral-test-yaql-bad-with-items",
    "pack": "examples",
    "ref": "examples.mistral-test-yaql-bad-with-items",
    "id": "5ae7310909f699030501bcd6",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-with-items-concurrency",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "count": {
        "default": 6,
        "type": "integer"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "cmd": {
        "required": true,
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Repeat a local linux command for given number of times.",
    "enabled": true,
    "entry_point": "workflows/mistral-with-items-concurrency.yaml",
    "notify": {},
    "uid": "action:examples:mistral-with-items-concurrency",
    "pack": "examples",
    "ref": "examples.mistral-with-items-concurrency",
    "id": "5ae7310909f699030501bcd7",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-workbook-basic",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "cmd": {
        "required": true,
        "type": "string"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      }
    },
    "tags": [],
    "description": "Run a local linux command",
    "enabled": true,
    "entry_point": "workflows/mistral-workbook-basic.yaml",
    "notify": {},
    "uid": "action:examples:mistral-workbook-basic",
    "pack": "examples",
    "ref": "examples.mistral-workbook-basic",
    "id": "5ae7310909f699030501bcd8",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-workbook-complex",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "vm_name": {
        "required": true,
        "type": "string"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "default": "examples.mistral-workbook-complex.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      },
      "cpu_cores": {
        "default": 1,
        "type": "integer"
      },
      "memory_mb": {
        "default": 1024,
        "type": "integer"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      }
    },
    "tags": [],
    "description": "Run a series of simulated actions.",
    "enabled": true,
    "entry_point": "workflows/mistral-workbook-complex.yaml",
    "notify": {},
    "uid": "action:examples:mistral-workbook-complex",
    "pack": "examples",
    "ref": "examples.mistral-workbook-complex",
    "id": "5ae7310909f699030501bcd9",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-workbook-multiple-subflows",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "default": "examples.mistral-workbook-multiple-subflows.main",
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Run a series of subflows to illustrate some uncommon cases.",
    "enabled": true,
    "entry_point": "workflows/mistral-workbook-multiple-subflows.yaml",
    "notify": {},
    "uid": "action:examples:mistral-workbook-multiple-subflows",
    "pack": "examples",
    "ref": "examples.mistral-workbook-multiple-subflows",
    "id": "5ae7310909f699030501bcda",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-workbook-subflows",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "adjective": {
        "default": "awesome",
        "type": "string"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "subject": {
        "default": "StackStorm",
        "type": "string"
      }
    },
    "tags": [],
    "description": "Test the output for a series of mistral-basic workflows.",
    "enabled": true,
    "entry_point": "workflows/mistral-workbook-subflows.yaml",
    "notify": {},
    "uid": "action:examples:mistral-workbook-subflows",
    "pack": "examples",
    "ref": "examples.mistral-workbook-subflows",
    "id": "5ae7310909f699030501bcdb",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-yaql-st2kv-system-scope",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow that uses the YAQL function st2kv to get a system scope kvp from st2.\n",
    "enabled": true,
    "entry_point": "workflows/mistral-yaql-st2kv-system-scope.yaml",
    "notify": {},
    "uid": "action:examples:mistral-yaql-st2kv-system-scope",
    "pack": "examples",
    "ref": "examples.mistral-yaql-st2kv-system-scope",
    "id": "5ae7310909f699030501bcdc",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral-yaql-st2kv-user-scope",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "A sample workflow that uses the YAQL function st2kv to get a user scope kvp from st2.\n",
    "enabled": true,
    "entry_point": "workflows/mistral-yaql-st2kv-user-scope.yaml",
    "notify": {},
    "uid": "action:examples:mistral-yaql-st2kv-user-scope",
    "pack": "examples",
    "ref": "examples.mistral-yaql-st2kv-user-scope",
    "id": "5ae7310909f699030501bcdd",
    "runner_type": "mistral-v2"
  },
  {
    "name": "mistral_examples",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Run selected Mistral examples",
    "enabled": true,
    "entry_point": "chains/mistral_examples.yaml",
    "notify": {},
    "uid": "action:examples:mistral_examples",
    "pack": "examples",
    "ref": "examples.mistral_examples",
    "id": "5ae7310909f699030501bcde",
    "runner_type": "action-chain"
  },
  {
    "name": "object_return",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Just an example action that returns an object.",
    "enabled": true,
    "entry_point": "pythonactions/object_return.py",
    "notify": {},
    "uid": "action:examples:object_return",
    "pack": "examples",
    "ref": "examples.object_return",
    "id": "5ae7310909f699030501bcdf",
    "runner_type": "python-script"
  },
  {
    "name": "ping",
    "parameters": {
      "count": {
        "type": "integer"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "A ping host action.",
    "enabled": true,
    "entry_point": "bash_ping/bash_ping.sh",
    "notify": {},
    "uid": "action:examples:ping",
    "pack": "examples",
    "ref": "examples.ping",
    "id": "5ae7310909f699030501bce0",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "print_config",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action which prints config values.",
    "enabled": true,
    "entry_point": "print_config.py",
    "notify": {},
    "uid": "action:examples:print_config",
    "pack": "examples",
    "ref": "examples.print_config",
    "id": "5ae7310909f699030501bce1",
    "runner_type": "python-script"
  },
  {
    "name": "publish_data",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "system_info_path": {
        "default": "/system-info",
        "required": true,
        "type": "string",
        "description": "Path where system info is available"
      }
    },
    "tags": [],
    "description": "Example showing use of variables and data publishing in ActinoChain",
    "enabled": true,
    "entry_point": "chains/publish_data.yaml",
    "notify": {},
    "uid": "action:examples:publish_data",
    "pack": "examples",
    "ref": "examples.publish_data",
    "id": "5ae7310909f699030501bce2",
    "runner_type": "action-chain"
  },
  {
    "name": "python_runner_print_to_stdout_and_stderr",
    "parameters": {
      "count": {
        "default": 100,
        "required": true,
        "type": "integer",
        "description": "Number of repetitions."
      },
      "sleep_delay": {
        "default": 0.5,
        "required": true,
        "type": "number",
        "description": "Sleep delay between each repetition."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Action which periodically prints to stdout and stderr. Useful for testing action output streaming.",
    "enabled": true,
    "entry_point": "print_to_stdout_and_stderr.py",
    "notify": {},
    "uid": "action:examples:python_runner_print_to_stdout_and_stderr",
    "pack": "examples",
    "ref": "examples.python_runner_print_to_stdout_and_stderr",
    "id": "5ae7310909f699030501bce3",
    "runner_type": "run-python"
  },
  {
    "name": "regex_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja regex filters in st2.",
    "enabled": true,
    "entry_point": "chains/regex_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:regex_jinja_filter",
    "pack": "examples",
    "ref": "examples.regex_jinja_filter",
    "id": "5ae7310909f699030501bce4",
    "runner_type": "action-chain"
  },
  {
    "name": "remote-fib",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "end": {
        "default": 100,
        "position": 1,
        "required": true,
        "type": "number",
        "description": "End number for fibonacci series"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "start": {
        "default": 1,
        "position": 0,
        "required": true,
        "type": "number",
        "description": "Start number for fibonacci series"
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Action that returns fibonacci numbers in a range.",
    "enabled": true,
    "entry_point": "pythonactions/fibonacci.py",
    "notify": {},
    "uid": "action:examples:remote-fib",
    "pack": "examples",
    "ref": "examples.remote-fib",
    "id": "5ae7310909f699030501bce5",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "remote-random-exit",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "count": {
        "type": "integer"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Action that returns a randomly generated exit code remotely.",
    "enabled": true,
    "entry_point": "bash_random/random2.sh",
    "notify": {},
    "uid": "action:examples:remote-random-exit",
    "pack": "examples",
    "ref": "examples.remote-random-exit",
    "id": "5ae7310909f699030501bce6",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "remote_command_runner_print_to_stdout_and_stderr",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "count": {
        "default": 100,
        "position": 1,
        "required": true,
        "type": "integer",
        "description": "Number of repetitions."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "sleep_delay": {
        "default": 0.5,
        "position": 2,
        "required": true,
        "type": "number",
        "description": "Sleep delay between each repetition."
      },
      "cmd": {
        "default": "i=0; while [ $i -lt {{ count }} ]; do j=$[$i+1]; if [ $(( $i % 2)) -eq 0 ]; then echo \"stderr line ${j}\" >&2; else echo \"stdout line ${j}\"; fi;\ni=$[$i+1];\nsleep {{ sleep_delay }}; done\n",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s)."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "default": "localhost",
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Action which periodically prints to stdout and stderr. Useful for testing action output streaming.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:examples:remote_command_runner_print_to_stdout_and_stderr",
    "pack": "examples",
    "ref": "examples.remote_command_runner_print_to_stdout_and_stderr",
    "id": "5ae7310909f699030501bce7",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "remote_script_runner_print_to_stdout_and_stderr",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "count": {
        "default": 100,
        "position": 1,
        "required": true,
        "type": "integer",
        "description": "Number of repetitions."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "sleep_delay": {
        "default": 0.5,
        "position": 2,
        "required": true,
        "type": "number",
        "description": "Sleep delay between each repetition."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "default": "localhost",
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Action which periodically prints to stdout and stderr. Useful for testing action output streaming.",
    "enabled": true,
    "entry_point": "print_to_stdout_and_stderr.sh",
    "notify": {},
    "uid": "action:examples:remote_script_runner_print_to_stdout_and_stderr",
    "pack": "examples",
    "ref": "examples.remote_script_runner_print_to_stdout_and_stderr",
    "id": "5ae7310909f699030501bce8",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "time_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja time filters in st2.",
    "enabled": true,
    "entry_point": "chains/time_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:time_jinja_filter",
    "pack": "examples",
    "ref": "examples.time_jinja_filter",
    "id": "5ae7310909f699030501bce9",
    "runner_type": "action-chain"
  },
  {
    "name": "ubuntu_pkg_info",
    "parameters": {
      "pkgname": {
        "position": 0,
        "required": true,
        "type": "string",
        "description": "Name of the package for which info is needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the script will be executed in"
      }
    },
    "tags": [],
    "description": "This gets pkg info on ubuntu",
    "enabled": true,
    "entry_point": "ubuntu_pkg_info/ubuntu_pkg_info.py",
    "notify": {},
    "uid": "action:examples:ubuntu_pkg_info",
    "pack": "examples",
    "ref": "examples.ubuntu_pkg_info",
    "id": "5ae7310909f699030501bcea",
    "runner_type": "local-shell-script"
  },
  {
    "name": "version_jinja_filter",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Simple Action Chain workflow showing how to use jinja version filters in st2.",
    "enabled": true,
    "entry_point": "chains/version_jinja_filter.yaml",
    "notify": {},
    "uid": "action:examples:version_jinja_filter",
    "pack": "examples",
    "ref": "examples.version_jinja_filter",
    "id": "5ae7310909f699030501bceb",
    "runner_type": "action-chain"
  },
  {
    "name": "weather",
    "parameters": {
      "username": {
        "type": "string",
        "description": "Username required by basic authentication."
      },
      "cookies": {
        "type": "object",
        "description": "Optional cookies to send with the request."
      },
      "zip": {
        "type": "string"
      },
      "headers": {
        "type": "object",
        "description": "HTTP headers for the request."
      },
      "url": {
        "default": "http://api.openweathermap.org/data/2.5/weather?q={{zip}}&units=imperial",
        "required": true,
        "type": "string",
        "description": "URL to the HTTP endpoint.",
        "immutable": true
      },
      "http_proxy": {
        "type": "string",
        "description": "URL of HTTP proxy to use (e.g. http://10.10.1.10:3128)."
      },
      "auth": {
        "type": "string"
      },
      "https_proxy": {
        "type": "string",
        "description": "URL of HTTPS proxy to use (e.g. http://10.10.1.10:3128)."
      },
      "params": {
        "type": "string"
      },
      "timeout": {
        "default": 60,
        "type": "integer"
      },
      "allow_redirects": {
        "default": false,
        "type": "boolean",
        "description": "Set to True if POST/PUT/DELETE redirect following is allowed."
      },
      "password": {
        "type": "string",
        "description": "Password required by basic authentication."
      },
      "method": {
        "default": "GET",
        "enum": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "type": "string",
        "immutable": true
      },
      "verify_ssl_cert": {
        "default": true,
        "type": "boolean",
        "description": "Certificate for HTTPS request is verified by default using requests CA bundle which comes from Mozilla. Verification using a custom CA bundle is not yet supported. Set to False to skip verification."
      }
    },
    "tags": [],
    "description": "Look up weather via http://openweathermap.org",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:examples:weather",
    "pack": "examples",
    "ref": "examples.weather",
    "id": "5ae7310909f699030501bcec",
    "runner_type": "http-request"
  },
  {
    "name": "yaml_string_to_object",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "yaml_str": {
        "type": "string"
      }
    },
    "tags": [],
    "description": "Convert YAML str to object.",
    "enabled": true,
    "entry_point": "pythonactions/yaml_string_to_object.py",
    "notify": {},
    "uid": "action:examples:yaml_string_to_object",
    "pack": "examples",
    "ref": "examples.yaml_string_to_object",
    "id": "5ae7310909f699030501bcee",
    "runner_type": "python-script"
  },
  {
    "name": "check_loadavg",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "period": {
        "default": "all",
        "position": 0,
        "enum": [
          "1",
          "5",
          "15",
          "all"
        ],
        "type": "string",
        "description": "Time period for load avg: 1,5,15 minutes, or 'all'"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Check CPU Load Average on a Host",
    "enabled": true,
    "entry_point": "checks/check_loadavg.py",
    "notify": {},
    "uid": "action:linux:check_loadavg",
    "pack": "linux",
    "ref": "linux.check_loadavg",
    "id": "5ae3adba09f69901cfc95497",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "check_processes",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "args": {
        "position": 2,
        "type": "string",
        "description": "Additional arguments"
      },
      "search": {
        "default": "name",
        "position": 0,
        "enum": [
          "state",
          "name",
          "pid"
        ],
        "type": "string",
        "description": "Which field to search: state, name, or PID"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\".",
        "immutable": true
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "criteria": {
        "position": 1,
        "type": "string",
        "description": "search criteria.  Can be a regular expression."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Check Interesting Processes",
    "enabled": true,
    "entry_point": "checks/check_processes.py",
    "notify": {},
    "uid": "action:linux:check_processes",
    "pack": "linux",
    "ref": "linux.check_processes",
    "id": "5ae3adba09f69901cfc95498",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "cp",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "cp {{args}} {{source}} {{destination}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "force": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for force"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "args": {
        "default": "-v{% if recursive == true %} -r{% endif %}{% if force == true %} -f{% endif %}",
        "description": "Command line arguments passed to cp"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "source": {
        "required": true,
        "type": "string",
        "description": "List of files/directories to to be copied"
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "destination": {
        "required": true,
        "type": "string",
        "description": "Destination of files/directories"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      },
      "recursive": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for recursive copy"
      }
    },
    "tags": [],
    "description": "Copy file(s)",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:cp",
    "pack": "linux",
    "ref": "linux.cp",
    "id": "5ae3adba09f69901cfc95499",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "diag_loadavg",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "hostname": {
        "required": true,
        "type": "string",
        "description": "Hostname of the server to perform load_alert diagnostics on"
      }
    },
    "tags": [],
    "description": "Diagnostic workflow for high load alert",
    "enabled": true,
    "entry_point": "workflows/diag_loadavg.yaml",
    "notify": {},
    "uid": "action:linux:diag_loadavg",
    "pack": "linux",
    "ref": "linux.diag_loadavg",
    "id": "5ae3adba09f69901cfc9549a",
    "runner_type": "action-chain"
  },
  {
    "name": "dig",
    "parameters": {
      "count": {
        "default": 0,
        "type": "integer"
      },
      "rand": {
        "default": false,
        "type": "boolean"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "hostname": {
        "required": true,
        "type": "string"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "nameserver": {
        "type": "string"
      },
      "queryopts": {
        "default": "short",
        "type": "string"
      }
    },
    "tags": [],
    "description": "Dig action",
    "enabled": true,
    "entry_point": "dig.py",
    "notify": {},
    "uid": "action:linux:dig",
    "pack": "linux",
    "ref": "linux.dig",
    "id": "5ae3adba09f69901cfc9549b",
    "runner_type": "python-script"
  },
  {
    "name": "file_touch",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "default": "echo $(date +%s) > {{file}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "file": {
        "required": true,
        "type": "string",
        "description": "Path of the file to be touched"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Touches a file",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:file_touch",
    "pack": "linux",
    "ref": "linux.file_touch",
    "id": "5ae3adba09f69901cfc9549c",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "lsof",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "lsof {{args}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "args": {
        "default": " ",
        "description": "Command line arguments"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Run lsof",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:lsof",
    "pack": "linux",
    "ref": "linux.lsof",
    "id": "5ae3adba09f69901cfc9549d",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "lsof_pids",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": true,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "default": "for pid in {{pids}}; do lsof -p $pid; done",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pids": {
        "required": true,
        "description": "List of pids"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Run lsof for a group of PIDs",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:lsof_pids",
    "pack": "linux",
    "ref": "linux.lsof_pids",
    "id": "5ae3adba09f69901cfc9549e",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "mv",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "mv {{args}} {{source}} {{destination}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "force": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for force"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "args": {
        "default": "-v{% if force == true %} -f{% endif %}",
        "description": "Command line arguments passed to mv"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "source": {
        "required": true,
        "type": "string",
        "description": "List of files/directories to to be moved"
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "destination": {
        "required": true,
        "type": "string",
        "description": "Destination of files/directories"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Move file(s)",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:mv",
    "pack": "linux",
    "ref": "linux.mv",
    "id": "5ae3adba09f69901cfc9549f",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "netstat",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "netstat {{args}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "args": {
        "default": " ",
        "description": "Command line arguments"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Run netstat",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:netstat",
    "pack": "linux",
    "ref": "linux.netstat",
    "id": "5ae3adba09f69901cfc954a0",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "netstat_grep",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "default": "for pid in {{pids}}; do netstat -pant | grep $pid; done; exit 0",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pids": {
        "required": true,
        "description": "List of pids"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Grep netstat results",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:netstat_grep",
    "pack": "linux",
    "ref": "linux.netstat_grep",
    "id": "5ae3adba09f69901cfc954a1",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "pkill",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "process": {
        "required": true,
        "type": "string",
        "description": "Process name to kill"
      },
      "cmd": {
        "default": "pkill -e {{process}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Kill processes using pkill",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:pkill",
    "pack": "linux",
    "ref": "linux.pkill",
    "id": "5ae3adba09f69901cfc954a2",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "rm",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "rm {{args}} {{target}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "force": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for force"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "recursive": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for recursive rm"
      },
      "args": {
        "default": "{% if verbose == true %}-v{% endif %}{% if recursive == true %} -r{% endif %}{% if force == true %} -f{% endif %}",
        "description": "Command line arguments passed to rm"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "verbose": {
        "default": true,
        "type": "boolean",
        "description": "True to explain what is being done"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      },
      "target": {
        "required": true,
        "type": "string",
        "description": "List of files/directories to to be removed"
      }
    },
    "tags": [],
    "description": "Remove file(s)",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:rm",
    "pack": "linux",
    "ref": "linux.rm",
    "id": "5ae3adba09f69901cfc954a3",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "rsync",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "rsync {{args}} {{source}} {{dest_server}}:{{destination}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "source": {
        "required": true,
        "type": "string",
        "description": "List of files/directories to to be copied"
      },
      "dest_server": {
        "required": true,
        "type": "string",
        "description": "Destination server for rsync'd files"
      },
      "args": {
        "default": "-avz -e \"ssh -o ConnectTimeout={{connect_timeout}}\"",
        "description": "Command line arguments passed to rysnc"
      },
      "connect_timeout": {
        "default": 30,
        "type": "integer",
        "description": "SSH connect timeout in seconds"
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "destination": {
        "required": true,
        "type": "string",
        "description": "Destination of files/directories on target server"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Copy file(s) from one place to another w/ rsync",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:rsync",
    "pack": "linux",
    "ref": "linux.rsync",
    "id": "5ae3adba09f69901cfc954a4",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "scp",
    "parameters": {
      "force": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for force"
      },
      "verbose": {
        "default": true,
        "type": "boolean"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "recursive": {
        "default": false,
        "type": "boolean",
        "description": "Boolean flag for recursive copy"
      },
      "destination": {
        "required": true,
        "type": "string",
        "description": "Destination of files/directories. This can be either a local path (example: \"/path/to/file\") or remote path (example: \"server.fqdn:/path/to/file\"). Paths can also be relative (examples: \"folder/a.txt\" or \"server.fqdn:folder/a.txt\") or absolute (Examples: \"/etc/hosts\" or \"server.fqdn:/etc/hosts\")."
      },
      "source": {
        "required": true,
        "type": "string",
        "description": "List of files/directories to be copied. This can be either a local path (example: \"/path/to/file\") or remote path (example: \"server.fqdn:/path/to/file\"). Paths can also be relative (examples: \"folder/a.txt\" or \"server.fqdn:folder/a.txt\") or absolute (Examples: \"/etc/hosts\" or \"server.fqdn:/etc/hosts\"). Lists of multiple files/directories should be separated by a spaces (example: \"file1.txt file2.txt otherserver.domain.com:file3.txt\")"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "username": {
        "default": "stanley",
        "required": false,
        "type": "string",
        "description": "User to scp as"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "dest_server": {
        "required": false,
        "type": "string",
        "description": "Destination of files/directories. Deprecated in favor of \"destination\" parameter. Only here for backward compatibility reasons."
      },
      "args": {
        "default": "-o stricthostkeychecking=no{% if verbose %} -v{% endif %}{% if recursive == true %} -r{% endif %}{% if force == true %} -f{% endif %}",
        "description": "Command line arguments passed to scp"
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "cmd": {
        "default": "scp {{args}} -i {{keyfile}} {{source}} {% if dest_server %}{{dest_server}}:{{destination}}{% else %}{{destination}}{% endif %}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "keyfile": {
        "default": "/home/stanley/.ssh/stanley_rsa",
        "type": "string",
        "description": "SSH key to connect with"
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Secure copy file(s)",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:scp",
    "pack": "linux",
    "ref": "linux.scp",
    "id": "5ae3adba09f69901cfc954a5",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "service",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "service": {
        "position": 1,
        "type": "string",
        "description": "Name of service"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "act": {
        "position": 0,
        "type": "string",
        "description": "Action to perform on service"
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Stops, Starts, or Restarts a service",
    "enabled": true,
    "entry_point": "service.py",
    "notify": {},
    "uid": "action:linux:service",
    "pack": "linux",
    "ref": "linux.service",
    "id": "5ae3adba09f69901cfc954a6",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "traceroute",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in."
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material to log in. Note: This needs to be actual private key data and NOT path."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "hops": {
        "default": 30,
        "position": 2,
        "type": "integer",
        "description": "Limit of maximum number of hops"
      },
      "queries_to_hop": {
        "default": 3,
        "position": 3,
        "type": "integer",
        "description": "No. of queries to each hop"
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "host": {
        "position": 1,
        "required": true,
        "type": "string",
        "description": "host name to traceroute"
      },
      "hosts": {
        "default": "localhost",
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host."
      }
    },
    "tags": [],
    "description": "Traceroute a Host",
    "enabled": true,
    "entry_point": "traceroute.sh",
    "notify": {},
    "uid": "action:linux:traceroute",
    "pack": "linux",
    "ref": "linux.traceroute",
    "id": "5ae3adba09f69901cfc954a7",
    "runner_type": "remote-shell-script"
  },
  {
    "name": "vmstat",
    "parameters": {
      "username": {
        "required": false,
        "type": "string",
        "description": "Username used to log-in. If not provided, default username from config is used."
      },
      "cwd": {
        "default": "/tmp",
        "type": "string",
        "description": "Working directory where the script will be executed in"
      },
      "private_key": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Private key material or path to the private key file on disk used to log in."
      },
      "cmd": {
        "default": "vmstat {{args}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the remote host(s).",
        "immutable": true
      },
      "passphrase": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Passphrase for the private key, if needed."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "args": {
        "default": " ",
        "description": "Command line arguments"
      },
      "bastion_host": {
        "required": false,
        "type": "string",
        "description": "The host SSH connections will be proxied through. Note: This connection is made using the same parameters as the final connection, and is only used in ParamikoSSHRunner."
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hosts": {
        "required": true,
        "type": "string",
        "description": "A comma delimited string of a list of hosts where the remote command will be executed."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parallel": {
        "default": false,
        "type": "boolean",
        "description": "Default to parallel execution.",
        "immutable": true
      },
      "password": {
        "secret": true,
        "required": false,
        "type": "string",
        "description": "Password used to log in. If not provided, private key from the config file is used."
      },
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The remote command will be executed with sudo."
      },
      "port": {
        "default": 22,
        "required": false,
        "type": "integer",
        "description": "SSH port. Note: This parameter is used only in ParamikoSSHRunner."
      },
      "dir": {
        "default": "/tmp",
        "type": "string",
        "description": "The working directory where the script will be copied to on the remote host.",
        "immutable": true
      }
    },
    "tags": [],
    "description": "Run vmstat",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:linux:vmstat",
    "pack": "linux",
    "ref": "linux.vmstat",
    "id": "5ae3adba09f69901cfc954a8",
    "runner_type": "remote-shell-cmd"
  },
  {
    "name": "wait_for_ssh",
    "parameters": {
      "username": {
        "default": "stanley",
        "required": true,
        "description": "Username used to authenticate."
      },
      "retries": {
        "default": 10,
        "type": "integer",
        "description": "Maximum number of retries."
      },
      "timeout": {
        "default": 400,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "sleep_delay": {
        "default": 20,
        "type": "integer",
        "description": "How long to sleep / wait (in seconds) after each failed connection attempt."
      },
      "hostname": {
        "required": true,
        "type": "string",
        "description": "Remote hostname."
      },
      "ssh_timeout": {
        "default": 5,
        "type": "integer",
        "description": "SSH connection connect timeout (in seconds)."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "password": {
        "required": false,
        "description": "Password used to authenticate."
      },
      "keyfile": {
        "required": false,
        "description": "SSH key file used to authenticate."
      },
      "port": {
        "default": 22,
        "required": true,
        "type": "integer",
        "description": "Remote SSH port."
      }
    },
    "tags": [],
    "description": "Action which waits for a SSH server to become accessible. By default, if no credentials are provided, this action will try to authenticate using the system user username and key file.",
    "enabled": true,
    "entry_point": "wait_for_ssh.py",
    "notify": {},
    "uid": "action:linux:wait_for_ssh",
    "pack": "linux",
    "ref": "linux.wait_for_ssh",
    "id": "5ae3adba09f69901cfc954a9",
    "runner_type": "python-script"
  },
  {
    "name": "decode_payload",
    "parameters": {
      "token": {
        "required": true,
        "type": "string",
        "description": "JWT token from a request"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Decodes the payload (JWT)",
    "enabled": true,
    "entry_point": "decode_payload.py",
    "notify": {},
    "uid": "action:medic_auth:decode_payload",
    "pack": "medic_auth",
    "ref": "medic_auth.decode_payload",
    "id": "5aed21a82e5ce900d76109f2",
    "runner_type": "python-script"
  },
  {
    "name": "receive_approval",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "approval_type": {
        "type": "string",
        "description": "approve|cancel"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "st2_api_key": {
        "default": "{{ config_context.st2_api_key }}",
        "type": "string",
        "description": "The api key for the http request to StackStorm API"
      },
      "jwt_token": {
        "type": "string",
        "description": "The jwt_token"
      },
      "execution_id": {
        "type": "string",
        "description": "The id of the request execution"
      }
    },
    "tags": [],
    "description": "Receives an approval request",
    "enabled": true,
    "entry_point": "workflows/receive_approval.yaml",
    "notify": {},
    "uid": "action:medic_auth:receive_approval",
    "pack": "medic_auth",
    "ref": "medic_auth.receive_approval",
    "id": "5aed21a82e5ce900d76109f3",
    "runner_type": "mistral-v2"
  },
  {
    "name": "request_approval",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "ds_group_ids": {
        "type": "array",
        "description": "The ids of the DS Groups that are able to approve the action. Any user from these groups can approve this action."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "approval_action_input": {
        "type": "object",
        "description": "The inputs for the action"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "approval_action": {
        "type": "string",
        "description": "The action to be executed upon approval. This should be the full ref of an action (packname.action_name)"
      },
      "approval_description": {
        "required": true,
        "type": "string",
        "description": "A friendly description about the approval action"
      },
      "hipchat_room": {
        "type": "string",
        "description": "The room in hipchat to notify"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "medic_host": {
        "default": "{{ config_context.medic_host }}",
        "type": "string",
        "description": "The host for the Medic UI (must include protocol)"
      },
      "user_email": {
        "type": "string",
        "description": "The email address of an individual user who can approve the action"
      }
    },
    "tags": [],
    "description": "Creates an approval request in Medic",
    "enabled": true,
    "entry_point": "workflows/request_approval.yaml",
    "notify": {},
    "uid": "action:medic_auth:request_approval",
    "pack": "medic_auth",
    "ref": "medic_auth.request_approval",
    "id": "5aed21a82e5ce900d76109f4",
    "runner_type": "mistral-v2"
  },
  {
    "name": "sign_payload",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Signs the payload (JWT)",
    "enabled": true,
    "entry_point": "sign_payload.py",
    "notify": {},
    "uid": "action:medic_auth:sign_payload",
    "pack": "medic_auth",
    "ref": "medic_auth.sign_payload",
    "id": "5aed21a82e5ce900d76109f5",
    "runner_type": "python-script"
  },
  {
    "name": "clear_room_context",
    "parameters": {
      "skip_notify": {
        "default": [
          "extract_room_details",
          "delete",
          "notify"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "clear the context for a hipchat room",
    "enabled": true,
    "entry_point": "workflows/clear_room_context.yaml",
    "notify": {},
    "uid": "action:medic_chatops:clear_room_context",
    "pack": "medic_chatops",
    "ref": "medic_chatops.clear_room_context",
    "id": "5aed21b52e5ce900d76109fa",
    "runner_type": "mistral-v2"
  },
  {
    "name": "extract-root-execution-id",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Extract the root execution id of the workflow chain",
    "enabled": true,
    "entry_point": "workflows/extract-root-execution-id.yaml",
    "notify": {},
    "uid": "action:medic_chatops:extract-root-execution-id",
    "pack": "medic_chatops",
    "ref": "medic_chatops.extract-root-execution-id",
    "id": "5aed21b52e5ce900d76109fb",
    "runner_type": "mistral-v2"
  },
  {
    "name": "extract_parent_props",
    "parameters": {
      "skip_notify": {
        "default": [
          "get_parent",
          "extract_parent_props"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Extracts `api_user`, `source_channel`, and `user` from the parent context provided they exist",
    "enabled": true,
    "entry_point": "workflows/extract_parent_props.yaml",
    "notify": {},
    "uid": "action:medic_chatops:extract_parent_props",
    "pack": "medic_chatops",
    "ref": "medic_chatops.extract_parent_props",
    "id": "5aed21b52e5ce900d76109fc",
    "runner_type": "mistral-v2"
  },
  {
    "name": "format_execution_result",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "execution_id": {
        "required": true,
        "type": "string",
        "description": "Id of execution to format"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Format an execution result for medic_chatops",
    "enabled": true,
    "entry_point": "format_execution_result.py",
    "notify": {},
    "uid": "action:medic_chatops:format_execution_result",
    "pack": "medic_chatops",
    "ref": "medic_chatops.format_execution_result",
    "id": "5aed21b52e5ce900d76109fd",
    "runner_type": "run-python"
  },
  {
    "name": "get_room_context",
    "parameters": {
      "skip_notify": {
        "default": [
          "extract_room_details",
          "get",
          "start"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "gets the context for a hipchat room",
    "enabled": true,
    "entry_point": "workflows/get_room_context.yaml",
    "notify": {},
    "uid": "action:medic_chatops:get_room_context",
    "pack": "medic_chatops",
    "ref": "medic_chatops.get_room_context",
    "id": "5aed21b52e5ce900d76109fe",
    "runner_type": "mistral-v2"
  },
  {
    "name": "hipchat_post_html",
    "parameters": {
      "skip_notify": {
        "default": [
          "run"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "display_root_execution_id": {
        "default": true,
        "type": "boolean"
      },
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
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "hipchat_room": {
        "type": "string",
        "description": "Room ID or Mention Name for private messages\nIf mention name, please include the \"@\""
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "message": {
        "required": true,
        "type": "string",
        "description": "The message that you are sending\nIMPORTANT: Single quotes must be escaped"
      }
    },
    "tags": [],
    "description": "Post an html message to hip chat",
    "enabled": true,
    "entry_point": "workflows/hipchat_post_html.yaml",
    "notify": {},
    "uid": "action:medic_chatops:hipchat_post_html",
    "pack": "medic_chatops",
    "ref": "medic_chatops.hipchat_post_html",
    "id": "5aed21b52e5ce900d76109ff",
    "runner_type": "mistral-v2"
  },
  {
    "name": "post_hipchat_message",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
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
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "hipchat_room": {
        "type": "string",
        "description": "Room ID or Mention Name for private messages If mention name, please include the '@'"
      },
      "env": {
        "default": {
          "DOTENV_CONFIG_PATH": "/opt/stackstorm/env/.env-hipchat-message"
        },
        "type": "object",
        "description": "Environment variables which will be available to the script(e.g. key1=val1,key2=val2)"
      },
      "message": {
        "required": true,
        "type": "string",
        "description": "Message to send."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the script will be executed in"
      }
    },
    "tags": [],
    "description": "Post a message to hipchat",
    "enabled": true,
    "entry_point": "post_hipchat_message",
    "notify": {},
    "uid": "action:medic_chatops:post_hipchat_message",
    "pack": "medic_chatops",
    "ref": "medic_chatops.post_hipchat_message",
    "id": "5aed21b52e5ce900d7610a00",
    "runner_type": "local-shell-script"
  },
  {
    "name": "question_answer",
    "parameters": {
      "skip_notify": {
        "default": [
          "delegate",
          "retrieve",
          "resume",
          "remove"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "question_key": {
        "default": "0",
        "type": "string",
        "description": "Used to store an answer to a question\n(the execution id of the workflow that asked a question) + \"_\" +  (a unique question identifier)"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "answer": {
        "type": "string",
        "description": "the given answer"
      }
    },
    "tags": [],
    "description": "Provide an answer to a given question",
    "enabled": true,
    "entry_point": "workflows/question_answer.yaml",
    "notify": {},
    "uid": "action:medic_chatops:question_answer",
    "pack": "medic_chatops",
    "ref": "medic_chatops.question_answer",
    "id": "5aed21b52e5ce900d7610a01",
    "runner_type": "mistral-v2"
  },
  {
    "name": "question_ask",
    "parameters": {
      "skip_notify": {
        "default": [
          "delegate",
          "question",
          "store"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "action_inputs": {
        "type": "object",
        "description": "the inputs for the action"
      },
      "question_identifier": {
        "default": "0",
        "type": "string",
        "description": "A simple string to identify this question out of a multi-question workflow"
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      },
      "color": {
        "type": "string",
        "description": "the color to make the hipchat message"
      },
      "possible_answers": {
        "default": [
          "yes",
          "no"
        ],
        "type": "array"
      },
      "question": {
        "type": "string",
        "description": "the question to ask"
      },
      "answer_input_key": {
        "type": "string",
        "description": "the input parameter to map the answer to for the action to be executed"
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "hipchat_room": {
        "type": "string",
        "description": "the hipchat room in which to ask the question"
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "action": {
        "type": "string",
        "description": "that action to execute when the answer is given (pack.action_name)"
      }
    },
    "tags": [],
    "description": "Ask a question to chatops",
    "enabled": true,
    "entry_point": "workflows/question_ask.yaml",
    "notify": {},
    "uid": "action:medic_chatops:question_ask",
    "pack": "medic_chatops",
    "ref": "medic_chatops.question_ask",
    "id": "5aed21b52e5ce900d7610a02",
    "runner_type": "mistral-v2"
  },
  {
    "name": "show_room_context",
    "parameters": {
      "skip_notify": {
        "default": [
          "get",
          "notify",
          "display_context"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Display the context for the room",
    "enabled": true,
    "entry_point": "workflows/show_room_context.yaml",
    "notify": {},
    "uid": "action:medic_chatops:show_room_context",
    "pack": "medic_chatops",
    "ref": "medic_chatops.show_room_context",
    "id": "5aed21b52e5ce900d7610a03",
    "runner_type": "mistral-v2"
  },
  {
    "name": "start_room_context",
    "parameters": {
      "skip_notify": {
        "default": [
          "extract_room_details",
          "set",
          "notify"
        ],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "task": {
        "type": "string",
        "description": "The name of the task to run for reverse workflow."
      },
      "context": {
        "default": {},
        "type": "object",
        "description": "Additional workflow inputs."
      },
      "workflow": {
        "type": "string",
        "description": "The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \"<pack_name>.<action_name>.<workflow_name>\". If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically."
      }
    },
    "tags": [],
    "description": "Starts a room context for a chatops room",
    "enabled": true,
    "entry_point": "workflows/start_room_context.yaml",
    "notify": {},
    "uid": "action:medic_chatops:start_room_context",
    "pack": "medic_chatops",
    "ref": "medic_chatops.start_room_context",
    "id": "5aed21b52e5ce900d7610a04",
    "runner_type": "mistral-v2"
  },
  {
    "name": "delete",
    "parameters": {
      "abs_repo_base": {
        "default": "/opt/stackstorm/packs/",
        "type": "string",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "required": true,
        "type": "array"
      }
    },
    "tags": [],
    "description": "Deletes the pack from local content repository.",
    "enabled": true,
    "entry_point": "pack_mgmt/delete.py",
    "notify": {},
    "uid": "action:packs:delete",
    "pack": "packs",
    "ref": "packs.delete",
    "id": "5ae3adba09f69901cfc95488",
    "runner_type": "python-script"
  },
  {
    "name": "download",
    "parameters": {
      "force": {
        "default": false,
        "required": false,
        "type": "boolean",
        "description": "Set to True to force install the pack and skip StackStorm version compatibility check"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "required": true,
        "type": "array"
      },
      "abs_repo_base": {
        "default": "/opt/stackstorm/packs/",
        "type": "string",
        "immutable": true
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "verifyssl": {
        "default": true,
        "type": "boolean"
      }
    },
    "tags": [],
    "description": "Downloads packs and places it in the local content repository.",
    "enabled": true,
    "entry_point": "pack_mgmt/download.py",
    "notify": {},
    "uid": "action:packs:download",
    "pack": "packs",
    "ref": "packs.download",
    "id": "5ae3adba09f69901cfc95489",
    "runner_type": "python-script"
  },
  {
    "name": "get",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pack": {
        "required": true,
        "type": "string",
        "description": "Name of pack to lookup"
      }
    },
    "tags": [],
    "description": "Get information about installed pack.",
    "enabled": true,
    "entry_point": "pack_mgmt/get_installed.py",
    "notify": {},
    "uid": "action:packs:get",
    "pack": "packs",
    "ref": "packs.get",
    "id": "5ae3adba09f69901cfc9548a",
    "runner_type": "python-script"
  },
  {
    "name": "get_config",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Returns config variables",
    "enabled": true,
    "entry_point": "get_config.py",
    "notify": {},
    "uid": "action:packs:get_config",
    "pack": "packs",
    "ref": "packs.get_config",
    "id": "5ae3adba09f69901cfc9548b",
    "runner_type": "python-script"
  },
  {
    "name": "install",
    "parameters": {
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "force": {
        "default": false,
        "required": false,
        "type": "boolean",
        "description": "Set to True to force install the pack and skip StackStorm version compatibility check and also delete and ignore lock file if one exists."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "required": true,
        "type": "array",
        "description": "Name of the pack in Exchange or a git repo URL."
      },
      "register": {
        "default": "all",
        "type": "string",
        "description": "Possible options are all, sensors, actions, rules, aliases, runners, triggers, rule_types, policiy_types, policies, configs."
      },
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "env": {
        "required": false,
        "type": "object",
        "description": "Optional environment variables."
      }
    },
    "tags": [],
    "description": "Installs or upgrades a pack into local content repository, either by git URL or a short name matching an index entry. Will download pack, load the actions, sensors and rules from the pack. Note that install requires reboot of some st2 services.",
    "enabled": true,
    "entry_point": "workflows/install.yaml",
    "notify": {},
    "uid": "action:packs:install",
    "pack": "packs",
    "ref": "packs.install",
    "id": "5ae3adba09f69901cfc9548c",
    "runner_type": "action-chain"
  },
  {
    "name": "load",
    "parameters": {
      "register": {
        "default": "all",
        "type": "string",
        "description": "Possible options are all, sensors, actions, rules, aliases, runners, triggers, rule_types, policiy_types, policies, configs."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 300,
        "type": "integer",
        "description": "Make sure that all pack content is loaded within specified timeout"
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "type": "array",
        "description": "A list of packs to register / load resources from."
      }
    },
    "tags": [],
    "description": "Action that reloads all st2 content.",
    "enabled": true,
    "entry_point": "pack_mgmt/register.py",
    "notify": {},
    "uid": "action:packs:load",
    "pack": "packs",
    "ref": "packs.load",
    "id": "5ae3adba09f69901cfc9548d",
    "runner_type": "python-script"
  },
  {
    "name": "restart_component",
    "parameters": {
      "cmd": {
        "default": "st2ctl restart-component {{servicename}}",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host.",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "sudo": {
        "default": true,
        "type": "boolean",
        "description": "The command will be executed with sudo.",
        "immutable": true
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\".",
        "immutable": true
      },
      "servicename": {
        "required": true,
        "type": "string"
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      }
    },
    "tags": [],
    "description": "Action that restarts st2 service.",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:packs:restart_component",
    "pack": "packs",
    "ref": "packs.restart_component",
    "id": "5ae3adba09f69901cfc9548e",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "search",
    "parameters": {
      "query": {
        "required": true,
        "type": "string",
        "description": "A word or a phrase to search for."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Search the index for a pack with any attribute matching the query.",
    "enabled": true,
    "entry_point": "pack_mgmt/search.py",
    "notify": {},
    "uid": "action:packs:search",
    "pack": "packs",
    "ref": "packs.search",
    "id": "5ae3adba09f69901cfc9548f",
    "runner_type": "python-script"
  },
  {
    "name": "setup_virtualenv",
    "parameters": {
      "update": {
        "default": false,
        "type": "boolean",
        "description": "Check this option if the virtual environment already exists and if you only want to perform an update and installation of new dependencies. If you don't check this option, the virtual environment will be destroyed then re-created. If you check this and the virtual environment doesn't exist, it will create it."
      },
      "env": {
        "default": null,
        "required": false,
        "type": "object",
        "description": "Optional environment variables"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "tags": [],
    "description": "Set up virtual environment for the provided packs",
    "enabled": true,
    "entry_point": "pack_mgmt/setup_virtualenv.py",
    "notify": {},
    "uid": "action:packs:setup_virtualenv",
    "pack": "packs",
    "ref": "packs.setup_virtualenv",
    "id": "5ae3adba09f69901cfc95490",
    "runner_type": "python-script"
  },
  {
    "name": "show",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pack": {
        "required": true,
        "type": "string",
        "description": "Name of pack to lookup"
      }
    },
    "tags": [],
    "description": "Get detailed information about pack from the remote StackStorm exchange index.",
    "enabled": true,
    "entry_point": "pack_mgmt/show_remote.py",
    "notify": {},
    "uid": "action:packs:show",
    "pack": "packs",
    "ref": "packs.show",
    "id": "5ae3adba09f69901cfc95491",
    "runner_type": "python-script"
  },
  {
    "name": "uninstall",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "required": true,
        "type": "array"
      }
    },
    "tags": [],
    "description": "Uninstalls packs from local content repository. Removes pack and content from st2. Note that uninstall require reboot of some st2 services.",
    "enabled": true,
    "entry_point": "workflows/uninstall.yaml",
    "notify": {},
    "uid": "action:packs:uninstall",
    "pack": "packs",
    "ref": "packs.uninstall",
    "id": "5ae3adba09f69901cfc95492",
    "runner_type": "action-chain"
  },
  {
    "name": "unload",
    "parameters": {
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "required": true,
        "type": "array"
      }
    },
    "tags": [],
    "description": "Unregisters all content from a pack.",
    "enabled": true,
    "entry_point": "pack_mgmt/unload.py",
    "notify": {},
    "uid": "action:packs:unload",
    "pack": "packs",
    "ref": "packs.unload",
    "id": "5ae3adba09f69901cfc95493",
    "runner_type": "python-script"
  },
  {
    "name": "update_virtualenv",
    "parameters": {
      "update": {
        "default": true,
        "type": "boolean",
        "immutable": true
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "packs": {
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "tags": [],
    "description": "Update / reinstall Python dependencies listed in requirements.txt inside the pack virtual environment",
    "enabled": true,
    "entry_point": "pack_mgmt/setup_virtualenv.py",
    "notify": {},
    "uid": "action:packs:update_virtualenv",
    "pack": "packs",
    "ref": "packs.update_virtualenv",
    "id": "5ae3adba09f69901cfc95494",
    "runner_type": "python-script"
  },
  {
    "name": "virtualenv_prerun",
    "parameters": {
      "packs_status": {
        "type": "object"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Transformation step to conver packs_status to list of packs.",
    "enabled": true,
    "entry_point": "pack_mgmt/virtualenv_setup_prerun.py",
    "notify": {},
    "uid": "action:packs:virtualenv_prerun",
    "pack": "packs",
    "ref": "packs.virtualenv_prerun",
    "id": "5ae3adba09f69901cfc95495",
    "runner_type": "python-script"
  },
  {
    "name": "actions.list",
    "parameters": {
      "exclude": {
        "default": [
          "parameters",
          "notify"
        ],
        "type": "array",
        "description": "List of attributes to exclude"
      },
      "limit": {
        "default": 10,
        "required": false,
        "type": "integer",
        "description": "Maximum number of actions to return"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pack": {
        "required": false,
        "type": "string",
        "description": "Optional pack to filter on"
      }
    },
    "tags": [],
    "description": "Retrieve a list of available StackStorm actions.",
    "enabled": true,
    "entry_point": "actions_list.py",
    "notify": {},
    "uid": "action:st2:actions.list",
    "pack": "st2",
    "ref": "st2.actions.list",
    "id": "5aed218c2e5ce900d76109cc",
    "runner_type": "python-script"
  },
  {
    "name": "call_home",
    "parameters": {
      "display_published": {
        "default": true,
        "type": "boolean",
        "description": "Intermediate published variables will be stored and displayed."
      },
      "skip_notify": {
        "default": [],
        "type": "array",
        "description": "List of tasks to skip notifications for."
      }
    },
    "tags": [],
    "description": "Sends anonymous data install data to a StackStorm write-only S3 dropbox",
    "enabled": true,
    "entry_point": "workflows/call_home.yaml",
    "notify": {},
    "uid": "action:st2:call_home",
    "pack": "st2",
    "ref": "st2.call_home",
    "id": "5aed218c2e5ce900d76109cd",
    "runner_type": "action-chain"
  },
  {
    "name": "check_permissions_anon_data",
    "parameters": {
      "collect_anonymous_data": {
        "default": "false",
        "required": false,
        "type": "string",
        "description": "Whether to call_home or not. All forms of true are acceptable."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Check if sending anonymous data is allowed.",
    "enabled": true,
    "entry_point": "check_permissions_anon_data.py",
    "notify": {},
    "uid": "action:st2:check_permissions_anon_data",
    "pack": "st2",
    "ref": "st2.check_permissions_anon_data",
    "id": "5aed218c2e5ce900d76109ce",
    "runner_type": "python-script"
  },
  {
    "name": "executions.get",
    "parameters": {
      "exclude": {
        "default": [
          "trigger",
          "trigger_type",
          "trigger_instance",
          "liveaction",
          "context"
        ],
        "type": "array",
        "description": "List of attributes to exclude"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "id": {
        "required": true,
        "type": "string",
        "description": "ID of execution to retrieve the details for"
      }
    },
    "tags": [],
    "description": "Retrieve details of a single execution.",
    "enabled": true,
    "entry_point": "executions_get.py",
    "notify": {},
    "uid": "action:st2:executions.get",
    "pack": "st2",
    "ref": "st2.executions.get",
    "id": "5aed218c2e5ce900d76109cf",
    "runner_type": "python-script"
  },
  {
    "name": "executions.list",
    "parameters": {
      "action": {
        "required": false,
        "type": "string",
        "description": "Optional action to filter the executions on"
      },
      "status": {
        "required": false,
        "type": "string",
        "description": "Optional status to filter the executions on"
      },
      "limit": {
        "default": 10,
        "required": false,
        "type": "integer",
        "description": "Maximum number of executions to return"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Retrieve a list of executions.",
    "enabled": true,
    "entry_point": "executions_list.py",
    "notify": {},
    "uid": "action:st2:executions.list",
    "pack": "st2",
    "ref": "st2.executions.list",
    "id": "5aed218c2e5ce900d76109d0",
    "runner_type": "python-script"
  },
  {
    "name": "executions.re_run",
    "parameters": {
      "id": {
        "required": true,
        "type": "string",
        "description": "ID of execution to re-run"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "parameters": {
        "required": false,
        "type": "object",
        "description": "Parameter overrides"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Re-run an action execution.",
    "enabled": true,
    "entry_point": "executions_re_run.py",
    "notify": {},
    "uid": "action:st2:executions.re_run",
    "pack": "st2",
    "ref": "st2.executions.re_run",
    "id": "5aed218c2e5ce900d76109d1",
    "runner_type": "python-script"
  },
  {
    "name": "inquiry.respond",
    "parameters": {
      "id": {
        "required": true,
        "type": "string",
        "description": "ID of inquiry to which to respond"
      },
      "response": {
        "required": false,
        "type": "object",
        "description": "Response payload"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Respond to an inquiry",
    "enabled": true,
    "entry_point": "inquiry_respond.py",
    "notify": {},
    "uid": "action:st2:inquiry.respond",
    "pack": "st2",
    "ref": "st2.inquiry.respond",
    "id": "5aed218c2e5ce900d76109d2",
    "runner_type": "python-script"
  },
  {
    "name": "kv.delete",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "key": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Delete value from datastore",
    "enabled": true,
    "entry_point": "kv_delete.py",
    "notify": {},
    "uid": "action:st2:kv.delete",
    "pack": "st2",
    "ref": "st2.kv.delete",
    "id": "5aed218c2e5ce900d76109d3",
    "runner_type": "python-script"
  },
  {
    "name": "kv.get",
    "parameters": {
      "decompress": {
        "required": false,
        "type": "boolean",
        "description": "True if the value is compressed using bzip2 and should be decompressed before returning it"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "key": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Get value from datastore",
    "enabled": true,
    "entry_point": "kv_get.py",
    "notify": {},
    "uid": "action:st2:kv.get",
    "pack": "st2",
    "ref": "st2.kv.get",
    "id": "5aed218c2e5ce900d76109d4",
    "runner_type": "python-script"
  },
  {
    "name": "kv.get_object",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "key": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Deserialize and retrieve JSON serialized object from a datastore",
    "enabled": true,
    "entry_point": "kv_get_object.py",
    "notify": {},
    "uid": "action:st2:kv.get_object",
    "pack": "st2",
    "ref": "st2.kv.get_object",
    "id": "5aed218d2e5ce900d76109d5",
    "runner_type": "python-script"
  },
  {
    "name": "kv.grep",
    "parameters": {
      "query": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Grep for keys in datastore",
    "enabled": true,
    "entry_point": "kv_grep.py",
    "notify": {},
    "uid": "action:st2:kv.grep",
    "pack": "st2",
    "ref": "st2.kv.grep",
    "id": "5aed218d2e5ce900d76109d6",
    "runner_type": "python-script"
  },
  {
    "name": "kv.set",
    "parameters": {
      "key": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "compress": {
        "required": false,
        "type": "boolean",
        "description": "True to compress the value before storing it in a datastore"
      },
      "value": {
        "required": true,
        "type": "string"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "ttl": {
        "required": false,
        "type": "integer",
        "description": "Optional TTL for the provided value"
      }
    },
    "tags": [],
    "description": "Set value in datastore",
    "enabled": true,
    "entry_point": "kv_set.py",
    "notify": {},
    "uid": "action:st2:kv.set",
    "pack": "st2",
    "ref": "st2.kv.set",
    "id": "5aed218d2e5ce900d76109d7",
    "runner_type": "python-script"
  },
  {
    "name": "kv.set_object",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "ttl": {
        "required": false,
        "type": "integer",
        "description": "Optional TTL for the provided value"
      },
      "value": {
        "required": true,
        "type": "object"
      },
      "key": {
        "required": true,
        "type": "string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Serialize and store object in a datastore",
    "enabled": true,
    "entry_point": "kv_set_object.py",
    "notify": {},
    "uid": "action:st2:kv.set_object",
    "pack": "st2",
    "ref": "st2.kv.set_object",
    "id": "5aed218d2e5ce900d76109d8",
    "runner_type": "python-script"
  },
  {
    "name": "rules.list",
    "parameters": {
      "exclude": {
        "default": [],
        "type": "array",
        "description": "List of attributes to exclude"
      },
      "limit": {
        "default": 10,
        "required": false,
        "type": "integer",
        "description": "Maximum number of rules to return"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pack": {
        "required": false,
        "type": "string",
        "description": "Optional pack to filter on"
      }
    },
    "tags": [],
    "description": "Retrieve a list of available StackStorm rules",
    "enabled": true,
    "entry_point": "rules_list.py",
    "notify": {},
    "uid": "action:st2:rules.list",
    "pack": "st2",
    "ref": "st2.rules.list",
    "id": "5aed218d2e5ce900d76109d9",
    "runner_type": "python-script"
  },
  {
    "name": "sensors.list",
    "parameters": {
      "exclude": {
        "default": [],
        "type": "array",
        "description": "List of attributes to exclude"
      },
      "limit": {
        "default": 10,
        "required": false,
        "type": "integer",
        "description": "Maximum number of rules to return"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "pack": {
        "required": false,
        "type": "string",
        "description": "Optional pack to filter on"
      }
    },
    "tags": [],
    "description": "Retrieve a list of available StackStorm sensors.",
    "enabled": true,
    "entry_point": "sensors_list.py",
    "notify": {},
    "uid": "action:st2:sensors.list",
    "pack": "st2",
    "ref": "st2.sensors.list",
    "id": "5aed218d2e5ce900d76109da",
    "runner_type": "python-script"
  },
  {
    "name": "upload_to_s3",
    "parameters": {
      "file_name": {
        "required": true,
        "type": "string",
        "description": "Full pathname of file to upload on filesystem"
      },
      "bucket": {
        "default": "st2express-install",
        "type": "string",
        "description": "S3 bucket to upload file"
      },
      "remote_file": {
        "required": false,
        "type": "string",
        "description": "Name of file on remote end. If not provided it defaults to the local file name"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Sends collected data to write-only StackStorm S3 bucket",
    "enabled": true,
    "entry_point": "upload_to_s3.py",
    "notify": {},
    "uid": "action:st2:upload_to_s3",
    "pack": "st2",
    "ref": "st2.upload_to_s3",
    "id": "5aed218d2e5ce900d76109db",
    "runner_type": "python-script"
  },
  {
    "name": "hello",
    "parameters": {
      "sudo": {
        "default": false,
        "type": "boolean",
        "description": "The command will be executed with sudo."
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the command(e.g. key1=val1,key2=val2)"
      },
      "cmd": {
        "default": "echo Hello {{name}}!",
        "type": "string",
        "description": "Arbitrary Linux command to be executed on the host.",
        "immutable": true
      },
      "kwarg_op": {
        "default": "--",
        "type": "string",
        "description": "Operator to use in front of keyword args i.e. \"--\" or \"-\"."
      },
      "timeout": {
        "default": 60,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "cwd": {
        "type": "string",
        "description": "Working directory where the command will be executed in"
      },
      "name": {
        "default": "human",
        "type": "string",
        "description": "A human name"
      }
    },
    "tags": [],
    "description": "Says hello with a shell command",
    "enabled": true,
    "entry_point": "",
    "notify": {},
    "uid": "action:tutorial:hello",
    "pack": "tutorial",
    "ref": "tutorial.hello",
    "id": "5ae7310a09f699030501bcef",
    "runner_type": "local-shell-cmd"
  },
  {
    "name": "json_to_string",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "value": {
        "position": 0,
        "required": true,
        "type": "object",
        "description": "The json object to convert to a string"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Converts a json object to a string",
    "enabled": true,
    "entry_point": "json_to_string.py",
    "notify": {},
    "uid": "action:util:json_to_string",
    "pack": "util",
    "ref": "util.json_to_string",
    "id": "5aed21c62e5ce900d7610a0f",
    "runner_type": "python-script"
  },
  {
    "name": "match_in_mapping",
    "parameters": {
      "default": {
        "position": 2,
        "required": true,
        "type": "string",
        "description": "Returned if no match is found"
      },
      "mapping": {
        "position": 1,
        "required": true,
        "type": "array",
        "description": "List of objects with type,key,value properties. 'type' can be either 'match' or 'equals'. 'key' is what is matched against. 'value' is what is returned if there is a match"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "value": {
        "position": 0,
        "required": true,
        "type": "string",
        "description": "The value to match"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Return a value based on a list of mapping types",
    "enabled": true,
    "entry_point": "match_in_mapping.py",
    "notify": {},
    "uid": "action:util:match_in_mapping",
    "pack": "util",
    "ref": "util.match_in_mapping",
    "id": "5aed21c62e5ce900d7610a10",
    "runner_type": "run-python"
  },
  {
    "name": "parent_context_search",
    "parameters": {
      "prop": {
        "position": 1,
        "required": true,
        "type": "string",
        "description": "The property key to search for"
      },
      "ctx": {
        "position": 0,
        "required": true,
        "type": "object",
        "description": "The starting context"
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "condition": {
        "default": "in",
        "position": 2,
        "required": true,
        "type": "string",
        "description": "The condition to check if the prop is either in or not in the context.  in|anything else (not in)"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Recursively crawls up a context via 'parent' until a key is either found or not found in the scope, then returns the scope",
    "enabled": true,
    "entry_point": "parent_context_search.py",
    "notify": {},
    "uid": "action:util:parent_context_search",
    "pack": "util",
    "ref": "util.parent_context_search",
    "id": "5aed21c62e5ce900d7610a11",
    "runner_type": "python-script"
  },
  {
    "name": "python_string_replace",
    "parameters": {
      "new": {
        "position": 2,
        "required": true,
        "type": "string",
        "description": "The new substring"
      },
      "old": {
        "position": 1,
        "required": true,
        "type": "string",
        "description": "The old substring"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "string": {
        "position": 0,
        "required": true,
        "type": "string",
        "description": "The source string"
      }
    },
    "tags": [],
    "description": "Converts replaces an old substring for a new substring in a given string",
    "enabled": true,
    "entry_point": "python_string_replace.py",
    "notify": {},
    "uid": "action:util:python_string_replace",
    "pack": "util",
    "ref": "util.python_string_replace",
    "id": "5aed21c62e5ce900d7610a12",
    "runner_type": "python-script"
  },
  {
    "name": "regex_search_with_lookback",
    "parameters": {
      "source_string": {
        "position": 1,
        "required": true,
        "type": "string",
        "description": "The source string in which to look for things"
      },
      "regex_list": {
        "position": 0,
        "required": true,
        "type": "array",
        "description": "List of objects with 'key' and 'regex' properties. 'key' is the key that will be used in the return dict. 'regex' is the regular expression to use for matching"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      },
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      }
    },
    "tags": [],
    "description": "Return a dict whose values are extracted from a source string \nwith a list of regular expression descriptor objects.\nThe keys in the return object will be the keys defined in the descriptor objects,\nand their values will be a dict with the following:\n- 'group' - string - the regex match group()\n- 'groups' - list - the regex match groups() list\n",
    "enabled": true,
    "entry_point": "regex_search_with_lookback.py",
    "notify": {},
    "uid": "action:util:regex_search_with_lookback",
    "pack": "util",
    "ref": "util.regex_search_with_lookback",
    "id": "5aed21c62e5ce900d7610a13",
    "runner_type": "run-python"
  },
  {
    "name": "string_to_json",
    "parameters": {
      "timeout": {
        "default": 600,
        "type": "integer",
        "description": "Action timeout in seconds. Action will get killed if it doesn't finish in timeout seconds."
      },
      "value": {
        "position": 0,
        "required": true,
        "type": "string",
        "description": "The string to convert to JSON"
      },
      "env": {
        "type": "object",
        "description": "Environment variables which will be available to the script."
      }
    },
    "tags": [],
    "description": "Converts a string to a json object",
    "enabled": true,
    "entry_point": "string_to_json.py",
    "notify": {},
    "uid": "action:util:string_to_json",
    "pack": "util",
    "ref": "util.string_to_json",
    "id": "5aed21c62e5ce900d7610a14",
    "runner_type": "python-script"
  }
];
