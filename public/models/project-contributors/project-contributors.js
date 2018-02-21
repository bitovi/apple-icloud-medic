import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from '@public/models/algebras/feathers';

const url = `${env.API_BASE_URI}/project-contributors`;

const definitions = withCommonFields({
  projectId: 'number',
  userId: 'string',
  permissions: {
    type: 'string',
    set(value) {
      return value.toLowerCase();
    }
  },
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
  '#': ProjectContributors,
  isProjectAdmin(userId){
    return this.reduce((contributor, isFound) => {
      if (!isFound) return contributor.userId === userId;
      return !!isFound;
    }, false);
  }
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
