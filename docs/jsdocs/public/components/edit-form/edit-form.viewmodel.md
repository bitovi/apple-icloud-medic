<a name="module_EditForm VM"></a>

## EditForm VM
**Parent**: EditForm

EditForm View Model  

* [EditForm VM](#module_EditForm VM)
    * [~ItemType](#module_EditForm VM..ItemType)
    * [~formDef](#module_EditForm VM..formDef)
    * [~itemData](#module_EditForm VM..itemData)
    * [~status](#module_EditForm VM..status)
    * [~successMessage](#module_EditForm VM..successMessage)
    * [~successCallback](#module_EditForm VM..successCallback)
    * [~error](#module_EditForm VM..error)
    * [~isNew](#module_EditForm VM..isNew)
    * [~_formDef](#module_EditForm VM.._formDef)
    * [~Makes an id to be used for an individual field()](#module_EditForm VM..Makes an id to be used for an individual field)
    * [~Parses the field name (key) from an ID generated using makeIdForKey()()](#module_EditForm VM..Parses the field name (key) from an ID generated using makeIdForKey_new)
    * [~Gets a list of field names (keys) to be rendered in the form. This
filters out fields which should not be edited.()](#module_EditForm VM..Gets a list of field names (keys) to be rendered in the form. This
filters out fields which should not be edited.)
    * [~Updates the itemData properties when form is updated.()](#module_EditForm VM..Updates the itemData properties when form is updated.)
    * [~Save new project.()](#module_EditForm VM..Save new project.)
    * [~Handles cancel button click.()](#module_EditForm VM..Handles cancel button click.)
    * [~Reset new project form fields to empty strings.()](#module_EditForm VM..Reset new project form fields to empty strings.)
    * [~This sets the default values on the edited item.()](#module_EditForm VM..This sets the default values on the edited item.)

<a name="module_EditForm VM..ItemType"></a>

### EditForm VM~ItemType
**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name | Description |
| --- | --- |
| ItemType | The constructor model to use for building the form fields. |

<a name="module_EditForm VM..formDef"></a>

### EditForm VM~formDef
Additional settings to ...spread onto the underlying form components,
keyed by field name. Please see docs for individual form components.

```
{
  "name": { required: true, placeholder: 'Please enter your name' }
}
```

**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
**Properties**

| Name |
| --- |
| formDef | 

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

<a name="module_EditForm VM.._formDef"></a>

### EditForm VM~_formDef
Creates a list of objects, each object is ...spread onto
the rendered form component. This should NOT be set from a parent.

**Kind**: inner property of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Makes an id to be used for an individual field"></a>

### EditForm VM~Makes an id to be used for an individual field()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Parses the field name (key) from an ID generated using makeIdForKey_new"></a>

### EditForm VM~Parses the field name (key) from an ID generated using makeIdForKey()()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Gets a list of field names (keys) to be rendered in the form. This
filters out fields which should not be edited."></a>

### EditForm VM~Gets a list of field names (keys) to be rendered in the form. This
filters out fields which should not be edited.()
**Kind**: inner method of [<code>EditForm VM</code>](#module_EditForm VM)  
<a name="module_EditForm VM..Updates the itemData properties when form is updated."></a>

### EditForm VM~Updates the itemData properties when form is updated.()
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
