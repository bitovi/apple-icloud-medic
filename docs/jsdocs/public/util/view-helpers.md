## Functions

<dl>
<dt><a href="#listAsArray">listAsArray(list)</a> ⇒ <code>Array</code></dt>
<dd><p>Ensures an array-like object is converted to an actual array.
This is useful for passing DefineLists as props where an array
is expected or enforced.</p>
</dd>
<dt><a href="#userHasPermission">userHasPermission(entityName, action)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Determine if a user has permission for a particular entity.</p>
</dd>
<dt><a href="#formatDate">formatDate(date, format)</a> ⇒ <code>String</code></dt>
<dd><p>Format a date using moment</p>
</dd>
</dl>

<a name="listAsArray"></a>

## listAsArray(list) ⇒ <code>Array</code>
Ensures an array-like object is converted to an actual array.
This is useful for passing DefineLists as props where an array
is expected or enforced.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Object</code> \| <code>Array</code> | An array-like object. |

<a name="userHasPermission"></a>

## userHasPermission(entityName, action) ⇒ <code>Boolean</code>
Determine if a user has permission for a particular entity.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| entityName | <code>String</code> |  |
| action | <code>String</code> | ("get", "find", "create", "update", "patch", "remove") |

<a name="formatDate"></a>

## formatDate(date, format) ⇒ <code>String</code>
Format a date using moment

**Kind**: global function  

| Param | Type |
| --- | --- |
| date | <code>String</code> \| <code>Date</code> | 
| format | <code>String</code> | 

