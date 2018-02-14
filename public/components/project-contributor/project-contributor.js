import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributor.viewmodel.js';
import { listAsArray } from '@public/util/view-helpers';
import { Dropdown, Icon, Image, Segment, StyledSegment } from '@public/semantic-ui/index';

/**
 * @module ProjectContributor
 * @parent components
 *
 * ProjectContributor Description
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
      <StyledSegment className="contributor-details">
        <Image src={contributor.avatarUrl} avatar />
        <span> {contributor.name} </span>
      </StyledSegment>
      <StyledSegment align="right">
        <Dropdown placeholder={contributor.permissions} selection options={listAsArray(permissionOptions)} onChange={handlePermissionsChange}/>
        <Icon name="delete" onClick={handleRemove}/>
      </StyledSegment>
    </Segment.Group>);
  }
}

ProjectContributor.ViewModel = ViewModel;

export default ProjectContributor;
