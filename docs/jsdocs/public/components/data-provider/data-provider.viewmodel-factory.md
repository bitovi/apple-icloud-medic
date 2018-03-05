<a name="module_BaseDataProvider VM"></a>

## BaseDataProvider VM
**Parent**: Components

BaseDataProvider ViewModel - the should be extended for use
in the data-provider component. See the data-provider component
and story for details.  

* [BaseDataProvider VM](#module_BaseDataProvider VM)
    * [~id](#module_BaseDataProvider VM..id)
    * [~query](#module_BaseDataProvider VM..query)
    * [~shouldLoadData](#module_BaseDataProvider VM..shouldLoadData)
    * [~error](#module_BaseDataProvider VM..error)
    * [~isSingleObject](#module_BaseDataProvider VM..isSingleObject)
    * [~isLoading](#module_BaseDataProvider VM..isLoading)
    * [~dataPromise](#module_BaseDataProvider VM..dataPromise)
    * [~dataProp](#module_BaseDataProvider VM..dataProp)
    * [~connection](#module_BaseDataProvider VM..connection)
    * [~dataProp](#module_BaseDataProvider VM..dataProp)
    * [~init()](#module_BaseDataProvider VM..init)
    * [~makeViewModel(Model, dataProp)](#module_BaseDataProvider VM..makeViewModel) ⇒ <code>DefineMap</code>

<a name="module_BaseDataProvider VM..id"></a>

### BaseDataProvider VM~id
Optional id of the the object to load.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| id | 

<a name="module_BaseDataProvider VM..query"></a>

### BaseDataProvider VM~query
Optional query used in the GET request

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| id | 

<a name="module_BaseDataProvider VM..shouldLoadData"></a>

### BaseDataProvider VM~shouldLoadData
Determines whether or not this component should load data.
This is crucial to how this component works: it allows a parent
component to provide the data, thus skipping the loading logic.
See the init() method below.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| shouldLoadData | 

<a name="module_BaseDataProvider VM..error"></a>

### BaseDataProvider VM~error
**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| error | 

<a name="module_BaseDataProvider VM..isSingleObject"></a>

### BaseDataProvider VM~isSingleObject
Determines whether or not this should load a single object (by id).

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| isSingleObject | 

<a name="module_BaseDataProvider VM..isLoading"></a>

### BaseDataProvider VM~isLoading
**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| isLoading | 

<a name="module_BaseDataProvider VM..dataPromise"></a>

### BaseDataProvider VM~dataPromise
Calls get() or getList() accordingly.
Note: If "shouldLoadData" is false, this intentionally returns "undefined".
Anything accessing this property should first check "shouldLoadData"
before reading this property. This is done intentionally as this module
should should never load data if it is provided from a parent component.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| dataPromise | 

<a name="module_BaseDataProvider VM..dataProp"></a>

### BaseDataProvider VM~dataProp
The name of the property which will hold the loaded data.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| dataProp | 

<a name="module_BaseDataProvider VM..connection"></a>

### BaseDataProvider VM~connection
The connection used for loading data.
Should implement get() and/or getList() methods.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
**Properties**

| Name |
| --- |
| connection | 

<a name="module_BaseDataProvider VM..dataProp"></a>

### BaseDataProvider VM~dataProp
This is the property which will hold the data.

**Kind**: inner property of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
<a name="module_BaseDataProvider VM..init"></a>

### BaseDataProvider VM~init()
During initialization, determines if data was provided to the component.
If no data is provided, sets the "shouldLoadData" flag to true.

**Kind**: inner method of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  
<a name="module_BaseDataProvider VM..makeViewModel"></a>

### BaseDataProvider VM~makeViewModel(Model, dataProp) ⇒ <code>DefineMap</code>
Extends the BaseDataProvider VM with the props needed to succeed.

**Kind**: inner method of [<code>BaseDataProvider VM</code>](#module_BaseDataProvider VM)  

| Param | Type | Description |
| --- | --- | --- |
| Model | <code>DefineMap</code> | A Model constructor with a static connection propery |
| dataProp | <code>String</code> | The prop used to hold the data |

