import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/rules`;

const definitions = withCommonFields({
  projectId: 'number',
  title: 'string',
  description: 'string',
  enabled: 'boolean',
  tags: 'any'
});

/**
 * Rules model.
 * @module models/rules
 * @class
 * Defines the Rules model and its associated properties
 */
const Rules = DefineMap.extend('Rules', definitions);
// Used by the EditForm component
Rules.definitions = definitions;

/**
 * Rules.List model.
 * @class
 * Defines a collection of Rules
 */
Rules.List = DefineList.extend('Rules.List', {
  '#': Rules
});

const algebra = makeAlgebra({});

/**
 * Rules.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
Rules.connection = feathersConnection({
  url,
  Map: Rules,
  List: Rules.List,
  name: 'rules',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Rules;
