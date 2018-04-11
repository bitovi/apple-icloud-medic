import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './team-member-search.viewmodel.js';
import { Search } from '@public/semantic-ui/index';
import DataProvider from '@public/components/data-provider/data-provider';
import TeamMembers from '@public/models/team-members/team-members';

/**
 * @module TeamMemberSearch
 * @parent components
 *
 * TeamMemberSearch searches the Apple Directory for members of a group.
 */
class TeamMemberSearch extends Component {
  static ViewModel = ViewModel;

  render() {
    const { selectedValue, results, isProjectAdmin } = this.viewModel;
    const { handleSearchChange, handleResultSelect } = this.viewModel;

    return (
      <Search
        value={selectedValue}
        results={results}
        placeholder="Search for a teammate"
        onSearchChange={handleSearchChange}
        onResultSelect={handleResultSelect}
        disabled={!isProjectAdmin}
      />
    );
  }
}

export default DataProvider(TeamMemberSearch, TeamMembers, 'allTeamMembers');
