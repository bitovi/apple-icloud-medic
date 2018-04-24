import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './date-picker';

storiesOf('Components', module)
  .addWithChapters('DatePicker', {
    chapters: [{
      sections: [{
        title: 'Default use',
        info: 'This component uses React Dates. Learn more here: https://github.com/airbnb/react-dates',
        sectionFn: () => (
          <DatePicker />
        )
      }]
    }]
  });
