<a name="module_ProjectContributors VM"></a>

## ProjectContributors VM
**Parent**: ProjectContributors

ProjectContributors View Model  

* [ProjectContributors VM](#module_ProjectContributors VM)
    * [~contributorsPromise](#module_ProjectContributors VM..contributorsPromise) ⇒
    * [~contributors](#module_ProjectContributors VM..contributors) ⇒
    * [~projectId](#module_ProjectContributors VM..projectId)
    * [~isLoading](#module_ProjectContributors VM..isLoading)

<a name="module_ProjectContributors VM..contributorsPromise"></a>

### ProjectContributors VM~contributorsPromise ⇒
Get promise for contributors list. Requires the projectId to be defined.

**Kind**: inner property of [<code>ProjectContributors VM</code>](#module_ProjectContributors VM)  
**Returns**: a promise that resolves to a list of contributors.  
<a name="module_ProjectContributors VM..contributors"></a>

### ProjectContributors VM~contributors ⇒
Get list of contributors

**Kind**: inner property of [<code>ProjectContributors VM</code>](#module_ProjectContributors VM)  
**Returns**: a list of contributors resolved from contributorsPromise  
<a name="module_ProjectContributors VM..projectId"></a>

### ProjectContributors VM~projectId
**Kind**: inner property of [<code>ProjectContributors VM</code>](#module_ProjectContributors VM)  
**Properties**

| Name | Description |
| --- | --- |
| projectId | The projectId used to get the contributors data. |

<a name="module_ProjectContributors VM..isLoading"></a>

### ProjectContributors VM~isLoading
**Kind**: inner property of [<code>ProjectContributors VM</code>](#module_ProjectContributors VM)  
**Properties**

| Name | Description |
| --- | --- |
| isLoading | ProjectContributors loading state. |

