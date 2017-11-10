import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import PropTypes from 'prop-types';
import { Menu } from '@public/styled-components/menu';

class SiteNav extends Component {
  render() {
    const { items } = this.viewModel;

    let appState = this.context.appState,
        page = appState.page && appState.page.toLowerCase();

    return (
      <nav aria-label="Primary">
        <Menu stackable>
          {items.map(item => (
            <Menu.Item key={item.route} active={page === item.title.toLowerCase()}>
              <a href={item.route}>{item.title}</a>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    );
  }
}

//add appState
SiteNav.contextTypes = {
  appState: PropTypes.object
};

SiteNav.ViewModel = DefineMap.extend('SiteNav', {
  items: {
    value() {
      return [
        // TODO: Add this to a shared router config so the
        //   1) server can route properly
        //   2) client app can define routes properly
        { title: 'Executions', route: '/executions' },
        // { title: 'Playground', route: '/playground' }
      ];
    }
  }
});

export default SiteNav;
