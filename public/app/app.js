import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import PropTypes from 'prop-types';

import Session from '../models/session';
import SiteHeader from './site-header/';
import SiteFooter from './site-footer/';

import ExecutionsPage from './pages/executions/';
import ExecutionPage from './pages/execution/';
import PlaygroundPage from './pages/playground/';
import UserExecutionsPage from './pages/user-executions/';
import { Site } from '@public/semantic-ui/index';

//!steal-remove-start
import '@public/models/fixtures/';
//!steal-remove-end

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
    const { currentUser } = this.viewModel;
    console.log('App Component render', currentUser);
    let mainContent;
    if (!currentUser) {
      mainContent = <div>{this.viewModel.statusMessage}</div>
    } else {
      const { CurrentPage } = this.viewModel;
      mainContent = <CurrentPage />
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
    console.log('App ViewModel - get currentUser');
    return !this.authError && Session.current && Session.current.user;
  },
  get CurrentPage () {
    switch(this.page){
      case "executions":
        if(this.executionId) {
          return ExecutionPage;
        } else {
          return ExecutionsPage;
        }
        break;
      default:
        return PAGE_MAP[this.page] || ExecutionsPage;
        break;
    }
  },
  init () {
    console.log('App ViewModel inti');
    // define routes here
    // TODO: use shared router config
    route('{page}', { page: 'executions' });
    route('/executions/{executionId}', { page: 'executions'});

    // makes POST request to /authenticate
    window.authPromise = new Session({ strategy: 'custom' }).save();
    window.authPromise.then(result => {
      route.data = this;
      route.ready();
    }).catch(err => {
      // TODO: better UX
      console.log('Auth error', err);
      this.authError = true;
      this.statusMessage = 'Failed to authenticate: ' + err.message;
    });
  }
});

export default AppComponent;
