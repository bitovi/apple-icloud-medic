import React from 'react';
import route from 'can-route-pushstate';
import { Menu } from '@public/semantic-ui/index';
import { buildNavItems } from '@public/util/route-helper';
import { HeaderMenuItem } from './partials';

const SiteNav = () => {
  const items = buildNavItems(route.data);

  return (
    <nav aria-label="Primary">
      <Menu secondary>
        {items.map(item => (
          <HeaderMenuItem key={item.route} active={item.route === route.matched()}>
            <a href={item.url}>{item.text}</a>
          </HeaderMenuItem>
        ))}
      </Menu>
    </nav>
  );
};

export default SiteNav;
