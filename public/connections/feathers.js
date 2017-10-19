import connect from 'can-connect';
import constructor from 'can-connect/constructor/constructor';
import canMap from 'can-connect/can/map/map';
import canRef from 'can-connect/can/ref/ref';
import constructorStore from 'can-connect/constructor/store/store';
import dataCallbacks from 'can-connect/data/callbacks/callbacks';
import combineRequests from 'can-connect/data/combine-requests/combine-requests';
import dataParse from 'can-connect/data/parse/parse';
import realTime from 'can-connect/real-time/real-time';
import callbacksOnce from 'can-connect/constructor/callbacks-once/callbacks-once';
// import callbacksCache from 'can-connect/data/callbacks-cache/callbacks-cache';
// import localCache from 'can-connect/data/localstorage-cache/localstorage-cache';
// import fallThroughCache from 'can-connect/fall-through-cache/fall-through-cache';
import feathersServiceBehavior from 'can-connect-feathers/service';

// import errorHandler from '../behaviors/error-handler';

const feathersConnection = function(newBehaviors, options){
  // this is custom to Glinda
  if(arguments.length === 1) {
    options = newBehaviors;
  }

  const behaviors = [
    feathersServiceBehavior,
    constructor,
    canMap,
    canRef,
    constructorStore,
    dataCallbacks,
    combineRequests,
    dataParse,
    realTime,
    callbacksOnce];

  // This must happen before the fall through cache
  // behaviors.push(errorHandler);

  // if(typeof localStorage !== "undefined") {
  //  if(!options.cacheConnection) {
  //    options.cacheConnection = connect([localCache],{
  //      name: options.name + 'Cache',
  //      idProp: options.idProp,
  //      algebra: options.algebra
  //    });
  //  }
  //  behaviors.push(callbacksCache, fallThroughCache);
  // }

  if(arguments.length === 2) {
    [].push.apply(behaviors, newBehaviors);
  }

  return connect(behaviors, options);
};

export default feathersConnection;
