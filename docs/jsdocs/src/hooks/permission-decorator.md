## Constants

<dl>
<dt><a href="#errors">errors</a></dt>
<dd><p>This module loads the permissions for the user and decorates
the user object with the information required for the permission-check
hook to do its job.</p>
</dd>
<dt><a href="#INHERITS">INHERITS</a> : <code>Object</code></dt>
<dd><p>Mapping of entities which should inherit permissions from another entity.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#decorateUserPermissions">decorateUserPermissions(user, app)</a> ⇒ <code>Promise</code></dt>
<dd><p>Decorates a user with &quot;permission&quot; based on the users roles.</p>
</dd>
</dl>

<a name="errors"></a>

## errors
This module loads the permissions for the user and decorates
the user object with the information required for the permission-check
hook to do its job.

**Kind**: global constant  
<a name="INHERITS"></a>

## INHERITS : <code>Object</code>
Mapping of entities which should inherit permissions from another entity.

**Kind**: global constant  
<a name="decorateUserPermissions"></a>

## decorateUserPermissions(user, app) ⇒ <code>Promise</code>
Decorates a user with "permission" based on the users roles.

**Kind**: global function  
**Returns**: <code>Promise</code> - Resolves with the decorated user object  

| Param | Type |
| --- | --- |
| user | <code>Object</code> | 
| app | <code>Object</code> | 

