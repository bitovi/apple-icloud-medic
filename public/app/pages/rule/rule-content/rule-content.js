import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './rule-content.viewmodel';
import RulesModel from '@public/models/rules';
import DataProvider from '@public/components/data-provider/data-provider';
import { Container } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import PageTabs from '@public/app/page-tabs/page-tabs';

/**
 * @module RuleContent
 * @parent components
 *
 * RuleContent Description
 */
class RuleContent extends Component {
  static ViewModel = ViewModel;

  /**
   * Renders tab content based on tabKey
   * @method renderTab
   * @param tabKey
   */
  renderTab(tabKey) {
    switch(tabKey) {
    default:
      return <div>{tabKey} content coming soon</div>;
    }
  }

  /**
   * Renders the main parts of the rule page
   * @method ruleContent
   */
  ruleContent () {
    const { rule, tabs, selectedTabKey, selectedTabIndex, urls } = this.viewModel;
    return (
      <Container fluid>
        <PageHeader
          title={rule.name}
          description={rule.description}
          category={rule.tags.length && rule.tags[0].title || null}
          backUrl={urls.project }
        />
        <PageTabs tabs={tabs} baseUrl={urls.rule} renderTab={this.renderTab} activeIndex={selectedTabIndex} />
        {selectedTabIndex === -1 ?
          <div>404 - Unrecognized tab &quot;{selectedTabKey}&quot;</div>
          : null}
      </Container>
    );
  }
  /**
   * @method render
   */
  render() {
    return this.ruleContent();
  }
}

export default DataProvider(RuleContent, RulesModel, 'rule');
