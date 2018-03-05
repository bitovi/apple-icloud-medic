import makeDebug from 'debug';
import ObservationRecorder from 'can-observation-recorder';
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
   * @prop id
   */
  id: 'any',
  /**
   * Optional query used in the GET request
   * @prop id
   */
  query: 'observable',
  /**
   * Determines whether or not this component should load data.
   * This is crucial to how this component works: it allows a parent
   * component to provide the data, thus skipping the loading logic.
   * See the init() method below.
   *
   * @prop shouldLoadData
   */
  shouldLoadData: {
    type: 'boolean',
    default: false
  },
  /** @prop error */
  error: {
    get(lastSet, setVal) {
      if (this.shouldLoadData) {
        this.dataPromise.catch(setVal);
      }
      return lastSet;
    }
  },
  /**
   * Determines whether or not this should load a single object (by id).
   *
   * @prop isSingleObject
   */
  get isSingleObject() {
    return !!this.id || (this.query && this.query.id && typeof this.query.id !== 'object');
  },
  /** @prop isLoading */
  get isLoading() {
    return this.shouldLoadData && !this[this.dataProp] && !this.error;
  },
  /**
   * Calls get() or getList() accordingly.
   * Note: If "shouldLoadData" is false, this intentionally returns "undefined".
   * Anything accessing this property should first check "shouldLoadData"
   * before reading this property. This is done intentionally as this module
   * should should never load data if it is provided from a parent component.
   *
   * @prop dataPromise
   */
  get dataPromise() {
    if (this.shouldLoadData) {
      if (this.isSingleObject) {
        // TODO: get id prop from connection
        debug(`Loading ${this.dataProp} with id:`, this.id || this.query.id);
        return this.connection.get(Object.assign({ id: this.id }, this.query));
      }
      debug(`Loading ${this.dataProp} with query:`, this.query);
      return this.connection.getList(this.query);
    }
  },
  /**
   * During initialization, determines if data was provided to the component.
   * If no data is provided, sets the "shouldLoadData" flag to true.
   */
  init() {
    // Parent components may still be listening...
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
   * @prop dataProp
   */
  dataProp: { type: 'string', default: dataProp },
  /**
   * The connection used for loading data.
   * Should implement get() and/or getList() methods.
   * @prop connection
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
          debug(`Loaded ${this.dataProp} data`);
          return data;
        }).then(resolve);
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
