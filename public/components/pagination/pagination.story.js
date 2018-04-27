import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './pagination';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    page: { default: 1 }
  });

  storiesOf('Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Pagination', {
      chapters: [{
        sections: [{
          sectionFn: () => {
            const callback = (activePage) => alert('You selected page: ' + activePage);
            return <Pagination totalPages={20} onPageChange={callback} />;
          }
        }]
      }]
    });
};
