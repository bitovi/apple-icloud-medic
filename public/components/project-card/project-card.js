import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-card.viewmodel.js';
import { Card, Label, Icon, StyledCard } from '@public/semantic-ui/index';

/**
 * @module ProjectCard
 * @parent components
 *
 * ProjectCard renders a single card view for a project
 */
class ProjectCard extends Component {

  /**
   * @method render
   * @returns styled card template
   */
  render() {
    const { project, isEditing } = this.viewModel;
    if (project) {
      return (
        <StyledCard bgColor='#01C5BB'>
          <StyledCard.Header> {project.title}
            { isEditing ?
              <Icon name='close' onClick={(e) => this.viewModel.handleRemove(e, project)}/>
              : null
            }
          </StyledCard.Header>
          <Card.Content> {project.description} </Card.Content>
          <Card.Content extra>
            <Label fontColor='#01C5BB'>{project.rules.length} rules</Label>
            <Label fontColor='#01C5BB'>{project.contributions.length} contributions</Label>
            <Label fontColor='#01C5BB'>{project.category}</Label>
          </Card.Content>
        </StyledCard>
      );
    } else {
      return <p> Loading... </p>;
    }
  }
}

ProjectCard.ViewModel = ViewModel;

export default ProjectCard;
