import React from 'react';
import Component from 'react-view-model/component';
import makeDebug from 'debug';

// import the Site component before any models/connections!
import { Site, Loader, Dimmer, Icon, Header } from '@public/semantic-ui/index';
import SiteHeader from './site-header/site-header';
import SiteFooter from './site-footer/site-footer';
import ViewModel from './app.viewmodel';

const debug = makeDebug('medic:app');

/**
 * @module AppComponent
 * @parent components
 *
 * The main application component
 */
class AppComponent extends Component {
  static ViewModel = ViewModel;

  render() {
    const { loadingMessage, authError, teamError, currentUser, CurrentPage } = this.viewModel;
    debug('Component render:', loadingMessage);
    return (
      <Site>
        <SiteHeader currentUser={currentUser} />
        <main>
          {CurrentPage && <CurrentPage />}
        </main>
        <SiteFooter />
        <Dimmer active={!!loadingMessage || !!authError || !!teamError}>
          {authError && <Header inverted icon as='h2'><Icon name='warning sign' />Error during authentication: {authError.message}</Header> }
          {teamError && <Header inverted icon as='h2'><Icon name='warning sign' />Error loading team: {teamError.message}</Header> }
          {!authError && !teamError && loadingMessage && <Loader size='massive'>{loadingMessage}</Loader>}
        </Dimmer>
      </Site>
    );
  }
}

export default AppComponent;
