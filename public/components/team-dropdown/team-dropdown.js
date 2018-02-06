import React from 'react';
import PropTypes from 'prop-types';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import teamConnection from '@public/models/teams';
import { listAsArray } from '@public/util/view-helpers';
import { FlatDropdownRainbow } from '@public/semantic-ui/index';

/**
 * @constructor
 */
class TeamDropdown extends Component {
  // add appState
  static contextTypes = {
    appState: PropTypes.object
  };

  handleChange = (ev, data) => {
    this.context.appState.teamName = data.value;
  }

  render() {
    const { teamName } = this.context.appState;
    if (!teamName) {
      return <div>initializing...</div>;
    }

    const { options } = this.viewModel;
    if (!options || !options.length) {
      return <div>loading...</div>;
    }

    return (
      <FlatDropdownRainbow size="huge" options={listAsArray(options)} value={teamName} onChange={this.handleChange} />
    );
  }
}

TeamDropdown.ViewModel = DefineMap.extend('TeamDropdown', {
  options: {
    get(val, setVal) {
      teamConnection.getList({}).then(results => {
        setVal(results.map(team => {
          return { text: team.name, value: team.codeName };
        }));
      });
    }
  }
});

export default TeamDropdown;
