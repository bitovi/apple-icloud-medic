import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { FlatDropdown } from '@public/semantic-ui/index';

/**
 * @constructor
 */
class UserSettingsDropdown extends Component {
  render() {
    const { options, user } = this.viewModel;

    return (
      <FlatDropdown size="huge" options={options} text={user.displayName} />
    );
  }
}

UserSettingsDropdown.ViewModel = DefineMap.extend('UserSettingsDropdown', {
  user: {},
  handleClick (e, data) {
    alert('User dropdown click: ' + data.text);
  },
  get options() {
    const values = [
      { text: 'Manage Teams', onClick: this.handleClick, key: 'manage-teams' },
      { text: 'Log Out', onClick: this.handleClick, key: 'logout' },
    ];
    return values.map(val => Object.assign(val, {
      selected: false
    }));
  }
});

export default UserSettingsDropdown;
