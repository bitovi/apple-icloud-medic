import React from 'react';
import Component from 'react-view-model/component';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import SiteHeader from './site-header';

class MockApp extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  getChildContext() {
    return { appState: this.viewModel };
  }

  render() {
    return this.props.children;
  }
}

MockApp.childContextTypes = {
  appState: PropTypes.object
};

storiesOf('App Components', module)
  .addWithChapters('Site Header', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <MockApp><SiteHeader /></MockApp>
        )
      }]
    }]
  });
