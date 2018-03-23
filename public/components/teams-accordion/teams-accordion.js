import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './teams-accordion.viewmodel.js';
import { Accordion, Segment } from 'semantic-ui-react';
import TeamMembersList from '@public/components/team-members-list/team-members-list';
import EditTeamModal from '@public/components/edit-team-modal/edit-team-modal';
import { ComponentWrapper } from './partials/styled';
import DataProvider from '@public/components/data-provider/data-provider';
import Teams from '@public/models/teams';

/**
 * @module TeamsAccordion
 * @parent components
 *
 * Teams Accordion component displays teams and their members
 * as well as enables editing team data.
 */
class TeamsAccordion extends Component {
  /**
   * @method render
   */
  render() {
    const { teams, handleClick, activeIndex } = this.viewModel;
    return (
      <ComponentWrapper styled fluid>
        {teams.map((team, index) => {
          return (
            <div key={index}>
              <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
                {team.name}
                <EditTeamModal isNew='false' floatedButton='right' team={team}/>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <TeamMembersList query={{teamId: team.id}} teamMembers={team.teamMembers}></TeamMembersList>
              </Accordion.Content>
            </div>
          );
        })}
      </ComponentWrapper>
    );
  }
}

const AddTeamsComponent = () => (
  <Segment align='center'>
    <p> No teams added </p>
    <EditTeamModal isNew='true' />
  </Segment>
);

TeamsAccordion.ViewModel = ViewModel;

export default DataProvider(TeamsAccordion, Teams, 'teams',  {
  'NoDataStateComponent': AddTeamsComponent
});
