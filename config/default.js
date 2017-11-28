module.exports = {
  "host": "localhost",
  "port": "PORT",
  "public": "../public/",
  "postgres": "DATABASE_URL",
  "paginate": {
    "default": 25,
    "max": 100
  },
  "authentication": {
    "secret": "AUTH_SECRET",
    "strategies": [
      "custom",
      "jwt"
    ],
    "path": "/authentication",
    "service": "users",
    "jwt": {
      "header": {
        "type": "access"
      },
      "audience": "https://medic.apple.com",
      "subject": "AppleDSUsers",
      "issuer": "feathers",
      "algorithm": "HS256",
      "expiresIn": "2h"
    }
  },
  "sso": {
    "enabled": "SSO_AUTH_ENABLED",
    "superAdminGroups": "SA_GROUPS",
    "devUserGroups": "DEV_USER_GROUPS",
    "appId": "SSO_APP_ID",
    "appIdKey": "SSO_APP_ID_KEY",
    "appAdminPassword": "SSO_APP_ADMIN_PASSWORD",
    // used for "rv" param: ?rv=1, ?rv=2
    "appRedirectVersion": null,
    "authHost": "idmsauth-uat.corp.apple.com",
    "cookieName": "myacinfo-uat",
    // Some environments (eg. Orchard) have a load balancer which validates
    // the session cookie and appends special auth headers. In such situations,
    // we can trust those headers instead of validating the user cookie.
    // Only set this if you are absolutely sure!!
    // The headers are in this format: "x-appleconnect-[field-name]".
    "trustAuthHeaders": false
  },
  "stackstorm": {
    "host": "ST2_HOST",
    "apiKey": "ST2_API_KEY",
    "secret": "ST2_SECRET",
    "receiveAction": "medic_auth.receive_approval"
  }
};
