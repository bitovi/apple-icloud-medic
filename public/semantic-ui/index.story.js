import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Semantic UI', module)
  .add('Overview', () => (
    <div>
      <h1>Semantic UI Overview</h1>
      <p>
        This project takes advantage of several 3rd party resources. Understanding these
        resources is crucial to the success of this project.
      </p>
      <ul>
        <li>
          <a href="https://storybook.js.org/">StoryBook</a> -
          UI Development and Documentation environment
        </li>
        <li>
          <a href="https://react.semantic-ui.com/">Semantic UI React</a> -
          Rich and extensible UI library
        </li>
        <li>
          <a href="https://www.styled-components.com/">Styled Components</a> -
          Easily stylable and configurable components for React
        </li>
        <li>
          <a href="https://polished.js.org/">Polished</a> -
          LESS/SASS style color functions and helpers
        </li>
      </ul>
    </div>
  ));
