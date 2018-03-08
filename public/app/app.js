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

    const { currentUser, authError } = this.viewModel;
    let mainContent;

    if (!currentUser) {
      if (authError) {
        mainContent = <div>Failed to authenticate: {authError.message}</div>;
      } else {
        mainContent = <div>Authenticating...</div>;
      }
    } else {
      const { teamName, teamError, CurrentPage, moduleId } = this.viewModel;
      if (teamError) {
        mainContent = <div>Error loading team: {teamError.message}</div>;
      } else if (!teamName || !CurrentPage) {
        debug('Rendering loading message', moduleId);
        mainContent = <div>Loading page data...</div>;
      } else {
        debug('Rendering page', moduleId);
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
    type: 'string',
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
  teamPromise: {
    get() {
      debug('Loading team', this.teamName);
      return teamConnection.getList({ codeName: this.teamName }).then(results => {
        if (!results.length) {
          throw new Error('No team found for ' + this.teamName);
        }
        return results[0];
      });
    }
  },
  team: {
    get(lastVal, setVal) {
      if (this.teamName) {
        this.teamPromise.then(team => {
          debug('Team loaded', team);
          setVal(team);
        });
      }
      return null;
    }
  },
  teamError: {
    get(lastVal, setVal) {
      if (this.teamName) {
        this.teamPromise.catch(setVal);
      }
    }
  },
  authError: {
    serialize: false,
    default: false
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
      debug('Auth error', err);
      debug('==== Session failed to create! ====', err);
      this.authError = err;
    });
  }
});

export default AppComponent;
