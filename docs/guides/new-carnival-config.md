# Connect a carnival account to Medic

## Get set up

### Create a system user for your purpose
Be sure that the user has permissions to perform the desired functionality.

### Authenticate
Work with [Medic Support](mailto:medic-support@group.apple.com) to provide the following information:

#### Login configuration
```
CARNIVAL_COOKIE_APPADMINPASSWORD={your-app-admin-password}
CARNIVAL_COOKIE_APPID={ your-app-id }
CARNIVAL_COOKIE_APPIDKEY={ your-app-id-key}

CARNIVAL_SYSTEM_APPLEID={ system-apple-id }
CARNIVAL_SYSTEM_PASSWORD={ system-password }
```
> *Note:* Medic will use a configuration file with this information to authenticate with Carnival.  See the [carnival-client docs](https://github.pie.apple.com/icloud-automation-sre/carnival-client#required-environment-variables) for more details.


### Server List
Carnival executions require mapping of `environment` to Carnival urls.

#### Example:
```
{
  production: 'https://carnival.icloud.apple.com/Carnival/services',
  envX: 'https://envx.icloud.apple.com/Carnival/services',
  envY: 'https://envy.icloud.apple.com/Carnival/services',
  envZ: 'https://envz.icloud.apple.com/Carnival/services'
}
```

## Carnival Client
* Create a pull request to carnival-client
  * Add your servers and identifiers (object keys) to [hosts-by-environment](https://github.pie.apple.com/icloud-automation-sre/carnival-client/blob/master/hosts_by_environment.js).
* Someone from the Medic team will:
  * Review the PR
  * Merge the PR
  * Update the reference in Medic (see below)

# Medic Support Only

### Add desired servers to the `carnival.run` workflow
* In the `carnival.run` workflow ([carnival.run](https://medic.apple.com/flow/#/action/carnival.run))
* Open Metadata modal (gear icon)
* Edit the `env_map` parameter in the parameters list
* Update the default value to include the new server list
