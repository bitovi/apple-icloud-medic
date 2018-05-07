import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/triggertypes`;

const definitions = {
  id: 'string',
  name: 'string',
  description: 'string',
  uid: 'string',
  ref: 'string',
  pack: 'string',
  parameters_schema: { type: 'any', default: () => ({}) },
  tags: { type: 'any', default: () => ([]) },
  payload_schema: { type: 'any', default: () => ({}) }
};

/**
 * TriggerTypes model.
 * @module models/triggertypes
 * @class
 * Defines the TriggerTypes model and its associated properties
 */
const TriggerTypes = DefineMap.extend('TriggerTypes', definitions);
// Used by the EditForm component
TriggerTypes.definitions = definitions;

/**
 * TriggerTypes.List model.
 * @class
 * Defines a collection of TriggerTypes
 */
TriggerTypes.List = DefineList.extend('TriggerTypes.List', {
  '#': TriggerTypes
});

const algebra = makeAlgebra({});

/**
 * TriggerTypes.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
TriggerTypes.connection = feathersConnection({
  url,
  Map: TriggerTypes,
  List: TriggerTypes.List,
  name: 'triggertypes',
  algebra,
  feathersService: feathersClient.service(url)
});

export default TriggerTypes;
