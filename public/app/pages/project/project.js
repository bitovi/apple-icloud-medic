import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project.viewmodel';
import { Container, Button, Grid, Message } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import NewProject from '@public/components/new-project/new-project';
import NavTabs from '@public/components/nav-tabs/nav-tabs';
import RuleCards from '@public/components/rule-cards/rule-cards';
import NewRule from '@public/components/new-rule/new-rule';
import ProjectContributors from '@public/components/project-contributors/project-contributors';

/**
 * @module ProjectPage
 * @parent components
 *
 * ProjectPage Description
 */
class ProjectPage extends Component {
  static ViewModel = ViewModel;

  tabContent() {
    const { selectedTabId, projectId, urls } = this.viewModel;

    switch (selectedTabId) {
    case 'rules':
      return (
        <Grid>
          <Grid.Column width={16}>
            <Button basic as="a" href={urls.newRule}>New Rule</Button>
          </Grid.Column>
          <Grid.Column width={16}>
            <RuleCards projectId={projectId} />
          </Grid.Column>
        </Grid>
      );
    case 'contributors':
      return (
        <Grid>
          <Grid.Column width={16}>
            <ProjectContributors projectId={projectId} />
          </Grid.Column>
        </Grid>
      );
    default:
      return <div>{selectedTabId} content coming soon!</div>;
    }
  }

  projectContent() {
    const { project, tabs, selectedTabId, toggleEdit, urls } = this.viewModel;

    return (
      <div>
        <PageHeader
          title={project.title}
          description={project.description}
          category={project.categories.length && project.categories[0].title || null}
          toggleEditFn={toggleEdit}
          backUrl={urls.projectsList}
        >
          <NavTabs tabs={tabs} selectedTabId={selectedTabId} baseUrl={urls.project} />
        </PageHeader>

        {this.tabContent()}
      </div>
    );
  }

  newProjectContent() {
    const { urls, newProjectSuccess } = this.viewModel;
    return (
      <div>
        <PageHeader title='New Project' backUrl={urls.projectsList} />
        <NewProject successCallback={newProjectSuccess} />
      </div>
    );
  }

  newRuleContent() {
    const { projectId, urls, newRuleSuccess } = this.viewModel;
    return (
      <div>
        <PageHeader title="New Rule" backUrl={urls.rulesTab} />
        <NewRule projectId={projectId} successCallback={newRuleSuccess} />
      </div>
    );
  }

  /**
   * @method render
   * @returns template
   */
  render() {
    const { projectId, tabItemId } = this.viewModel;

    let content = <p>Loading...</p>;
    if (projectId === 'new') {
      content = this.newProjectContent();
    } else if (tabItemId === 'new') {
      switch(this.viewModel.selectedTabId) {
      case 'rules':
        content = this.newRuleContent();
        break;
      default:
        content = <Message error>Unrecognized tab name</Message>;
      }
    } else if (this.viewModel.project) {
      content = this.projectContent();
    }

    return (
      <Container fluid>
        {content}
      </Container>
    );
  }
}

export default ProjectPage;
