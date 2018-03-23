import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';
import DataProvider from '@public/components/data-provider/data-provider';
import TeamMembers from '@public/models/team-members/team-members';
import { TeamMemberRow } from './partials';

/**
 * @module TeamMembersList
 * @parent components
 *
 * Displays a list of users belonging to the same team / directory services group.
 */
const TeamMembersList = ({ teamMembers }) => {
  return (
    <Segment.Group>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMemberRow key={teamMember.userId} horizontal>
              <Segment>{`${teamMember.firstName} ${teamMember.lastName}`}</Segment>
              <Segment>{teamMember.emailAddress}</Segment>
              <Segment><Label horizontal color='grey'>{teamMember.permissions || 'No Permissions'}</Label></Segment>
            </TeamMemberRow>
          );
        })
      }
    </Segment.Group>
  );
};

TeamMembersList.propTypes = {
  teamMembers: PropTypes.object.isRequired
};

export default DataProvider(TeamMembersList, TeamMembers, 'teamMembers');
