import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-card.viewmodel.js';
import { Card, Label, Icon, StyledCard } from '@public/semantic-ui/index';
import route from 'can-route-pushstate';

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

    if (!project) {
      return <p>Loading project...</p>;
    }

    const url = route.url({ teamName: route.data.teamName, projectId: project.id });

    return (
      <StyledCard bgColor='#56c0b2'>
        <Card.Header>
          <a href={url}>{project.title}</a>
          { isEditing ?
            <Icon name='close' onClick={(e) => this.viewModel.handleRemove(e, project)}/>
            : null
          }
        </Card.Header>
        <Card.Content>
          <Card.Description>{project.description}</Card.Description>
          <Label.Group>
            <Label>{project.rules.length} rules</Label>
            <Label>{project.contributions.length} contributions</Label>
            {project.category ?
              <Label>{project.category}</Label>
              : null}
          </Label.Group>
        </Card.Content>
      </StyledCard>
    );
  }
}

ProjectCard.ViewModel = ViewModel;

export default ProjectCard;
