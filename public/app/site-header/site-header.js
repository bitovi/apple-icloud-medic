import React from 'react';
import PropTypes from 'prop-types';
import TeamDropdown from '@public/components/team-dropdown/team-dropdown';
import UserSettingsDropdown from '@public/components/user-settings-dropdown/user-settings-dropdown';
import SiteNav from '@public/app/site-nav/site-nav';
import { Header, LightColumn, Logo, UserColumn, LinksColumn } from './partials';
import 'semantic-ui-less/semantic.less';


const SiteHeader = ({currentUser}) => {
  return (
    <Header padded stackable as="header">
      <LightColumn>
        <Logo href="/"> iCloud Medic</Logo>
        <TeamDropdown />
      </LightColumn>

      <LinksColumn>
        <SiteNav />
      </LinksColumn>

      <UserColumn>
        {currentUser ?
          <UserSettingsDropdown user={currentUser} />
          : <div>loading...</div>
        }
      </UserColumn>
    </Header>
  );
};

SiteHeader.propTypes = {
  currentUser: PropTypes.object
};

export default SiteHeader;
