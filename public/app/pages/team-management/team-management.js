import React from 'react';
import Component from 'react-view-model/component';
import TeamsModel from '@public/models/teams';
import DataProvider from '@public/components/data-provider/data-provider';
import TeamsAccordion from '@public/components/teams-accordion/teams-accordion';
import PageHeader from '@public/components/page-header/page-header';
import EditTeamModal from '@public/components/edit-team-modal/edit-team-modal';
import { Container } from '@public/semantic-ui/index';
import ViewModel from './team-management.viewmodel';

/**
 * @module Team Management Page
 * @parent pages
 *
 * Medic admins can add teams, manage team information, and see members of the
 * associated directory services group on this page.
 */
class TeamManagementPage extends Component {
  static ViewModel = ViewModel;

  render() {
    const { teams } = this.viewModel;

    return (
      <Container fluid>
        <PageHeader
          title='Manage Teams'
          ActionButtonComponent={<EditTeamModal isNew='true'/>}
        >
        </PageHeader>
        <TeamsAccordion teams={teams} />
      </Container>
    );
  }
}

export default DataProvider(TeamManagementPage, TeamsModel, 'teams');
