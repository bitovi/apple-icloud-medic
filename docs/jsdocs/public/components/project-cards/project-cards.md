## Modules

<dl>
<dt><a href="#module_ProjectCards VM">ProjectCards VM</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#ProjectCards">ProjectCards</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#render">render()</a> ⇒</dt>
<dd></dd>
</dl>

<a name="module_ProjectCards VM"></a>

## ProjectCards VM
**Parent**: ProjectCards

Project Cards View Model  

* [ProjectCards VM](#module_ProjectCards VM)
    * [~projectsPromise](#module_ProjectCards VM..projectsPromise) ⇒
    * [~projects](#module_ProjectCards VM..projects) ⇒
    * [~isLoading](#module_ProjectCards VM..isLoading)
    * [~isEditing](#module_ProjectCards VM..isEditing)
    * [~itemsPerRow](#module_ProjectCards VM..itemsPerRow)

<a name="module_ProjectCards VM..projectsPromise"></a>

### ProjectCards VM~projectsPromise ⇒
Get promise for projects list.

**Kind**: inner property of [<code>ProjectCards VM</code>](#module_ProjectCards VM)  
**Returns**: a promise that resolves to a list of projects.  
<a name="module_ProjectCards VM..projects"></a>

### ProjectCards VM~projects ⇒
Get list of projects

**Kind**: inner property of [<code>ProjectCards VM</code>](#module_ProjectCards VM)  
**Returns**: a list of projects resolved from projectsPromise  
<a name="module_ProjectCards VM..isLoading"></a>

### ProjectCards VM~isLoading
**Kind**: inner property of [<code>ProjectCards VM</code>](#module_ProjectCards VM)  
**Properties**

| Name | Description |
| --- | --- |
| isLoading | Projects loading state. |

<a name="module_ProjectCards VM..isEditing"></a>

### ProjectCards VM~isEditing
**Kind**: inner property of [<code>ProjectCards VM</code>](#module_ProjectCards VM)  
**Properties**

| Name | Description |
| --- | --- |
| isEditing | Project edit state allows a project to be deleted. |

<a name="module_ProjectCards VM..itemsPerRow"></a>

### ProjectCards VM~itemsPerRow
**Kind**: inner property of [<code>ProjectCards VM</code>](#module_ProjectCards VM)  
**Default**: <code>3</code>  
**Properties**

| Name | Description |
| --- | --- |
| itemsPerRow | Number of cards to be shown per row. |

<a name="ProjectCards"></a>

## ProjectCards
**Kind**: global class  
**Component**: ProjectCards

List of projects in a card template.  
<a name="render"></a>

## render() ⇒
**Kind**: global function  
**Returns**: ProjectCard template  
