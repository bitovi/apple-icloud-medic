import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/packs`;

const definitions = {
  id: 'string',
  ref: 'string',
  uid: 'string',
  name: 'string',
  description: 'string',
  author: 'string',
  email: 'string',
  version: 'string',
  system: { type: 'any', default: () => ({}) },
  files: { type: 'any', default: () => [] },
  keywords: { type: 'any', default: () => [] },
  dependencies: { type: 'any', default: () => [] },
  contributors: { type: 'any', default: () => [] }
};

/**
 * Packs model.
 * @module models/packs
 * @class
 * Defines the Packs model
 */
const Packs = DefineMap.extend('Packs', definitions);
// Used by the EditForm component
Packs.definitions = definitions;

/**
 * Packs.List model.
 * @class
 * Defines a collection of Packs
 */
Packs.List = DefineList.extend('Packs.List', {
  '#': Packs
});

const algebra = makeAlgebra({
  id(serverVal, setVal) {
    if (typeof setVal === 'object') {
      if (setVal.$in) {
        return setVal.$in.indexOf(serverVal) > -1;
      }
      if (setVal.$notin) {
        return setVal.$notin.indexOf(serverVal) === -1;
      }
    }
    return true;
  }
});

/**
 * Packs.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
Packs.connection = feathersConnection({
  url,
  Map: Packs,
  List: Packs.List,
  name: 'packs',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Packs;
