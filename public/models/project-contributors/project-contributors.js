import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from '@public/models/algebras/feathers';

const url = `${env.API_BASE_URI}/contributors`;

const definitions = withCommonFields({
  name: 'string',
  avatarUrl: 'string',
  permissions: 'string',
  projectId: 'number',
  userId: 'number'
});

/**
 * ProjectContributors model.
 * @module models/project-contributors
 * @class
 * Defines the ProjectContributors model and its associated properties
 */
const ProjectContributors = DefineMap.extend('ProjectContributors', definitions);
ProjectContributors.definitions = definitions;

/**
 * ProjectContributors.List model.
 * @class
 * Defines a collection of ProjectContributors associated with a projectId
 */
ProjectContributors.List = DefineList.extend('ProjectContributors.List', {
  '#': ProjectContributors
});

const algebra = makeAlgebra({});

/**
 * ProjectContributors.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
ProjectContributors.connection = feathersConnection({
  url,
  Map: ProjectContributors,
  List: ProjectContributors.List,
  name: 'project-contributors',
  algebra,
  feathersService: feathersClient.service(url)
});

export default ProjectContributors;
