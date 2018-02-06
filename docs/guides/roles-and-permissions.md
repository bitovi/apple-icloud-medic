# Medic Roles and Permissions

### Directory Services

Directory Services (DS) allows Apple employees to define groups to which users can be assigned. For the sake of this document, a DS group is just a name and an ID. Users belong to mutliple DS groups specified by an array of group IDs. When a user is authenticated, the object looks like this (other fields omitted for brevity):

```js
{
  firstName: "Jane",
  lastName: "Doe",
  allGroups: [1234, 5678]
}
```

> **NOTE:** not all groups are Medic-related groups.

### "Roles" are used map DS group IDs to permissions

When an administrator creates a group (eg. "Medic Admins"), the ID for that group must be **manually** mapped to a meaningful permissions object within Medic. The `roles` table contains this mapping:

**Roles table:**

| id | dsGroupId | permissions |
|---|---|---|
| 1 | 1234 | `{ "teams": "admin" }` |

The permissions object is an arbitrary JSON object which Medic _understands_ and is able to parse to determine access rights for different entities.

### Permission objects

Permission objects map entities to a permissions as defined by medic (see ` shared/permission-helper`). Each permission name is assigned to a list of "verbs" to which that permission is allowed. As of this writing, the permissions mapping looks like this:

```js
{
  'ro-user': ['get', 'find'],
  'rw-user': ['get', 'find', 'create', 'update', 'patch'],
  'admin': ['get', 'find', 'create', 'update', 'patch', 'remove']
}
```
> **NOTE:** the "verbs" are [feathers service method names](https://docs.feathersjs.com/api/services.html#service-methods).


### Testing in development

During development, a default user is generated with super admin priveleges. However, from time to time developers will need to test new permissions and access rights to different entities. Here's how to do that:

1. Create an entry in the "roles" table for the local development. `dsGroupId` can be any integer and the permissions object must be recognized by the permissions engine (see `shared/permission-helper`).
    
    | id | dsGroupId | permissions |
    |---|---|---|
    | 1 | 999 | `{ "teams": "ro-user" }` |
2. Set the `DEV_USER_GROUPS` environment variable to the comma-delimited list of "dsGroupIds" you wish to testas they exist in the "roles" table.
    
    ```
    DEV_USER_GROUPS=999 npm run develop
    ```
3. Start the app and test.

## Checking user permissions in code

Both the front end and back end share the same permission checking logic as provided by the `shared/permission-helper`.

### Client side

**view helper:**

```js
import { userHasPermission } from '@public/util/view-helpers';
...
render() {
  const createButton = userHasPermission('users', 'create') === true ? <button>Create User</button> : null;
  return (
   <div>If you have permission you will see a button: {createButton}</div>
  );
}
```

**manual:**

```js
import Session from '@public/models/session';
import { userHasPermission } from '@root/shared/permission-helper';
...
const result = userHasPermission(Session.current.user, 'users', 'create');
if (result === true) {
  // user has permission!!
} else {
  result instanceof Error; //-> true
}
```
___

### Server side

> **Note:** global (app-level) permission checks take place for all services. However, some services will need to implement their own custom permission checks and disable the global permission checks. Services should set the following property on the service object:
> 
> ```js
> const service = app.service(location);
> service.skipGlobalPermissionCheck = true;
> ```


**manual:**

```js
const { userHasPermission } = require('../shared/permission-helper');
...
(hook) => {
  const result = userHasPermission(hook.params.user, 'users', hook.method);
  if (result === true) {
    // user has permission!!
  } else {
    result instanceof Error; //-> true
  }
}
```