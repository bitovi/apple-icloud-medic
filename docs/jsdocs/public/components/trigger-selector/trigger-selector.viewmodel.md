<a name="module_TriggerSelector VM"></a>

## TriggerSelector VM
**Parent**: TriggerSelector

TriggerSelector View Model  

* [TriggerSelector VM](#module_TriggerSelector VM)
    * [~onChange](#module_TriggerSelector VM..onChange)
    * [~triggertypes](#module_TriggerSelector VM..triggertypes)
    * [~searchValue](#module_TriggerSelector VM..searchValue)
    * [~selectedTriggerType](#module_TriggerSelector VM..selectedTriggerType)
    * [~selectedSchema](#module_TriggerSelector VM..selectedSchema)
    * [~results](#module_TriggerSelector VM..results)
    * [~formData](#module_TriggerSelector VM..formData)
    * [~isValid](#module_TriggerSelector VM..isValid)
    * [~handleResultSelect()](#module_TriggerSelector VM..handleResultSelect)
    * [~handleSearchChange()](#module_TriggerSelector VM..handleSearchChange)

<a name="module_TriggerSelector VM..onChange"></a>

### TriggerSelector VM~onChange
Passed from above

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..triggertypes"></a>

### TriggerSelector VM~triggertypes
list of triggertypes which can be selected

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..searchValue"></a>

### TriggerSelector VM~searchValue
The value of the search input

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..selectedTriggerType"></a>

### TriggerSelector VM~selectedTriggerType
The currently selected triggertype

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..selectedSchema"></a>

### TriggerSelector VM~selectedSchema
The schema object for the currently selected triggertype.
The object must exist and have keys.

**Kind**: inner property of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..results"></a>

### TriggerSelector VM~results
A filtered set of data based on the search input

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
<a name="module_TriggerSelector VM..handleResultSelect"></a>

### TriggerSelector VM~handleResultSelect()
handles the "select" event of individual tiggertypes

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
<a name="module_TriggerSelector VM..handleSearchChange"></a>

### TriggerSelector VM~handleSearchChange()
Handles the "change" event for the search input
This creates a list of results based on the input value.

**Kind**: inner method of [<code>TriggerSelector VM</code>](#module_TriggerSelector VM)  
