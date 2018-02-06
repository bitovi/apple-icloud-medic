<a name="checkPermissions"></a>

## checkPermissions()
This module checks user permissions for individual request.
Here's how it works:

 1. Determine the name of entity being acted upon
 2. Check against user.permissions for access rights
    SEE: permission-decorator.js for how user.permissions are set

**Kind**: global function  
