import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/triggers`;

const definitions = withCommonFields({
  name: 'string',
  description: 'string'
});

/**
 * Triggers model.
 * @module models/triggers
 * @class
 * Defines the Triggers model and its associated properties
 */
const Triggers = DefineMap.extend('Triggers', definitions);
// Used by the EditForm component
Triggers.definitions = definitions;

/**
 * Triggers.List model.
 * @class
 * Defines a collection of Triggers
 */
Triggers.List = DefineList.extend('Triggers.List', {
  '#': Triggers
});

const algebra = makeAlgebra({});

/**
 * Triggers.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
Triggers.connection = feathersConnection({
  url,
  Map: Triggers,
  List: Triggers.List,
  name: 'triggers',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Triggers;
