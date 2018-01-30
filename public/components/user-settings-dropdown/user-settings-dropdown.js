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
    let defaultValue = null;
    let defaultText = null;

    if (options && options.length) {
      defaultValue = options[0].value;
      defaultText = user.displayName;
    }

    return (
      <FlatDropdown size="huge" options={options} defaultValue={defaultValue} labeled text={defaultText} />
    );
  }
}

UserSettingsDropdown.ViewModel = DefineMap.extend('UserSettingsDropdown', {
  user:{},
  get options() {
    const values = [
      { text: 'Manage Teams', value: 'manage-teams' },
      { text: 'Log Out', value: 'logout' },
    ];
    return values;
  }
});

export default UserSettingsDropdown;
