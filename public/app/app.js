import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';

import Session from '../models/session';
import PlainReact from '../components/plain-react';
import ReactViewModel from '../components/react-view-model';
import SiteNav from './site-nav/';

class AppComponent extends Component {
  render() {
    return (
      <div role="application">
        <header>
          {(() => {
            if (this.viewModel.isReady) {
              return <p>Welcome {this.viewModel.session.user.displayName}</p>
            }
          })()}
          <a href="/" className="site-logo"> Apple - {this.viewModel.section}</a>
          <SiteNav />
        </header>
        <main role="main">
          <PlainReact />
          <ReactViewModel />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

AppComponent.ViewModel = DefineMap.extend('AppComponent', {
  section: 'string',
  session: {
    get () {
      return Session.current;
    }
  },
  isReady: {
    get () {
      return this.session && this.session.user;
    }
  },
  init () {
    // define routes here
    route(':section', { section: 'section 1' });

    new Session({ strategy: 'custom' }).save().then(result => {
      route.data = this;
      route.ready();
    });
  }
});

export default AppComponent;
