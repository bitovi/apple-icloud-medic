import makeDebug from 'debug';
import ObservationRecorder from 'can-observation-recorder';
import stringify from 'fast-stable-stringify';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

const debug = makeDebug('medic:components:data-provider');

/**
 * @module BaseDataProvider VM
 * @parent Components
 *
 * BaseDataProvider ViewModel - the should be extended for use
 * in the data-provider component. See the data-provider component
 * and story for details.
 */
const BaseDataProvider = DefineMap.extend('BaseDataProvider', {
  /**
   * Optional id of the the object to load.
   */
  id: 'any',
  /**
   * Optional query used in the GET request
   */
  query: {
    get(lastVal) {
      return lastVal && lastVal.serialize ? lastVal.serialize() : lastVal;
    }
  },
  /**
   * Determines whether or not this component should load data.
   * This is crucial to how this component works: it allows a parent
   * component to provide the data, thus skipping the loading code.
   * See the init() method below.
   */
  shouldLoadData: {
    type: 'boolean',
    default: false
  },
  /**
   * Whether or not this is represents a single object (by id).
   */
  isSingleObject: {
    get() {
      if (this.shouldLoadData) {
        // Users can pass an "id" on the query object. However, if the user
        // passes an object, treat it as a getList (eg. id: { $in [123, 456] })
        return !!this.id || (this.query && this.query.id && typeof this.query.id !== 'object');
      }
      const data = this[this.dataProp];
      return !(data instanceof DefineList);
    }
  },
  /**
   * Whether or not data is loading
   */
  isLoading: {
    type: 'boolean',
    get() {
      return this.shouldLoadData && !this[this.dataProp] && !this.error;
    }
  },
  /**
   * The error object with a message property
   */
  error: {
    type: 'any',
    get(lastSet, setVal) {
      if (this.shouldLoadData) {
        this.dataPromise.catch(setVal);
      }
      return lastSet;
    }
  },
  /**
   * Message to display when there is no data
   */
  noData: {
    type: 'string',
    get(lastVal, setVal) {
      const fn = (data) => {
        if (!this.isSingleObject && !data.length) {
          debug(`No ${this.dataProp} to display for query:`, this.query, data);
          setVal(`There are no ${this.dataProp} to display.`);
        }
      };
      if (this.shouldLoadData) {
        this.dataPromise.then(fn);
        return null;
      }
      return fn(this[this.dataProp]);
    }
  },
  /**
   * Whether or not this should memoize the result.
   */
  memoize: {
    type: 'boolean',
    default: false
  },
  /**
   * Promise cache used for memoization, keyed by the stringified query
   */
  promiseCache: {
    type: 'any',
    default: () => ({})
  },
  /**
   * Calls get() or getList() accordingly.
   * Note: If "shouldLoadData" is false, this intentionally returns "undefined".
   * Anything accessing this property should first check "shouldLoadData"
   * before reading this property. This is done intentionally as this module
   * should should never load data if data is provided from a parent component.
   */
  dataPromise: {
    get() {
      if (this.shouldLoadData) {
        let fn, query;
        if (this.isSingleObject) {
          fn = 'get';
          query = Object.assign({ [this.connection.idProp]: this.id }, this.query);
        } else {
          fn = 'getList';
          query = this.query;
        }

        debug(`Loading ${this.dataProp} with query:`, query);
        if (this.memoize) {
          const key = stringify(query);
          if (!this.promiseCache[key]) {
            this.promiseCache[key] = this.connection[fn](query);
          }
          return this.promiseCache[key];
        }
        return this.connection[fn](query);
      }
    }
  },
  /**
   * During initialization, determines if data was provided to the component.
   * If no data is provided, sets the "shouldLoadData" flag to true.
   */
  init() {
    // Init happens before the component is "listening".
    // However, parent components may still be listening... so ignore
    ObservationRecorder.ignore(() => {
      if (!this[this.dataProp]) {
        this.shouldLoadData = true;
      }
    })();
  }
});

/**
 * Extends the BaseDataProvider VM with the props needed to succeed.
 *
 * @param  {DefineMap} Model    A Model constructor with a static connection propery
 * @param  {String} dataProp    The prop used to hold the data
 * @return {DefineMap}
 */
const makeViewModel = (Model, dataProp = 'data') => BaseDataProvider.extend({
  /**
   * The name of the property which will hold the loaded data.
   */
  dataProp: { type: 'string', default: dataProp },
  /**
   * The connection used for loading data.
   * Should implement get() and/or getList() methods.
   */
  connection: { type: 'any', default: () => Model.connection },
  /**
   * This is the property which will hold the data.
   */
  [dataProp]: {
    get(lastVal, resolve) {
      if (this.shouldLoadData) {
        debug(`About to load ${this.dataProp} data`);
        this.dataPromise.then(data => {
          debug(`Loaded ${this.dataProp} data:`, data);
          resolve(data);
        });
        return null;
      }
      return lastVal;
    },
    set(val) {
      if (val && !(val instanceof DefineMap) && !(val instanceof DefineList)) {
        return Array.isArray(val) ? new Model.List(val) : new Model(val);
      }
      return val;
    }
  }
});

export { makeViewModel };
