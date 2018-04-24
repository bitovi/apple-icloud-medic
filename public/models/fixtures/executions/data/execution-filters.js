/* eslint-disable */
export default {
  status: {
    key: "status",
    title: "Status",
    options: ["failed", "requested", "running", "succeeded"]
  },
  trigger_type: {
    key: "triggerType",
    title: "Trigger Type",
    options: ["st2.CronTimer", "st2.generic.notifytrigger", "st2.webhook"]
  },
  runner: {
    key: "runner",
    title: "Runner",
    options: [
      "action-chain",
      "announcement",
      "local-shell-cmd",
      "local-shell-script",
      "mistral-v2",
      "noop",
      "python-script",
      "run-python"
    ]
  },
  rule: {
    key: "rule",
    title: "Rule",
    options: [
      "epic_webhook",
      "index_webhook",
      "notify",
      "sre_core_hubble_webhook_report"
    ]
  },
  trigger: {
    key: "trigger",
    title: "Trigger",
    options: [
      "72fc92bf-9881-4a80-a68c-892aca2bae0d",
      "ad644f5a-96ad-4bdc-9194-dbb469277648",
      "d57e36ee-3364-4035-ad07-651e6ddc04fd",
      "st2.generic.notifytrigger"
    ]
  },
  user: {
    key: "user",
    title: "User",
    options: [
      "andylee",
      "joshua_anderson",
      "rajkumar_vijayan",
      "st2admin",
      "stanley",
      "vijay"
    ]
  },
  action: {
    key: "action",
    title: "Action",
    options: [
      "carnival.config-path-map",
      "carnival.greet",
      "carnival.run",
      "carnival.run-apps-overview",
      "carnival.run-started-bounces",
      "chatops.format_execution_result",
      "chatops.post_message",
      "chatops.post_result",
      "core.local",
      "core.local_sudo",
      "core.noop",
      "email.send_email",
      "maps.get-app-mapping",
      "maps.notify_get_app_names",
      "maps_epic.fix_vip_alert",
      "medic_chatops.hipchat_post_html",
      "medic_chatops.post_hipchat_message",
      "medic_github.git",
      "medic_github.install_packs",
      "medic_github.medic_exchange_pack_install",
      "medic_github.update",
      "medic_github.update-index",
      "medic_reporting.get_remediation_action",
      "medic_reporting.hubble_webhook_report",
      "medic_reporting.notify",
      "medic_reporting.run",
      "packs.delete",
      "packs.download",
      "packs.install",
      "packs.load",
      "packs.setup_virtualenv",
      "packs.uninstall",
      "packs.unload",
      "packs.virtualenv_prerun",
      "st2.kv.delete",
      "st2.kv.grep",
      "st2.sensors.list",
      "test_github_integration.test-action",
      "wiggles.checkvipstatus",
      "wiggles.datastore",
      "wiggles.epic2wigglesvip",
      "wiggles.restart_process"
    ]
  },
  execution_type: {
    key: "executionType",
    title: "Execution Types",
    options: ["rules", "workflows"]
  }
};
