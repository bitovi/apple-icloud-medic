import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';
import { FlatDropdown } from '@public/semantic-ui/index';

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
  handleClick (e, data) {
    route.data.update({ moduleId: PAGES[data.value] });
  },
  get options() {
    const values = [
      { text: 'Manage Teams', onClick: this.handleClick, value: 'team-management' },
      { text: 'Log Out', onClick: this.handleClick, value: 'logout' }
    ];
    return values.map(val => Object.assign(val, {
      // this ensures that items never appear selected
      selected: false
    }));
  }
});

export default UserSettingsDropdown;
