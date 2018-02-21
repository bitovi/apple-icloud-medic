import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributor.viewmodel.js';
import { listAsArray } from '@public/util/view-helpers';
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

  render() {
    const { contributor, handleRemove, permissionOptions, handlePermissionsChange, isProjectAdmin } = this.viewModel;

    return (
      <ContribSegment.Group horizontal key={contributor.id}>
        <ContribSegment>
          <div> {contributor.nickName || contributor.firstName} {contributor.lastName} </div>
          <div> {contributor.emailAddress} </div>
        </ContribSegment>
        { isProjectAdmin &&
          (<ContribSegment align="right">
            <Dropdown placeholder={contributor.permissions} selection options={listAsArray(permissionOptions)} onChange={handlePermissionsChange}/>
            <Icon name="delete" onClick={handleRemove}/>
          </ContribSegment>)
        }
      </ContribSegment.Group>
    );
  }
}

export default DataProvider(ProjectContributor, ProjectContributorsModel, 'contributor');
