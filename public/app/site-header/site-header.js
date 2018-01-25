import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@public/semantic-ui/index';
import TeamDropdown from '@public/components/team-dropdown/team-dropdown';
import SiteNav from '@public/app/site-nav/site-nav';
import { Header, LightColumn, Logo } from './partials';

const SiteHeader = ({ currentUser }) => {
  return (
    <Header padded stackable as="header">
      <LightColumn width={3}>
        <Logo href="/"> iCloud Medic</Logo>
      </LightColumn>

      {/* TODO: Super Admins only? */}
      <LightColumn width={2}>
        <TeamDropdown />
      </LightColumn>

      <Grid.Column width={8}>
        <SiteNav />
      </Grid.Column>

      <Grid.Column width={3}>
        {(() => {
          if (currentUser) {
            return <div>Welcome {currentUser.displayName}</div>;
          }
        })()}
      </Grid.Column>
    </Header>
  );
};

SiteHeader.propTypes = {
  currentUser: PropTypes.object
};

export default SiteHeader;
