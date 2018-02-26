import React from 'react';
import PropTypes from 'prop-types';
import { StyledTab } from './partials';

const REG_TRAILING_SLASH = /\/$/;

/**
 * @module PageTabs
 * @parent components
 *
 * A route-enabled tabs component intended to be used at the "page" level.
 */
class PageTabs extends React.Component {
  static propTypes = {
    /**
     * Array of tab objects, each with an key and menuItem.
     */
    tabs: PropTypes.array.isRequired,
    /**
     * Base URL for tabs. The tab ID is appended to this URL.
     */
    baseUrl: PropTypes.string.isRequired,
    /**
     * Base URL for tabs. The tab ID is appended to this URL.
     */
    renderTab: PropTypes.func.isRequired,
    /**
     * Optional activeIndex
     */
    activeIndex: PropTypes.number,
    /**
     * Additional menu options (see semantic-ui menu for options)
     */
    menu: PropTypes.object
  }

  /**
   * This method performs the heavy lifting for building the tab panes.
   * We only want to do once before the component is mounted instead of
   * every time the component is rendered.
   */
  componentWillMount() {
    const { baseUrl, tabs, menu, renderTab } = this.props;
    if (typeof renderTab !== 'function') {
      throw new Error('You must provide a renderTab function for rendering tab contents.');
    }
    this.menuOptions = Object.assign({ secondary: true, pointing: true }, menu);
    this.panes = tabs.map(tab => {
      if (!tab.hasOwnProperty('key') || !tab.menuItem) {
        throw new Error('Each tab must define "key" and "menuItem" properties');
      }
      const pane = Object.assign({}, tab, {
        render: renderTab.bind(this, tab.key),
        menuItem: Object.assign({
          key: tab.key,
          href: baseUrl.replace(REG_TRAILING_SLASH, '') + '/' + tab.key
        }, typeof tab.menuItem === 'string' ? { name: tab.menuItem } : tab.menuItem)
      });
      return pane;
    });
  }

  render() {
    const { activeIndex } = this.props;
    return <StyledTab menu={this.menuOptions} panes={this.panes} activeIndex={activeIndex} />;
  }
}

export default PageTabs;
