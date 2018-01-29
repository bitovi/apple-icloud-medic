import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/projects`;

/**
 * Projects model.
 * @module models/projects
 * @class
 * Defines the Projects model and its associated properties
 */
const Projects = DefineMap.extend('Projects', {}, {
  /* PROTOTYPE */
  id: 'number',
  description: 'string',
  title: 'string',
  rules: 'any',
  categories: 'any',
  contributions: 'any'
});

/**
 * Projects.List model.
 * @class
 * Defines a collection of Projects
 */
Projects.List = DefineList.extend('Projects.List', {
  '#': Projects
});

const algebra = makeAlgebra({});

/**
 * Projects.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
Projects.connection = feathersConnection({
  url,
  Map: Projects,
  List: Projects.List,
  name: 'projects',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Projects;
