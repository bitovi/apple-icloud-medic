import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project.viewmodel';
import { Container, Button, Grid } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import PageTabs from '@public/app/page-tabs/page-tabs';
import NewProject from '@public/components/new-project/new-project';
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

  constructor() {
    super();
    this.renderTab = this.renderTab.bind(this);
  }

  /**
   * Renders individual tab panes
   * @param  {String} tabKey
   * @return {React.Element}
   */
  renderTab(tabKey) {
    switch (tabKey) {
    case 'rules':
      return this.rulesContent();
    case 'contributors':
      return this.contributorsContent();
    default:
      return <div>{tabKey} content coming soon!</div>;
    }
  }

  /**
   * Renders the main content for the "project" page
   */
  projectContent() {
    const { project, tabs, selectedTabKey, selectedTabIndex, toggleEdit, urls } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader
          title={project.title}
          description={project.description}
          category={project.categories.length && project.categories[0].title || null}
          toggleEditFn={toggleEdit}
          backUrl={urls.projectsList}
        />
        <PageTabs tabs={tabs} baseUrl={urls.project} renderTab={this.renderTab} activeIndex={selectedTabIndex} />
        {selectedTabIndex === -1 ?
          <div>404 - Unrecognized tab &quot;{selectedTabKey}&quot;</div>
          : null}
      </Container>
    );
  }

  /**
   * Renders the "new project" form
   */
  newProjectContent() {
    const { urls, newProjectSuccess } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader title='New Project' backUrl={urls.projectsList} />
        <NewProject successCallback={newProjectSuccess} />
      </Container>
    );
  }

  /**
   * Renders the "new rule" form
   */
  newRuleContent() {
    const { projectId, urls, newRuleSuccess } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader title="New Rule" backUrl={urls.rulesTab} />
        <NewRule projectId={projectId} successCallback={newRuleSuccess} />
      </Container>
    );
  }

  /**
   * Renders the "rules list"
   */
  rulesContent() {
    const { projectId, urls } = this.viewModel;
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
  }

  /**
   * Renders the "contributors list" with search
   */
  contributorsContent() {
    const { projectId } = this.viewModel;
    return (
      <Grid>
        <Grid.Column width={16}>
          <ProjectContributors projectId={projectId} />
        </Grid.Column>
      </Grid>
    );
  }

  render() {
    const { projectId, project, tabItemId, selectedTabKey } = this.viewModel;

    if (projectId === 'new') {
      return this.newProjectContent();
    }

    if (tabItemId === 'new') {
      switch(selectedTabKey) {
      case 'rules':
        return this.newRuleContent();
      }
    }

    if (!project) {
      return <Container fluid>Loading project page...</Container>;
    }

    return this.projectContent();
  }
}

export default ProjectPage;
