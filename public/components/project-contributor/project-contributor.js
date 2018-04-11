import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributor.viewmodel.js';
import { userHasPermission } from '@public/util/view-helpers';
import DataProvider from '@public/components/data-provider/data-provider';
import ProjectContributorsModel from '@public/models/project-contributors/project-contributors';
import { Dropdown, Icon, ContribSegment } from '@public/semantic-ui/index';

/**
 * @module ProjectContributor
 * @parent components
 *
 * ProjectContributor renders a single segment view for the project contributor view
 */
class ProjectContributor extends Component {
  static ViewModel = ViewModel;

  userInfo() {
    const { user } = this.viewModel.contributor;
    return (
      <ContribSegment>
        <div> {user.nickName || user.firstName} {user.lastName} </div>
        <div> {user.emailAddress} </div>
      </ContribSegment>
    );
  }

  adminBlock() {
    const { contributor, handleRemove, permissionOptions, handlePermissionsChange } = this.viewModel;
    return (
      <ContribSegment align="right">
        <Dropdown defaultValue={contributor.permissions} selection options={permissionOptions} onChange={handlePermissionsChange}/>
        <Icon name="delete" onClick={handleRemove}/>
      </ContribSegment>
    );
  }

  render() {
    const { contributor, isProjectAdmin } = this.viewModel;
    return (
      <ContribSegment.Group horizontal key={contributor.id}>
        { contributor.user ?
          this.userInfo() :
          <ContribSegment>User not populated on contributor (personId: {contributor.personId})</ContribSegment>
        }
        { contributor.user && (isProjectAdmin || userHasPermission('project-contributors', 'update')) &&
          this.adminBlock()
        }
      </ContribSegment.Group>
    );
  }
}

export default DataProvider(ProjectContributor, ProjectContributorsModel, 'contributor');
