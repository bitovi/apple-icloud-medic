import React from 'react';
import Component from 'react-view-model/component';
import { Grid } from '@public/semantic-ui/index';
import PacksModel from '@public/models/packs';
import DataProvider from '@public/components/data-provider/data-provider';
import ProjectPackEnabler from '@public/components/pack-enabler/pack-enabler';
import ViewModel from './pack-selector.viewmodel';
import { PackBlock, EnablerColumn } from './partials';

/**
 * @Component PackSelector
 *
 * A list of packs with an onSelect callback
 */
class PackSelector extends Component {
  static ViewModel = ViewModel;

  render() {
    const {
      packs,
      itemsPerRow,
      handleSelect,
      isSelected,
      allowEnabling,
      addNewPacks
    } = this.viewModel;

    return (
      <Grid columns={itemsPerRow}>
        {allowEnabling ?
          <EnablerColumn key='enabler'>
            <ProjectPackEnabler excludePackIds={packs.map(p => p.id)} onConfirmation={addNewPacks} />
          </EnablerColumn>
          : null
        }
        {packs.map((pack, i) => (
          <Grid.Column key={pack.id}>
            <PackBlock data-index={i} bgColor={pack.color} selected={isSelected(pack)} onClick={handleSelect}>
              {pack.name}
            </PackBlock>
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default DataProvider(PackSelector, PacksModel, 'packs');
