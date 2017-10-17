import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import route from 'can-route-pushstate';

import PlainReact from '../components/plain-react';
import ReactViewModel from '../components/react-view-model';
import SiteNav from './site-nav/';

class AppComponent extends Component {
  render() {
    return (
      <div role="application">
        <header>
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
  init () {
    route(':section', { section: 'section 1' });
    route.data = this;
    route.ready();
  }
});

export default AppComponent;
