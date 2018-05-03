import React from 'react';
import { storiesOf } from '@storybook/react';
import PackEnabler from './pack-enabler';

const onConfirmation = (packs) => alert(`You selected ${packs.length} packs!`);

storiesOf('Components', module)
  .addWithChapters('Pack Enabler', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <PackEnabler onConfirmation={onConfirmation} />
        )
      }, {
        title: 'Excluding packs from the list',
        sectionFn: () => {
          const excludePackIds = ['pack_1', 'pack_2', 'pack_3'];
          return <PackEnabler excludePackIds={excludePackIds} onConfirmation={onConfirmation} />;
        }
      }]
    }]
  });
