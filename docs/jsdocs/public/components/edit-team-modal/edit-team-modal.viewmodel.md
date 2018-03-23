<a name="module_EditTeamModal VM"></a>

## EditTeamModal VM
**Parent**: EditTeamModal

EditTeamModal View Model  

* [EditTeamModal VM](#module_EditTeamModal VM)
    * [~isNew](#module_EditTeamModal VM..isNew)
    * [~floatedButton](#module_EditTeamModal VM..floatedButton)
    * [~formDef](#module_EditTeamModal VM..formDef)
    * [~team](#module_EditTeamModal VM..team)
    * [~open](#module_EditTeamModal VM..open)
    * [~status](#module_EditTeamModal VM..status)
    * [~successMessage](#module_EditTeamModal VM..successMessage)
    * [~handleSuccess

Success callback that is passed inot the form that sets the successMessage, status.
Toggles the modal and resets data after delay.()](#module_EditTeamModal VM..handleSuccess

Success callback that is passed inot the form that sets the successMessage, status.
Toggles the modal and resets data after delay.)
    * [~Resets success and status messages.()](#module_EditTeamModal VM..Resets success and status messages.)
    * [~Handles cancel state by toggling modal and resetting data.()](#module_EditTeamModal VM..Handles cancel state by toggling modal and resetting data.)
    * [~Toggles modal open/close prop.()](#module_EditTeamModal VM..Toggles modal open/close prop.)
    * [~Handles when trigger button is clicked and toggles modal.()](#module_EditTeamModal VM..Handles when trigger button is clicked and toggles modal.)

<a name="module_EditTeamModal VM..isNew"></a>

### EditTeamModal VM~isNew
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| isNew | True if editing a new team, false if editing an existing team |

<a name="module_EditTeamModal VM..floatedButton"></a>

### EditTeamModal VM~floatedButton
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| floatedButton | Float button to right or left |

<a name="module_EditTeamModal VM..formDef"></a>

### EditTeamModal VM~formDef
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| formDef | Defines the form requirements. codeNames cannot be changed once created. |

<a name="module_EditTeamModal VM..team"></a>

### EditTeamModal VM~team
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| team | The team passed from the parent component to be editted or the new team being created. |

<a name="module_EditTeamModal VM..open"></a>

### EditTeamModal VM~open
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| Boolean | value that represents the open state of the modal. |

<a name="module_EditTeamModal VM..status"></a>

### EditTeamModal VM~status
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| Status | of the form. "error" or "success" |

<a name="module_EditTeamModal VM..successMessage"></a>

### EditTeamModal VM~successMessage
**Kind**: inner property of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
**Properties**

| Name | Description |
| --- | --- |
| A | "renderable thing" (string, React element, etc) to render for the success message |

<a name="module_EditTeamModal VM..handleSuccess

Success callback that is passed inot the form that sets the successMessage, status.
Toggles the modal and resets data after delay."></a>

### EditTeamModal VM~handleSuccess

Success callback that is passed inot the form that sets the successMessage, status.
Toggles the modal and resets data after delay.()
**Kind**: inner method of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
<a name="module_EditTeamModal VM..Resets success and status messages."></a>

### EditTeamModal VM~Resets success and status messages.()
**Kind**: inner method of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
<a name="module_EditTeamModal VM..Handles cancel state by toggling modal and resetting data."></a>

### EditTeamModal VM~Handles cancel state by toggling modal and resetting data.()
**Kind**: inner method of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
<a name="module_EditTeamModal VM..Toggles modal open/close prop."></a>

### EditTeamModal VM~Toggles modal open/close prop.()
**Kind**: inner method of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
<a name="module_EditTeamModal VM..Handles when trigger button is clicked and toggles modal."></a>

### EditTeamModal VM~Handles when trigger button is clicked and toggles modal.()
**Kind**: inner method of [<code>EditTeamModal VM</code>](#module_EditTeamModal VM)  
