import loader from '@loader';
import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/';
import PropTypes from 'prop-types';
import makeDebug from 'debug';

// import the Site component before any models/connections!
import { Site } from '@public/semantic-ui/index';
import SiteHeader from './site-header/';
import SiteFooter from './site-footer/';
import Session from '@public/models/session';
import teamConnection from '@public/models/teams';
import { registerRoutes } from '@public/util/route-helper';

const debug = makeDebug('medic:app');

/**
 * @module AppComponent
 * @parent components
 *
 * The main application component
 */
class AppComponent extends Component {
  getChildContext() {
    return { appState: this.viewModel };
  }

  render() {
    debug('Component render');

    const { currentUser } = this.viewModel;
    let mainContent;

    if (!currentUser) {
      mainContent = <div>{this.viewModel.statusMessage}</div>;
    } else {
      const { teamName, CurrentPage } = this.viewModel;
      if (!teamName || !CurrentPage) {
        mainContent = <div>Loading page data...</div>;
      } else {
        mainContent = <CurrentPage />;
      }
    }

    return (
      <Site>
        <SiteHeader currentUser={currentUser} />
        <main role="main">
          {mainContent}
        </main>
        <SiteFooter />
      </Site>
    );
  }
}

// TODO: Create HoC for providing app state
AppComponent.childContextTypes = {
  appState: PropTypes.object
};

AppComponent.ViewModel = DefineMap.extend('AppComponent', {
  /**********************/
  /* BEGIN ROUTE PARAMS */
  /**********************/
  /**
   * The module ID for the current page (see route config)
   */
  moduleId: 'string',
  /** executionId */
  executionId: 'string',
  /** projectId */
  projectId: 'string',
  /** ruleId */
  ruleId: 'string',
  /**
   * For sections with tabs, the "key" for the selected tab
   *
   *  - example: rules/1234 => `{ tabKey: 'rules', tabItemId: 1234 }`
   */
  tabKey: 'string',
  /**
   * For sections with tabs, the tabItemId is an entity ID for an item
   * selected within the tab.
   *
   *  - example: rules/1234 => `{ tabKey: 'rules', tabItemId: 1234 }`
   */
  tabItemId: 'string',
  /** teamName */
  teamName: {
    set(newVal) {
      if (newVal) {
        localStorage.setItem('defaultTeam', newVal);
      }
      return newVal;
    }
  },
  /**********************/
  /*  END ROUTE PARAMS  */
  /**********************/

  team: {
    get(val, setVal) {
      debug('Loading team', this.teamName);
      teamConnection.getList({ codeName: this.teamName })
        .then(teams => {
          debug('Team loaded');
          setVal(teams[0] || null);
        });
      return val;
    }
  },
  authError: {
    serialize: false,
    default: false
  },
  statusMessage: {
    serialize: false,
    default: 'Loading...'
  },
  get currentUser () {
    const user = !this.authError && Session.current && Session.current.user;
    debug('ViewModel - get currentUser', user && user.serialize());
    return user;
  },
  CurrentPage: {
    get(val, setVal) {
      if (this.moduleId) {
        debug('CurrentPage - importing module:', this.moduleId);

        // TODO: Use ES6 import() when/if steal supports it
        loader.import(this.moduleId).then(res => {
          debug('CurrentPage - module imported successfully:', this.moduleId);
          setVal(res && res.default || res);
        });
      }
    }
  },
  init () {
    debug('ViewModel init');

    // makes POST request to /authenticate
    debug('About to create new session');
    new Session({ strategy: 'custom' }).save().then(result => {
      debug('User authenticated successfully!', result.serialize());

      let defaultTeam = localStorage.getItem('defaultTeam');
      if (!defaultTeam) {
        defaultTeam = 'medic';
        // defaultTeam = user.isSuperAdmin ? 'medic' : Object.keys(user.permissions.teams)[0];
      }

      registerRoutes(route, { teamName: defaultTeam });
      route.data = this;
      route.start();
    }).catch(err => {
      // TODO: better UX
      debug('Auth error', err);
      debug('==== Session failed to create! ====', err);
      this.authError = true;
      this.statusMessage = 'Failed to authenticate: ' + err.message;
    });
  }
});

export default AppComponent;
