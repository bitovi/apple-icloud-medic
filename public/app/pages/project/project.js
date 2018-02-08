import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';
import ViewModel from './project.viewmodel';
import { Container } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import NewProject from '@public/components/new-project/new-project';
import NavTabs from '@public/components/nav-tabs/nav-tabs';
import RuleCards from '@public/components/rule-cards/rule-cards';

/**
 * @module ProjectPage
 * @parent components
 *
 * ProjectPage Description
 */
class ProjectPage extends Component {
  static ViewModel = ViewModel;

  /**
   * @method render
   * @returns template
   */
  render() {
    const { projectId, tabs, toggleEdit } = this.viewModel;
    // TODO: put on VM
    const backUrl = route.url({ teamName: route.data.teamName, moduleId: PAGES.projects });
    const baseUrl = route.url({ teamName: route.data.teamName, projectId: route.data.projectId });
    const selectedTabId = route.data.tabId || 'rules';

    let content = <p>Loading...</p>;
    if (projectId === 'new') {
      content = <div>
        <PageHeader
          title='New Project'
          backUrl={backUrl}
        />
        <NewProject />
      </div>;
    } else {
      const { project } = this.viewModel;
      if (project) {
        content = <div>
          <PageHeader
            title={project.title}
            description={project.description}
            category={project.categories.length ? project.categories[0].title : null}
            toggleEditFn={toggleEdit}
            backUrl={backUrl}
          >
            <NavTabs
              tabs={tabs}
              selectedTabId={selectedTabId}
              baseUrl={baseUrl}
            />
          </PageHeader>
          {(() => {
            switch (selectedTabId) {
            case 'rules':
              return <RuleCards projectId={projectId} />;
            default:
              return <div>Content coming soon!</div>;
            }
          })()}
        </div>;
      }
    }

    return (
      <Container fluid>
        {content}
      </Container>
    );
  }
}

export default ProjectPage;
