import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';

class SiteNav extends Component {
  render() {
    return (
      <nav aria-label="Primary">
        <ul>
          <li><a href="/section-2">Section 2</a></li>
          <li><a href="/section-3">Section 3</a></li>
        </ul>
      </nav>
    );
  }
}

SiteNav.ViewModel = DefineMap.extend('SiteNav', {

});

export default SiteNav;
