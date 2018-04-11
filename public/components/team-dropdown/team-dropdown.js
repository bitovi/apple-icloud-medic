import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import Teams from '@public/models/teams';
import { listAsArray } from '@public/util/view-helpers';
import { FlatDropdownRainbow } from '@public/semantic-ui/index';
import DataProvider from '@public/components/data-provider/data-provider';
/**
 * @constructor
 */
class TeamDropdown extends Component {

  render() {
    const { teamName, options, handleChange } = this.viewModel;

    if (!teamName) {
      return <div>{/* intentionally empty (eg. admin pages) */}</div>;
    }

    return (
      <FlatDropdownRainbow size="huge" options={listAsArray(options)} value={teamName} onChange={handleChange} />
    );
  }
}

TeamDropdown.ViewModel = DefineMap.extend('TeamDropdown', {
  teamName: {
    get() {
      return route.data.teamName;
    }
  },
  options: {
    set(teams) {
      return teams.map(team => {
        return { text: team.name, value: team.codeName };
      });
    }
  },
  handleChange(ev, data) {
    if (route.data.teamName !== data.value) {
      route.data.update({ teamName: data.value });
    }
  }
});

export default DataProvider(TeamDropdown, Teams, {
  dataProp: 'options',
  LoadingStateComponent: () => <div>Loading...</div>
});
