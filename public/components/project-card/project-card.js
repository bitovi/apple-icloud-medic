import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
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
    const { project, isEditing, handleRemove } = this.viewModel;

    if (!project) {
      return <p>Loading project...</p>;
    }

    const url = route.url({ teamName: route.data.teamName, projectId: project.id });

    return (
      <StyledCard bgColor='#56c0b2' detailUrl={isEditing ? null : url}>
        <Card.Header>
          { isEditing ?
            <Icon name='close' onClick={handleRemove} className="floatRight"/>
            : null
          }
          {project.title}
        </Card.Header>
        <Card.Content>
          <Card.Description>{project.description}</Card.Description>
          <Label.Group>
            <Label>{project.rules.length} rules</Label>
            <Label>{project.contributions.length} contributions</Label>
            {project.categories.length ?
              <Label>{project.categories[0].title}</Label>
              : null}
          </Label.Group>
        </Card.Content>
      </StyledCard>
    );
  }
}

ProjectCard.ViewModel = ViewModel;

export default ProjectCard;
