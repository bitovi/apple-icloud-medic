import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import PropTypes from 'prop-types';
import { Menu } from '@public/semantic-ui/index';

const ViewModel = DefineMap.extend('SiteNav', {
  items: {
    Type: DefineList,
    value() {
      return [
        // TODO: Add this to a shared router config so the
        //   1) server can route properly
        //   2) client app can define routes properly
        { title: 'Executions', route: '/executions' },
        { title: 'User Executions', route: '/user-executions' },
        // { title: 'Playground', route: '/playground' }
      ];
    }
  }
});

class SiteNav extends Component {
  static ViewModel = ViewModel;

  // add appState
  static contextTypes = {
    appState: PropTypes.object
  };

  render() {
    const { items } = this.viewModel;

    const appState = this.context.appState;
    const page = appState.page && appState.page.toLowerCase();

    return (
      <nav aria-label="Primary">
        <Menu stackable>
          {items.map(item => (
            <Menu.Item key={item.route} active={page === item.route.slice(1)}>
              <a href={item.route}>{item.title}</a>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    );
  }
}

export default SiteNav;
