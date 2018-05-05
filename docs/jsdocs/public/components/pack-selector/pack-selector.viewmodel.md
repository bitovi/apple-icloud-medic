<a name="module_PackSelector VM"></a>

## PackSelector VM
**Parent**: PackSelector

PackSelector View Model  

* [PackSelector VM](#module_PackSelector VM)
    * [~itemsPerRow](#module_PackSelector VM..itemsPerRow)
    * [~selectedPackIds](#module_PackSelector VM..selectedPackIds)
    * [~multiple](#module_PackSelector VM..multiple)
    * [~packs](#module_PackSelector VM..packs)
    * [~onSelect](#module_PackSelector VM..onSelect)
    * [~isPackSelected()](#module_PackSelector VM..isPackSelected)
    * [~handleSelect()](#module_PackSelector VM..handleSelect)
    * [~addNewPacks()](#module_PackSelector VM..addNewPacks)

<a name="module_PackSelector VM..itemsPerRow"></a>

### PackSelector VM~itemsPerRow
number of items per row

**Kind**: inner property of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..selectedPackIds"></a>

### PackSelector VM~selectedPackIds
dictionary of selected pack IDs

**Kind**: inner property of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..multiple"></a>

### PackSelector VM~multiple
whether or not to allow multiple selections

**Kind**: inner property of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..packs"></a>

### PackSelector VM~packs
list of packs which can be selected

**Kind**: inner property of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..onSelect"></a>

### PackSelector VM~onSelect
Passed from above

**Kind**: inner property of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..isPackSelected"></a>

### PackSelector VM~isPackSelected()
Whether or not the given pack has been selected

**Kind**: inner method of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..handleSelect"></a>

### PackSelector VM~handleSelect()
handles the "select" event of individual pack items

**Kind**: inner method of [<code>PackSelector VM</code>](#module_PackSelector VM)  
<a name="module_PackSelector VM..addNewPacks"></a>

### PackSelector VM~addNewPacks()
adds new packs onto the existing array

**Kind**: inner method of [<code>PackSelector VM</code>](#module_PackSelector VM)  
