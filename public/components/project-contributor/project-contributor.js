import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributor.viewmodel.js';
import { listAsArray } from '@public/util/view-helpers';
import { Dropdown, Icon, Image, Segment } from '@public/semantic-ui/index';
import DataProvider from '@public/components/data-provider/data-provider';
import ProjectContributorsModel from '@public/models/project-contributors/project-contributors';

/**
 * @module ProjectContributor
 * @parent components
 *
 * ProjectContributor renders a single segment view for the project contributor view
 */
class ProjectContributor extends Component {
  static ViewModel = ViewModel;

  render() {
    const { contributor, handleRemove, permissionOptions, handlePermissionsChange } = this.viewModel;

    return (
      <Segment.Group horizontal>
        <Segment className="contributor-details">
          <Image src={contributor.avatarUrl} avatar />
          <span> {contributor.name} </span>
        </Segment>
        <Segment align="right">
          <Dropdown placeholder={contributor.permissions} selection options={listAsArray(permissionOptions)} onChange={handlePermissionsChange}/>
          <Icon name="delete" onClick={handleRemove}/>
        </Segment>
      </Segment.Group>
    );
  }
}

export default DataProvider(ProjectContributor, ProjectContributorsModel, 'contributor');
