<a name="module_TriggerSelector VM"></a>

## TriggerSelector VM
**Parent**: TriggerSelector

TriggerSelector View Model  

* [TriggerSelector VM](#module_TriggerSelector VM)
    * [~onChange](#module_TriggerSelector VM..onChange)
    * [~label](#module_TriggerSelector VM..label)
    * [~results](#module_TriggerSelector VM..results)
    * [~selectedSchema](#module_TriggerSelector VM..selectedSchema)
    * [~searchValue](#module_TriggerSelector VM..searchValue)
    * [~selectedSearchResult](#module_TriggerSelector VM..selectedSearchResult)
    * [~formData](#module_TriggerSelector VM..formData)
    * [~isValid](#module_TriggerSelector VM..isValid)
    * [~setFormData()](#module_TriggerSelector VM..setFormData)
    * [~dispatchChange()](#module_TriggerSelector VM..dispatchChange)
    * [~handleFormChange()](#module_TriggerSelector VM..handleFormChange)
    * [~handleSearchChange()](#module_TriggerSelector VM..handleSearchChange)
    * [~handleResultSelect()](#module_TriggerSelector VM..handleResultSelect)
    * [~resetAll()](#module_TriggerSelector VM..resetAll)

<a name="module_TriggerSelector VM..onChange"></a>

### TriggerSelector VM~onChange
The "main" change event for this field component.
This only gets called when the form is valid.

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..label"></a>

### TriggerSelector VM~label
Optional form label

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..results"></a>

### TriggerSelector VM~results
A filtered set of data based on the search input
Passed from above.

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..selectedSchema"></a>

### TriggerSelector VM~selectedSchema
The schema object for the currently selected item.
The object must exist and have keys.

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..searchValue"></a>

### TriggerSelector VM~searchValue
The value of the search input

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..selectedSearchResult"></a>

### TriggerSelector VM~selectedSearchResult
The currently selected search result

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..formData"></a>

### TriggerSelector VM~formData
Holds the form data for the currently selected triggertype.
IMPORTANT: This will only have a value when the form is valid

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..isValid"></a>

### TriggerSelector VM~isValid
Whether or not the current selection and its form are complete.
The following are considered "valid"
 1. If there is no selection and no searchValue (empty)
 2. If there is a selection and a) no schema or b) formData

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..setFormData"></a>

### TriggerSelector VM~setFormData()
Sets the formData without dispatching a "change" event

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..dispatchChange"></a>

### TriggerSelector VM~dispatchChange()
Dispatches the primary "change" event for this component.
This is a crucial part of this component.

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..handleFormChange"></a>

### TriggerSelector VM~handleFormChange()
Handles changes to the underlying form

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..handleSearchChange"></a>

### TriggerSelector VM~handleSearchChange()
Handles the "change" event for the search input.

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..handleResultSelect"></a>

### TriggerSelector VM~handleResultSelect()
handles the "select" event of individual search results

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..resetAll"></a>

### TriggerSelector VM~resetAll()
Resets all important properties

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
