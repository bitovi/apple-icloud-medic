# Webhooks and API Keys

## Webhooks

### Creating a webhook

To create a webhook, create a rule for your pack as follows:
```
action:
  parameters:
    trigger_body: '{{trigger.body}}'
    trigger_headers: '{{trigger.headers}}'
  ref: your_pack.handle_webhook_action
description: Handle web hooks
enabled: true
name: sample_webhook
pack: your_pack
trigger:
  parameters:
    url: your_pack/your_endpoint
  type: core.st2.webhook
type:
  parameters: {}
  ref: standard
```

#### Details


##### trigger.parameters.url
This is the url of the webhook.  The convention is to prefix endpoints url with the pack name (i.e. `your_pack/`) because webhooks are global.  This will help reduce collisions.

##### trigger_body
The body of the webhook (the data) is accessible via `{{trigger.body}}`

##### trigger_headers
The headers of the webhook are accessible via `{{trigger.headers}}`


### Using a webhook
Webhooks are called via a `POST` to `the StackStorm server` + `/api/v1/webhooks/` + `your_pack/your_endpoint`.
An API Key (see below) must be passed along with the request.  They can be passed either by a request Header (`St2-Api-Key`) or by a query string parameter (`st2-api-key`)

#### Example Usage

**Header (preferred)**
```
curl -X POST https://127.0.0.1/api/v1/webhooks/your_pack/your_endpoint -H "St2-Api-Key: {your_api_key}" -H "Content-Type: application/json" --data '{"data":"properly formatted json"}'
```

**Query String Parameter**
```
curl -X POST https://127.0.0.1/api/v1/webhooks/your_pack/your_endpoint?st2-api-key={your_api_key} -H "Content-Type: application/json" --data '{"data":"properly formatted json"}'
```

## API Keys
Webhooks need API keys to be executed. 

### Creating an API Key

To create an api key with the following command inside of the running Docker instance:
```
st2 apikey create -k -m '{"used_by": "your_pack"}'
```

#### Details

##### Key Data
Add a meaningful set of data for the api key.  The convention is to add a `used_by` key whose value is the name of the pack.

##### Key Storage
API keys are not stored anywhere.  When an API key is created, save the key in a location that will be useful to you and your team.
