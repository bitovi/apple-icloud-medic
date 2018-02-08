import React from 'react';
import PropTypes from 'prop-types';
import { ComponentWrapper } from './partials/styled';
import { Menu } from '@public/semantic-ui/index';

/**
 * @module NavTabs
 * @parent components
 *
 * NavTabs Description
 */
const NavTabs = ({ tabs, selectedTabId, baseUrl }) => (
  <ComponentWrapper>
    {tabs.map(tab => (
      <Menu.Item key={tab.tabId} active={tab.tabId === selectedTabId}>
        <a href={baseUrl + '/' + tab.tabId}>{tab.title}</a>
      </Menu.Item>
    ))}
  </ComponentWrapper>
);

NavTabs.propTypes = {
  tabs: PropTypes.array,
  selectedTabId: PropTypes.string,
  baseUrl: PropTypes.string
};
export default NavTabs;
