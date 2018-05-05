<a name="module_EditForm VM"></a>

## EditForm VM
**Parent**: EditForm

EditForm View Model  

* [EditForm VM](#module_EditForm VM)
    * [~formDef](#module_EditForm VM..formDef)
    * [~showButtons](#module_EditForm VM..showButtons)
    * [~itemData](#module_EditForm VM..itemData)
    * [~status](#module_EditForm VM..status)
    * [~successMessage](#module_EditForm VM..successMessage)
    * [~successCallback](#module_EditForm VM..successCallback)
    * [~error](#module_EditForm VM..error)
    * [~isNew](#module_EditForm VM..isNew)
    * [~fieldDefinitions](#module_EditForm VM..fieldDefinitions)
    * [~This should be the single place for updating itemData directly.
Also handles change events for consumer provided Field components()](#module_EditForm VM..This should be the single place for updating itemData directly.
Also handles change events for consumer provided Field components)
    * [~Handles Semantic UI form component events()](#module_EditForm VM..Handles Semantic UI form component events)
    * [~Makes an id to be used for an individual field()](#module_EditForm VM..Makes an id to be used for an individual field)
    * [~Parses the field name (prop) from an ID generated using makeIdForProp()()](#module_EditForm VM..Parses the field name (prop) from an ID generated using makeIdForProp_new)
    * [~Save new project.()](#module_EditForm VM..Save new project.)
    * [~Handles cancel button click.()](#module_EditForm VM..Handles cancel button click.)
    * [~Reset new project form fields to empty strings.()](#module_EditForm VM..Reset new project form fields to empty strings.)
    * [~This sets the default values on the edited item.()](#module_EditForm VM..This sets the default values on the edited item.)

<a name="module_EditForm VM..formDef"></a>

### EditForm VM~formDef
Settings to ...spread onto the underlying form components,
keyed by field name. Please see docs for individual form components.

```
{
  "name": { required: true, placeholder: 'Please enter your name' },
  "enabled": { required: true, type: 'boolean', value: true },
  "status": { type: 'enum', options: [{ text: 'success', value: 'success' }, { text: 'failed', value: 'failed' }]}
}
```

**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name |
| --- |
| formDef | 

<a name="module_EditForm VM..showButtons"></a>

### EditForm VM~showButtons
Whether or not to show the submit/cancel buttons

**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..itemData"></a>

### EditForm VM~itemData
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| The | data for the item being edited |

<a name="module_EditForm VM..status"></a>

### EditForm VM~status
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| Status | of the form. "error" or "success" |

<a name="module_EditForm VM..successMessage"></a>

### EditForm VM~successMessage
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| A | "renderable thing" (string, React element, etc) to render for the success message |

<a name="module_EditForm VM..successCallback"></a>

### EditForm VM~successCallback
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| A | callback function to call on succes. The function will receive the result of the item's `save()` method. |

<a name="module_EditForm VM..error"></a>

### EditForm VM~error
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| An | error object for any form errors. Should contain a "message" property. |

<a name="module_EditForm VM..isNew"></a>

### EditForm VM~isNew
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| Whether | or not the currently edited item is new or existing |

<a name="module_EditForm VM..fieldDefinitions"></a>

### EditForm VM~fieldDefinitions
Converts the supplied formDef into a list of field definitions for rendering.

**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..This should be the single place for updating itemData directly.
Also handles change events for consumer provided Field components"></a>

### EditForm VM~This should be the single place for updating itemData directly.
Also handles change events for consumer provided Field components()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Handles Semantic UI form component events"></a>

### EditForm VM~Handles Semantic UI form component events()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Makes an id to be used for an individual field"></a>

### EditForm VM~Makes an id to be used for an individual field()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Parses the field name (prop) from an ID generated using makeIdForProp_new"></a>

### EditForm VM~Parses the field name (prop) from an ID generated using makeIdForProp()()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Save new project."></a>

### EditForm VM~Save new project.()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Handles cancel button click."></a>

### EditForm VM~Handles cancel button click.()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Reset new project form fields to empty strings."></a>

### EditForm VM~Reset new project form fields to empty strings.()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..This sets the default values on the edited item."></a>

### EditForm VM~This sets the default values on the edited item.()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
