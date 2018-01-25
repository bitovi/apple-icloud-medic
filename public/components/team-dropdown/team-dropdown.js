import React from 'react';
import PropTypes from 'prop-types';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { FlatDropdown } from '@public/semantic-ui/index';
import teamConnection from '@public/models/teams';
import { listAsArray } from '@public/util/view-helpers';

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
    const { options } = this.viewModel;
    const { teamName } = this.context.appState;

    if (!options || !options.length || !teamName) {
      return <div>loading...</div>;
    }

    return (
      <FlatDropdown size="huge" options={listAsArray(options)} value={teamName} onChange={this.handleChange} />
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
