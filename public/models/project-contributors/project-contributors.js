import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from '@public/models/algebras/feathers';
import UserModel from '@public/models/user';

const url = `${env.API_BASE_URI}/project-contributors`;

const definitions = withCommonFields({
  id: 'number',
  projectId: 'number',
  personId: 'number',
  permissions: 'string',
  user: { Type: UserModel }
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
  isProjectAdmin(personId){
    return this.reduce((contributor, isFound) => {
      if (!isFound) return contributor.personId === personId;
      return !!isFound;
    }, false);
  }
});

const algebra = makeAlgebra({
  teamId() {
    // "teamId" is not part of the contributor but is required by
    // the server in order to be able to load/sync group members.
    // This tells can-set not to use "teamId" in its comparrison logic.
    return true;
  }
});

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
