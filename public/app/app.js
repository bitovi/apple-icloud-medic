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

//!steal-remove-start
import '~/models/fixtures/';
//!steal-remove-end

// TODO: make part of the shared router config
const PAGE_MAP = {
  'playground': PlaygroundPage,
  'executions': ExecutionsPage
};

class AppComponent extends Component {

  getChildContext() {
    return { appState: this.viewModel };
  }

  render() {
    const { page, currentUser, executionId } = this.viewModel;
    let CurrentPage;
    switch(page){
      case "executions":
        if(executionId){
          CurrentPage = ExecutionPage;
        }else{
          CurrentPage = ExecutionsPage;
        }
        break;
      default:
        CurrentPage = PAGE_MAP[page] || ExecutionsPage;
        break;
    }

    return (
      <div role="application">
        <SiteHeader currentUser={this.viewModel.currentUser} />
        <main role="main">
          <CurrentPage />
        </main>
        <SiteFooter />
      </div>
    );
  }
}


AppComponent.childContextTypes = {
  appState: PropTypes.object
};

AppComponent.ViewModel = DefineMap.extend('AppComponent', {
  page: 'string',
  executionId: 'string',
  currentUser: {
    get () {
      return Session.current && Session.current.user;
    }
  },
  isReady: {
    get () {
      return this.currentUser;
    }
  },
  init () {
    // define routes here
    // TODO: use shared router config
    route('{page}', { page: 'executions' });
    route('/executions/{executionId}', { page: 'executions'});

    // makes request to /authenticate
    new Session({ strategy: 'custom' }).save().then(result => {
      route.data = this;
      route.ready();
    });
  }
});

export default AppComponent;
