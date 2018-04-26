import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 10px;
  button {
    background-color: pink;
  }
`;

const HAS_STORAGE = typeof localStorage !== 'undefined';
const STORAGE_KEY = 'fixtures-enabled';

/**
 * This module is for dev-only tools to make it easier and quicker to
 * test different configurations, data providers, et al. This module
 * is not included in production.
 */
class DevModule extends React.Component {
  constructor() {
    super();
    // The stealjs/env-config file for how fixtures are enabled/disabled
    this.fixturesEnabled = HAS_STORAGE ? localStorage.getItem(STORAGE_KEY) !== 'false' : true;
    this.toggleFixtures = this.toggleFixtures.bind(this);
  }

  toggleFixtures() {
    if (HAS_STORAGE) {
      // Any time this is changed we need to refresh - so "state" doesn't work
      localStorage.setItem(STORAGE_KEY, !this.fixturesEnabled);
      window.location.reload(false);
    }
  }

  render() {
    if (!HAS_STORAGE) return '';
    return (
      <Container>
        <button onClick={this.toggleFixtures}>
          {this.fixturesEnabled ? 'Disable fixtures' : 'Enable fixtures'}
        </button>
      </Container>
    );
  }
}

export default DevModule;
