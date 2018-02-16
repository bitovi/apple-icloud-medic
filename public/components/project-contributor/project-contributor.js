import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributor.viewmodel.js';
import { listAsArray } from '@public/util/view-helpers';
import { Dropdown, Icon, Image, Segment } from '@public/semantic-ui/index';

/**
 * @module ProjectContributor
 * @parent components
 *
 * ProjectContributor renders a single segment view for the project contributor view
 */
class ProjectContributor extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const { contributor, handleRemove, permissionOptions, handlePermissionsChange } = this.viewModel;
    if (!contributor) {
      return <p>Loading contributor...</p>;
    }
    return (<Segment.Group horizontal>
      <Segment className="contributor-details">
        <Image src={contributor.avatarUrl} avatar />
        <span> {contributor.name} </span>
      </Segment>
      <Segment align="right">
        <Dropdown placeholder={contributor.permissions} selection options={listAsArray(permissionOptions)} onChange={handlePermissionsChange}/>
        <Icon name="delete" onClick={handleRemove}/>
      </Segment>
    </Segment.Group>);
  }
}

ProjectContributor.ViewModel = ViewModel;

export default ProjectContributor;
