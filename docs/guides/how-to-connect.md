# Want to connect with Medic?

## Get set up
Contact Medic Support for the following:
* An API key
* An endpoint
* Workflow Planning

## Create a script
Once you have an API key and an endpoint, simply create a script like the one shown below on your service machines:

**/path/to/my/script/medic_webhook.sh**

```bash
#!/bin/bash                                                                                                                                                                                     

# ==== CONTACT MEDIC SUPPORT FOR THESE VALUES ==== #

# This is the url starting after `/webhooks/`
WEBHOOK_URL="url/from/medic/team"
API_KEY="yourapikey"


# ==== DO NOT CHANGE ==== #
# ======================= #

WEBHOOK_ROOT="https://sre-tools.apple.com/api/v1/webhooks/"
API_KEY_PARAMKEY='?st2-api-key='
FULL_PATH="$WEBHOOK_ROOT$WEBHOOK_URL$API_KEY_PARAMKEY$API_KEY"

# ======================= #
# == END DO NOT CHANGE == #


# Modify curl options as needed
curl \
-X POST \
$FULL_PATH \
-H "Content-Type: application/json" \
--data "$1"
```

## Call the script
Medic webhooks expect JSON data, so to call yours, simply call the script with a properly formatted JSON string:

```
/path/to/my/script/medic_webhook.sh '{ stringified:"json" }'
```

That's it!  You're all set to trigger workflows in Medic through a simple bash script!
