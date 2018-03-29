import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { FlatDropdown } from '@public/semantic-ui/index';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';

/**
 * @constructor
 */
class UserSettingsDropdown extends Component {
  render() {
    const { options, user } = this.viewModel;
    return (
      <FlatDropdown size="huge" options={options} text={user.displayName}/>
    );
  }
}

UserSettingsDropdown.ViewModel = DefineMap.extend('UserSettingsDropdown', {
  user: {},
  teamName: 'string',
  handleClick (e, data) {
    route.data.moduleId = PAGES[data.value.page];
  },
  get options() {
    const values = [
      { text: 'Manage Teams', onClick: this.handleClick, value: 'team-management' },
      { text: 'Log Out', onClick: this.handleClick, value: 'logout' }
    ];
    return values.map(val => Object.assign(val, {
      selected: false
    }));
  }
});

export default UserSettingsDropdown;
