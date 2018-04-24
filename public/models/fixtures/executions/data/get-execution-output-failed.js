export default {
  status: 'failed',
  start_timestamp: '2018-04-02T13:41:43.918820Z',
  log: [
    {
      status: 'requested',
      timestamp: '2018-04-02T13:41:43.951000Z'
    },
    {
      status: 'scheduled',
      timestamp: '2018-04-02T13:41:44.098000Z'
    },
    {
      status: 'running',
      timestamp: '2018-04-02T13:41:44.194000Z'
    },
    {
      status: 'failed',
      timestamp: '2018-04-02T13:41:51.013000Z'
    }
  ],
  parameters: {
    email_recipient: null,
    hipchat_room: 'icloud-self-healing',
    trigger_body: {
      version: '4ef9baab87d289b418505a3c46448d0bb1e44437',
      deployment: {
        application_git_url:
          'git@deploy.orchard.apple.com:geo-ops/argonath.git',
        availability_zones: [],
        deployer_name: 'Suresh Jayanty',
        timestamp: '2018-04-02 13:41:42 UTC',
        application_description: 'Maps SRE Toolkit',
        deployer_email: 'sujayant@apple.com',
        scheduler_version: '15',
        application_organization: 'geo-ops',
        build: 1795614,
        application_name: 'argonath'
      }
    }
  },
  runner: {
    runner_module: 'mistral_v2',
    uid: 'runner_type:mistral-v2',
    name: 'mistral-v2',
    enabled: true,
    query_module: 'mistral_v2',
    runner_parameters: {
      skip_notify: {
        default: [],
        type: 'array',
        description: 'List of tasks to skip notifications for.'
      },
      task: {
        type: 'string',
        description: 'The name of the task to run for reverse workflow.'
      },
      context: {
        default: {},
        type: 'object',
        description: 'Additional workflow inputs.'
      },
      workflow: {
        type: 'string',
        description:
          'The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \'<pack_name>.<action_name>.<workflow_name>\'. If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.'
      }
    },
    id: '591537d2271fb21ce5f37fc8',
    description: 'A runner for executing mistral v2 workflow.'
  },
  id: '5ac23317271fb270c7e8799f',
  elapsed_seconds: 7.062011,
  web_url:
    'https://st11p00me-sre002.me.com/#/history/5ac23317271fb270c7e8799f/general',
  parent: '5ac23316271fb243d93e90e5',
  result: {
    tasks: [
      {
        state_info: null,
        name: 'delegate',
        created_at: '2018-04-02 13:41:44',
        updated_at: '2018-04-02 13:41:45',
        id: '35c75a58-0ea5-44c8-a48f-ab85ef2cfd63',
        workflow_execution_id: '33fb5169-f697-4340-b626-d930f0c71eb5',
        state: 'SUCCESS',
        result: {
          stdout: '',
          exit_code: 0,
          stderr: '',
          result: 'MapsMedic'
        },
        published: {},
        input: null,
        workflow_name: 'orchard.handle-webhook-deployment'
      },
      {
        state_info: '',
        name: 'notify_deployment',
        created_at: '2018-04-02 13:41:45',
        updated_at: '2018-04-02 13:41:46',
        id: 'd588a70c-3a37-492e-8d38-8b9c681d5cd1',
        workflow_execution_id: '33fb5169-f697-4340-b626-d930f0c71eb5',
        state: 'ERROR',
        result: [],
        published: {},
        input: null,
        workflow_name: 'orchard.handle-webhook-deployment'
      }
    ],
    result: 'Failed to run task [error=Failed to find action [action_name=chatops.hipchat_post_html], wf=WorkflowExecution',
    __task_execution: {
      id: 'd588a70c-3a37-492e-8d38-8b9c681d5cd1',
      name: 'notify_deployment'
    },
    extra: {
      state_info:
        'Failed to run task [error=Failed to find action [action_name=chatops.hipchat_post_html], wf=WorkflowExecution',
      state: 'ERROR'
    }
  },
  context: {
    user: 'stanley',
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
    mistral: {
      action_execution_id: 'b51b88cc-5250-4d9d-8c59-7fed6badae15',
      parent: {
        workflow_execution_id: '0225be33-a838-4a4d-8846-2b0b3477f06d',
        workflow_name: 'orchard.handle-webhook'
      },
      task_id: '7f6c5723-b7a7-4eb2-8b18-9bf7dfa034de',
      workflow_name: 'orchard.handle-webhook-deployment',
      task_tags: null,
      task_name: 'handle_deployment',
      callback_url:
        '/v2/action_executions/b51b88cc-5250-4d9d-8c59-7fed6badae15',
      execution_id: '33fb5169-f697-4340-b626-d930f0c71eb5'
    }
  },
  action: {
    runner_type: 'mistral-v2',
    name: 'handle-webhook-deployment',
    parameters: {
      skip_notify: {
        default: [],
        type: 'array',
        description: 'List of tasks to skip notifications for.'
      },
      task: {
        type: 'string',
        description: 'The name of the task to run for reverse workflow.'
      },
      workflow: {
        type: 'string',
        description:
          'The name of the workflow to run if the entry_point is a workbook of many workflows. The name should be in the format \'<pack_name>.<action_name>.<workflow_name>\'. If entry point is a workflow or a workbook with a single workflow, the runner will identify the workflow automatically.'
      },
      hipchat_room: {
        type: 'string',
        description: 'the hipchat room to post to'
      },
      context: {
        default: {},
        type: 'object',
        description: 'Additional workflow inputs.'
      },
      email_recipient: {
        type: 'string',
        description: 'email address to send notifications to'
      },
      trigger_body: {
        required: true,
        type: 'object',
        description: 'The body of the web hook trigger'
      }
    },
    tags: [],
    enabled: true,
    entry_point: 'workflows/handle-webhook-deployment.yaml',
    notify: {},
    uid: 'action:orchard:handle-webhook-deployment',
    pack: 'orchard',
    ref: 'orchard.handle-webhook-deployment',
    id: '5980a41d271fb23c1c7899d5',
    description: 'Handle a deployment action from an orchard web hook'
  },
  liveaction: {
    runner_info: {
      hostname: 'st11p00me-sre002.me.com',
      pid: 16722
    },
    parameters: {
      email_recipient: null,
      hipchat_room: 'icloud-self-healing',
      trigger_body: {
        version: '4ef9baab87d289b418505a3c46448d0bb1e44437',
        deployment: {
          application_git_url:
            'git@deploy.orchard.apple.com:geo-ops/argonath.git',
          availability_zones: [],
          deployer_name: 'Suresh Jayanty',
          timestamp: '2018-04-02 13:41:42 UTC',
          application_description: 'Maps SRE Toolkit',
          deployer_email: 'sujayant@apple.com',
          scheduler_version: '15',
          application_organization: 'geo-ops',
          build: 1795614,
          application_name: 'argonath'
        }
      }
    },
    action_is_workflow: true,
    callback: {
      url:
        'http://0.0.0.0:8989/v2/action_executions/b51b88cc-5250-4d9d-8c59-7fed6badae15',
      source: 'mistral'
    },
    action: 'orchard.handle-webhook-deployment',
    id: '5ac23317271fb270c7e8799e'
  },
  children: ['5ac23318271fb270c7e879a1'],
  end_timestamp: '2018-04-02T13:41:50.980831Z'
};
