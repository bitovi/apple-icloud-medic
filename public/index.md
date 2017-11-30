@page medic

# medic

## Useful Patterns

### Data Promises & Loaders

Here is a good pattern for getting data from a model (Promise).

* Create two properties: `items` and `itemsPromise`

    ```
	itemsPromise: {
		type: 'any',
		get(lastSetVal, setVal){
		  return ItemsModel.getList({});
		}
	},
	items: {
		value: function(){
		  return [];
		},
		get(lastSetVal, setVal){
		  this.itemsPromise.then(items => setVal);
		  return lastSetVal;
		}
	},
    ```

* Create an `isLoading` property to correspond to the `itemsPromise`, and set the value in the `getter`

    ```
	isLoading: {
		type: 'boolean',
		value: () => { return false },
		get(lastSetVal, setVal){
		  this.itemsPromise.then(() => {
		    setVal(false);
		  });
		  return true;
		}
	},
    ```
