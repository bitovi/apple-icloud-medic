import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { FlatDropdown } from '@public/semantic-ui/index';

/**
 * @constructor
 */
class TeamDropdown extends Component {
  render() {
    const { options } = this.viewModel;
    let defaultValue = null;

    if (options && options.length) {
      defaultValue = options[0].value;
    }

    return (
      <FlatDropdown size="huge" options={options} defaultValue={defaultValue} />
    );
  }
}

TeamDropdown.ViewModel = DefineMap.extend('TeamDropdown', {
  get options() {
    const values = [
      { text: 'Mail team', value: 'mail' },
      { text: 'iCloud team', value: 'icloud' },
      { text: 'Maps team', value: 'maps' },
      { text: 'iTunes team', value: 'itunes' },
      { text: 'PIE team', value: 'pie' }
    ];
    return values;
  }
});

export default TeamDropdown;
