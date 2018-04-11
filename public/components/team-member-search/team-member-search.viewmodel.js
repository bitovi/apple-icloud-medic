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
   * @prop allTeamMembers
   *
   * A list of all team members.
   */
  allTeamMembers: {
    Type: TeamMembers.List
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
    set(teamMembers) {
      return teamMembers.map(teamMember => ({
        title: `${teamMember.user.displayName}`,
        description: `email: ${teamMember.user.emailAddress}`,
        data: teamMember
      }));
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
   */
  handleSearchChange(e, searchQuery) {
    this.results = this.allTeamMembers.filterByQuery(searchQuery.value);
  },
  /**
   * @method handleSearchChange
   *
   * Gets a list of team members with a matching email.
   */
  handleResultSelect(e, data) {
    const teamMember = data.result.data;
    if (typeof this.onResultSelect === 'function') {
      this.onResultSelect(teamMember);
    }
  },
  /**
   * @method onResultSelect
   *
   * Handles selected result. Should be passed in from the parent component
   */
  onResultSelect: {
    type: 'any'
  },
  /**
   * @method resetSearch
   *
   * Resets search data and loading state.
   */
  resetSearch() {
    this.results = [];
    this.selectedValue = '';
  },

  isProjectAdmin: {
    type: 'boolean'
  }
});
