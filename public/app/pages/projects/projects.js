import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import Projects from '@public/components/projects/projects';

/**
 * @module ProjectsPage
 * @parent pages
 *
 * Projects Page
 */
class ProjectsPage extends Component {
  /**
   * @method render
   * @returns Projects page template
   */
  render() {
    return (
      <div className='projects-page'>
        <Projects />
      </div>
    );
  }
}

ProjectsPage.ViewModel = DefineMap.extend('ProjectsPage', {});

export default ProjectsPage;
