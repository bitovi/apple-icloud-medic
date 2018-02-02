## Modules

<dl>
<dt><a href="#module_RuleCards VM">RuleCards VM</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#RuleCards">RuleCards</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#render">render()</a> ⇒</dt>
<dd></dd>
</dl>

<a name="module_RuleCards VM"></a>

## RuleCards VM
**Parent**: RuleCards

Rule Cards View Model  

* [RuleCards VM](#module_RuleCards VM)
    * [~rulesPromise](#module_RuleCards VM..rulesPromise) ⇒
    * [~rules](#module_RuleCards VM..rules) ⇒
    * [~isLoading](#module_RuleCards VM..isLoading)
    * [~isEditing](#module_RuleCards VM..isEditing)
    * [~itemsPerRow](#module_RuleCards VM..itemsPerRow)

<a name="module_RuleCards VM..rulesPromise"></a>

### RuleCards VM~rulesPromise ⇒
Get promise for rules list.

**Kind**: inner property of [<code>RuleCards VM</code>](#module_RuleCards VM)  
**Returns**: a promise that resolves to a list of rules.  
<a name="module_RuleCards VM..rules"></a>

### RuleCards VM~rules ⇒
Get list of rules

**Kind**: inner property of [<code>RuleCards VM</code>](#module_RuleCards VM)  
**Returns**: a list of rules resolved from rulesPromise  
<a name="module_RuleCards VM..isLoading"></a>

### RuleCards VM~isLoading
**Kind**: inner property of [<code>RuleCards VM</code>](#module_RuleCards VM)  
**Properties**

| Name | Description |
| --- | --- |
| isLoading | Rules loading state. |

<a name="module_RuleCards VM..isEditing"></a>

### RuleCards VM~isEditing
**Kind**: inner property of [<code>RuleCards VM</code>](#module_RuleCards VM)  
**Properties**

| Name | Description |
| --- | --- |
| isEditing | Rule edit state allows a rule to be deleted. |

<a name="module_RuleCards VM..itemsPerRow"></a>

### RuleCards VM~itemsPerRow
**Kind**: inner property of [<code>RuleCards VM</code>](#module_RuleCards VM)  
**Default**: <code>3</code>  
**Properties**

| Name | Description |
| --- | --- |
| itemsPerRow | Number of cards to be shown per row. |

<a name="RuleCards"></a>

## RuleCards
**Kind**: global class  
**Component**: RuleCards

List of rules in a card template.  
<a name="render"></a>

## render() ⇒
**Kind**: global function  
**Returns**: RuleCard template  
