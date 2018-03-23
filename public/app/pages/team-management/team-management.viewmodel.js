import DefineMap from 'can-define/map/map';
import TeamsModel from '@public/models/teams';

/**
 * @module Team-Management VM
 * @parent Team-Management
 *
 * Team-Management View Model
 */
const TeamManagement = DefineMap.extend('TeamManagement', {
  /**
   * The list of teams associated with the user.
   */
  teams: {
    Type: TeamsModel.List,
  }
});

export default TeamManagement;
