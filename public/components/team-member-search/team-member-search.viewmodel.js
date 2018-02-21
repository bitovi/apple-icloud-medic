import DefineMap from 'can-define/map/map';
import TeamMembers from '@public/models/team-members/team-members';

/**
 * @module TeamMemberSearch VM
 * @parent TeamMemberSearch
 *
 * TeamMemberSearch View Model
 */
export default DefineMap.extend('TeamMemberSearch', {
  /**
   * @prop teamId
   *
   * The teamId used to find a member of that team.
   */
  teamId: {
    type: 'number'
  },
  /**
   * @prop results
   *
   * The results formatted to be displayed below the search input.
   * Learn more about the options here:
   * https://react.semantic-ui.com/modules/search#search-example-standard
   */
  results: {
    type: 'array',
    set(v) {
      return v.map(data => {
        return {
          title: `${data.nickName} ${data.lastName}`,
          description: `email: ${data.userId}`,
          data: data
        };
      });
    }
  },
  /**
   * @prop selectedValue
   *
   * The selected result
   */
  selectedValue: {
    type: 'string'
  },
  /**
   * @method handleSearchChange
   *
   * Gets a list of team members with a matching email.
   *
   */
  handleSearchChange(e, searchQuery) {
    TeamMembers.getList({
      teamId: this.teamId
    }).then((data) => {
      if (data.length) {
        this.results = data.findTeamMemberByUserId(searchQuery.value);
      }
    }).catch(err => {
      throw err;
    });
  },
  /**
   * @method handleResultSelect
   *
   * Handles selected result. Should be passed in from the parent component
   */
  handleResultSelect: {
    type: 'any'
  },
  /**
   * @method resetSearch
   *
   * Resets search data and loading state.
   */
  resetSearch() {
    this.results = [];
    this.value = '';
  },
  isProjectAdmin: {
    type: 'boolean'
  }
});
