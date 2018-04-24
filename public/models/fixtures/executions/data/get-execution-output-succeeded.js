export default {
  status: 'succeeded',
  start_timestamp: '2018-04-02T13:41:44.682925Z',
  log: [
    {
      status: 'requested',
      timestamp: '2018-04-02T13:41:44.709000Z'
    },
    {
      status: 'scheduled',
      timestamp: '2018-04-02T13:41:44.822000Z'
    },
    {
      status: 'running',
      timestamp: '2018-04-02T13:41:44.917000Z'
    },
    {
      status: 'succeeded',
      timestamp: '2018-04-02T13:41:45.799000Z'
    }
  ],
  parameters: {
    default: 'testbot',
    mapping: [
      {
        type: 'match',
        key: 'trouper',
        value: 'trouper'
      },
      {
        type: 'match',
        key: 'glinda',
        value: 'glinda'
      },
      {
        type: 'match',
        key: 'dashboard',
        value: 'icloud-dashboard'
      },
      {
        type: 'match',
        key: 'argonath',
        value: 'MapsMedic'
      }
    ],
    value: 'argonath'
  },
  runner: {
    runner_module: 'python_runner',
    uid: 'runner_type:run-python',
    enabled: true,
    name: 'run-python',
    runner_parameters: {
      timeout: {
        default: 600,
        type: 'integer',
        description:
          'Action timeout in seconds. Action will get killed if it doesn\'t finish in timeout seconds.'
      },
      env: {
        type: 'object',
        description:
          'Environment variables which will be available to the script.'
      }
    },
    id: '591537d2271fb21ce5f37fd6',
    description: 'A runner for launching python actions.'
  },
  elapsed_seconds: 1.096085,
  web_url:
    'https://st11p00me-sre002.me.com/#/history/5ac23318271fb270c7e879a1/general',
  parent: '5ac23317271fb270c7e8799f',
  result: {
    result: 'MapsMedic',
    exit_code: 0,
    stderr: '',
    stdout: ''
  },
  context: {
    user: 'stanley',
    parent: {
      parent: {
        rule: {
          id: '597145f3271fb2155dc81fc2',
          name: 'orchard-webhook'
        },
        trigger_instance: {
          id: '5ac23316271fb243d93e90e2',
          name: null
        },
        trace_context: {
          id_: '5ac23316271fb243d93e90e3',
          trace_tag: 'webhook-orchard-c98347af70c04dfe8a75548790bdf363'
        },
        execution_id: '5ac23316271fb243d93e90e5',
        user: 'stanley'
      },
      user: 'stanley',
      execution_id: '5ac23317271fb270c7e8799f',
      mistral: {
        action_execution_id: 'b51b88cc-5250-4d9d-8c59-7fed6badae15',
        task_id: '7f6c5723-b7a7-4eb2-8b18-9bf7dfa034de',
        workflow_name: 'orchard.handle-webhook',
        workflow_execution_id: '0225be33-a838-4a4d-8846-2b0b3477f06d',
        task_tags: null,
        task_name: 'handle_deployment',
        callback_url:
          '/v2/action_executions/b51b88cc-5250-4d9d-8c59-7fed6badae15'
      }
    },
    mistral: {
      action_execution_id: 'dae1f908-9ee6-4c70-b1fc-6d10ed8cb5d4',
      task_id: '35c75a58-0ea5-44c8-a48f-ab85ef2cfd63',
      workflow_name: 'orchard.handle-webhook-deployment',
      workflow_execution_id: '33fb5169-f697-4340-b626-d930f0c71eb5',
      task_tags: null,
      task_name: 'delegate',
      callback_url: '/v2/action_executions/dae1f908-9ee6-4c70-b1fc-6d10ed8cb5d4'
    }
  },
  action: {
    runner_type: 'run-python',
    name: 'match_in_mapping',
    parameters: {
      default: {
        position: 2,
        required: true,
        type: 'string',
        description: 'Returned if no match is found'
      },
      mapping: {
        position: 1,
        required: true,
        type: 'array',
        description: 'List of objects with type,key,value properties. \'type\' can be either \'match\' or \'equals\'. \'key\' is what is matched against. \'value\' is what is returned if there is a match'
      },
      value: {
        position: 0,
        required: true,
        type: 'string',
        description: 'The value to match'
      }
    },
    tags: [],
    enabled: true,
    entry_point: 'match_in_mapping.py',
    notify: {},
    uid: 'action:util:match_in_mapping',
    pack: 'util',
    ref: 'util.match_in_mapping',
    id: '5980a98b271fb25abd7bb752',
    description: 'Return a value based on a list of mapping types'
  },
  liveaction: {
    runner_info: {
      hostname: 'st11p00me-sre002.me.com',
      pid: 16749
    },
    parameters: {
      default: 'testbot',
      mapping: [
        {
          type: 'match',
          key: 'trouper',
          value: 'trouper'
        },
        {
          type: 'match',
          key: 'glinda',
          value: 'glinda'
        },
        {
          type: 'match',
          key: 'dashboard',
          value: 'icloud-dashboard'
        },
        {
          type: 'match',
          key: 'argonath',
          value: 'MapsMedic'
        }
      ],
      value: 'argonath'
    },
    action_is_workflow: false,
    callback: {
      url:
        'http://0.0.0.0:8989/v2/action_executions/dae1f908-9ee6-4c70-b1fc-6d10ed8cb5d4',
      source: 'mistral'
    },
    action: 'util.match_in_mapping',
    id: '5ac23318271fb270c7e879a0'
  },
  id: '5ac23318271fb270c7e879a1',
  end_timestamp: '2018-04-02T13:41:45.779010Z'
};
