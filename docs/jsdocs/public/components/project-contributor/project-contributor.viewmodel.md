<a name="module_ProjectContributor VM"></a>

## ProjectContributor VM
**Parent**: ProjectContributor

ProjectContributor View Model  

* [ProjectContributor VM](#module_ProjectContributor VM)
    * [~contributorId](#module_ProjectContributor VM..contributorId)
    * [~contributorPromise](#module_ProjectContributor VM..contributorPromise) ⇒
    * [~contributor](#module_ProjectContributor VM..contributor) ⇒
    * [~permissionOptions](#module_ProjectContributor VM..permissionOptions)
    * [~handleRemove

Removes contributor from project.()](#module_ProjectContributor VM..handleRemove

Removes contributor from project.)
    * [~handlePermissionsChange

Updates permission property for a contributor.()](#module_ProjectContributor VM..handlePermissionsChange

Updates permission property for a contributor.)

<a name="module_ProjectContributor VM..contributorId"></a>

### ProjectContributor VM~contributorId
**Kind**: inner property of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
**Properties**

| Name | Description |
| --- | --- |
| contributorId | The contributorId used to get the contributor data. |

<a name="module_ProjectContributor VM..contributorPromise"></a>

### ProjectContributor VM~contributorPromise ⇒
Get promise for single contributor.

**Kind**: inner property of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
**Returns**: a promise that resolves to a contributor.  
<a name="module_ProjectContributor VM..contributor"></a>

### ProjectContributor VM~contributor ⇒
Get list of contributors

**Kind**: inner property of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
**Returns**: a contributor instance resolved from contributorPromise  
<a name="module_ProjectContributor VM..permissionOptions"></a>

### ProjectContributor VM~permissionOptions
**Kind**: inner property of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
**Properties**

| Name | Description |
| --- | --- |
| permissionsOptions | The different levels of permissions for a project. |

<a name="module_ProjectContributor VM..handleRemove

Removes contributor from project."></a>

### ProjectContributor VM~handleRemove

Removes contributor from project.()
**Kind**: inner method of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
<a name="module_ProjectContributor VM..handlePermissionsChange

Updates permission property for a contributor."></a>

### ProjectContributor VM~handlePermissionsChange

Updates permission property for a contributor.()
**Kind**: inner method of [<code>ProjectContributor VM</code>](#module_ProjectContributor VM)  
