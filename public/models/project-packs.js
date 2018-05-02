import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { ID_FIELD } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';
import ProjectsModel from './projects';
import PacksModel from './projects';

const url = `${env.API_BASE_URI}/project-packs`;

const definitions = Object.assign({}, ID_FIELD, {
  projectId: 'number',
  packId: 'string',
  project: { Type: ProjectsModel },
  pack: { Type: PacksModel }
});

/**
 * ProjectPacks model.
 * @module models/rules
 * @class
 * Defines the ProjectPacks model and its associated properties
 */
const ProjectPacks = DefineMap.extend('ProjectPacks', definitions);
// Used by the EditForm component
ProjectPacks.definitions = definitions;

/**
 * ProjectPacks.List model.
 * @class
 * Defines a collection of ProjectPacks
 */
ProjectPacks.List = DefineList.extend('ProjectPacks.List', {
  '#': ProjectPacks
});

const algebra = makeAlgebra({});

/**
 * ProjectPacks.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
ProjectPacks.connection = feathersConnection({
  url,
  Map: ProjectPacks,
  List: ProjectPacks.List,
  name: 'rules',
  algebra,
  feathersService: feathersClient.service(url)
});

export default ProjectPacks;
