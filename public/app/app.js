//!steal-remove-start
// Fixutures must be imported early, before any models (connections)!
import '@public/models/fixtures/fixtures';
//!steal-remove-end

import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/';
import PropTypes from 'prop-types';
import makeDebug from 'debug';

import Session from '../models/session';
import SiteHeader from './site-header/';
import SiteFooter from './site-footer/';

import ExecutionsPage from './pages/executions/';
import ExecutionPage from './pages/execution/';
import PlaygroundPage from './pages/playground/';
import UserExecutionsPage from './pages/user-executions/';
import { Site } from '@public/semantic-ui/index';

const debug = makeDebug('medic:app');

// TODO: make part of the shared router config
const PAGE_MAP = {
  'playground': PlaygroundPage,
  'executions': ExecutionsPage,
  'user-executions': UserExecutionsPage
};

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
      const { CurrentPage } = this.viewModel;
      mainContent = <CurrentPage />;
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


AppComponent.childContextTypes = {
  appState: PropTypes.object
};

AppComponent.ViewModel = DefineMap.extend('AppComponent', {
  page: 'string',
  executionId: 'string',
  authError: {
    serialize: false,
    value: false
  },
  statusMessage: {
    serialize: false,
    value: 'Loading...'
  },
  get currentUser () {
    const user = !this.authError && Session.current && Session.current.user;
    debug('ViewModel - get currentUser', user && user.serialize());
    return user;
  },
  get CurrentPage () {
    switch(this.page){
    case 'executions':
      if(this.executionId) {
        return ExecutionPage;
      } else {
        return ExecutionsPage;
      }

    default:
      return PAGE_MAP[this.page] || ExecutionsPage;
    }
  },
  init () {
    debug('ViewModel init');
    // define routes here
    // TODO: use shared router config
    route.register('/{page}', { page: 'executions' });
    route.register('/executions/{executionId}', { page: 'executions' });

    // makes POST request to /authenticate
    debug('About to create new session');
    new Session({ strategy: 'custom' }).save().then(result => {
      debug('User authenticated successfully!', result.serialize());

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
