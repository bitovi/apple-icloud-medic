import makeDebug from 'debug';
import React from 'react';
import Component from 'react-view-model/component';
import ProjectsModel from '@public/models/projects';
import DataProvider from '@public/components/data-provider/data-provider';
import ViewModel from './project-content.viewmodel';
import { Container, Button, Grid } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import PageTabs from '@public/app/page-tabs/page-tabs';
import RuleCards from '@public/components/rule-cards/rule-cards';
import NewRule from '@public/components/new-rule/new-rule';
import ProjectContributors from '@public/components/project-contributors/project-contributors';

const debug = makeDebug('medic:pages:project-content');

/**
 * @module ProjectContent
 * @parent components
 *
 * ProjectContent Description
 */
class ProjectContent extends Component {
  static ViewModel = ViewModel;

  constructor() {
    super();
    this.renderTab = this.renderTab.bind(this);
  }

  /**
   * Renders the main content for the "project" page
   */
  projectContent() {
    const { project, tabs, selectedTabKey, selectedTabIndex, urls } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader
          title={project.title}
          description={project.description}
          category={project.categories.length && project.categories[0].title || null}
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
   * Renders individual tab panes
   * @param  {String} tabKey
   * @return {React.Element}
   */
  renderTab(tabKey) {
    debug('Render tab:', tabKey);
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
   * Renders the "rules list"
   */
  rulesContent() {
    const { project, urls } = this.viewModel;
    return (
      <Grid>
        <Grid.Column width={16}>
          <Button basic as="a" href={urls.newRule}>New Rule</Button>
        </Grid.Column>
        <Grid.Column width={16}>
          <RuleCards query={{ projectId: project.id }} />
        </Grid.Column>
      </Grid>
    );
  }

  /**
   * Renders the "contributors list" with search
   */
  contributorsContent() {
    const { project } = this.viewModel;
    return (
      <Grid>
        <Grid.Column width={16}>
          <ProjectContributors query={{ projectId: project.id }} />
          {/*<ProjectContributors contributors={project.contributors} />*/}
        </Grid.Column>
      </Grid>
    );
  }

  /**
   * Renders the "new rule" form
   */
  newRuleContent() {
    const { project, urls, newRuleSuccess } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader title="New Rule" backUrl={urls.rulesTab} />
        <NewRule projectId={project.id} successCallback={newRuleSuccess} />
      </Container>
    );
  }

  render() {
    debug('RENDER');
    const { tabItemId, selectedTabKey } = this.viewModel;

    // Handle "new" content within individual tabs
    if (tabItemId === 'new') {
      switch(selectedTabKey) {
      case 'rules':
        return this.newRuleContent();
      }
    }

    return this.projectContent();
  }
}

export default DataProvider(ProjectContent, ProjectsModel, 'project');
