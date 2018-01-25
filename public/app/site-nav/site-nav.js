import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import PropTypes from 'prop-types';
import route from 'can-route-pushstate';
import { Menu } from '@public/semantic-ui/index';
import { buildNavItems } from '@public/util/route-helper';

const ViewModel = DefineMap.extend('SiteNav', {

});

class SiteNav extends Component {
  static ViewModel = ViewModel;

  // add appState
  static contextTypes = {
    appState: PropTypes.object
  };

  render() {
    // TODO: use HoC to expose app state to the viewmodel
    const appState = this.context.appState;
    const items = buildNavItems(appState);

    return (
      <nav aria-label="Primary">
        <Menu stackable>
          {items.map(item => (
            <Menu.Item key={item.route} active={item.route === route.matched()}>
              <a href={item.url}>{item.text}</a>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    );
  }
}

export default SiteNav;
