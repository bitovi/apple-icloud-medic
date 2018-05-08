import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/actions`;

const definitions = {
  id: 'string',
  name: 'string',
  description: 'string',
  uid: 'string',
  ref: 'string',
  pack: 'string',
  enabled: 'boolean',
  entry_point: 'string',
  runner_type: 'string',
  notify: { type: 'any', default: () => ({}) },
  tags: { type: 'any', default: () => ([]) },
  parameters: { type: 'any', default: () => ({}) }
};

/**
 * Actions model.
 * @module models/actions
 * @class
 * Defines the Actions model and its associated properties
 */
const Actions = DefineMap.extend('Actions', definitions);
// Used by the EditForm component
Actions.definitions = definitions;

/**
 * Actions.List model.
 * @class
 * Defines a collection of Actions
 */
Actions.List = DefineList.extend('Actions.List', {
  '#': Actions
});

const algebra = makeAlgebra({});

/**
 * Actions.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
Actions.connection = feathersConnection({
  url,
  Map: Actions,
  List: Actions.List,
  name: 'actions',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Actions;
