import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import { Grid } from '@public/semantic-ui/index';

import SiteNav from '../site-nav/';

const ViewModel = DefineMap.extend('SiteHeader', {

});


class SiteHeader extends Component {
  static ViewModel = ViewModel;

  render() {
    const { currentUser } = this.viewModel;

    return (
      <header>
        <Grid padded stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <a href="/" className="site-logo"> Medic</a>
            </Grid.Column>
            <Grid.Column width={10}></Grid.Column>
            <Grid.Column width={3}>
              {(() => {
                if (currentUser) {
                  return <p>Welcome {currentUser.displayName}</p>;
                }
              })()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <SiteNav />
      </header>
    );
  }
}

export default SiteHeader;
export { ViewModel };
