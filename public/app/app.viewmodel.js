import loader from '@loader';
import makeDebug from 'debug';
import DefineMap from 'can-define/map/';
import route from 'can-route-pushstate';
import Session from '@public/models/session';
import teamConnection from '@public/models/teams';
import { registerRoutes } from '@public/util/route-helper';

const debug = makeDebug('medic:app-viewmodel');
const MODULE_MAP = {};

const AppViewModel = DefineMap.extend('AppViewModel', {
  /**********************/
  /* BEGIN ROUTE PARAMS */
  /**********************/
  /** The module ID for the current page (see route config) */
  moduleId: 'string',
  /** Whether or not the current route is an admin page (see route config) */
  isAdmin: 'boolean',
  /** used for pagination */
  page: 'number',
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
  loadingMessage: {
    get(lastVal, setVal) {
      const { currentUser } = this;
      if (!currentUser) {
        return 'Authenticating...';
      }

      // Don't read these properties until after authentication
      const { isAdmin, team, CurrentPage } = this;
      if (!isAdmin && !team) {
        return 'Loading team information...';
      } else if (!CurrentPage) {
        return 'Loading page module...';
      }
      // Provides a less jerky experience
      setTimeout(() => setVal(null), 600);
      return lastVal;
    }
  },
  teamPromise: {
    get() {
      if (this.currentUser && this.teamName) {
        debug('Loading team', this.teamName);
        return teamConnection.getList({ codeName: this.teamName }).then(results => {
          if (!results.length) {
            throw new Error('No team found for ' + this.teamName);
          }
          return results[0];
        });
      }
    }
  },
  team: {
    get(lastVal, setVal) {
      if (this.teamPromise) {
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
      if (this.teamPromise) {
        this.teamPromise.catch(setVal);
      }
      return null;
    }
  },
  authError: {
    get(lastVal, setVal) {
      this.sessionPromise.catch(err => {
        debug('Auth error', err);
        debug('==== Session failed to create! ====', err);
        setVal(err);
      });
      return null;
    }
  },
  currentUser: {
    get(lastVal, setVal) {
      this.sessionPromise.then(setVal);
      return null;
    }
  },
  /** Get's set once during init */
  sessionPromise: {
    type: 'any',
    serialize: false,
    default() {
      debug('Setting session object');
      return new Session({ strategy: 'custom' }).save().then(session => {
        debug('Session authenticated, getting user!', session);
        if (session.userPromise) {
          debug('Waiting for session user!', session);
          return session.userPromise;
        }
        if (session.user) {
          return session.user;
        }
        throw new Error('There seems to be trouble loading user information. Please contact an administrator.');
      });
    }
  },
  CurrentPage: {
    get(val, setVal) {
      if (this.currentUser && this.team && this.moduleId) {
        const moduleId = this.moduleId;

        // Allows for "loader-less" page changes after first load
        if (MODULE_MAP[moduleId]) {
          return MODULE_MAP[moduleId];
        }

        debug('CurrentPage - importing module:', this.moduleId);
        // TODO: Use ES6 import() when/if steal supports it
        loader.import(moduleId).then(res => {
          debug('CurrentPage - module imported successfully:', this.moduleId);
          MODULE_MAP[moduleId] = res && res.default || res;
          setVal(MODULE_MAP[moduleId]);
        });
      }
      return null;
    }
  },
  init () {
    debug('ViewModel init');
    this.sessionPromise.then(user => {
      debug('User loaded successfully!', user);
      let defaultTeam = localStorage.getItem('defaultTeam');
      if (!defaultTeam) {
        defaultTeam = 'medic';
        // defaultTeam = user.isSuperAdmin ? 'medic' : Object.keys(user.permissions.teams)[0];
      }

      registerRoutes(route, { teamName: defaultTeam });
      route.data = this;
      route.start();

      return user;
    });
  }
});

export default AppViewModel;
