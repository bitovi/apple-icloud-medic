import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import PacksModel from '@public/models/packs';

const debug = makeDebug('medic:components:pack-selector');

/**
 * @module PackSelector VM
 * @parent PackSelector
 *
 * PackSelector View Model
 */
export default DefineMap.extend('PackSelector', {
  itemsPerRow: {
    default: 3
  },

  selectedPackIds: {
    default: () => ({})
  },

  multiple: {
    default: false
  },

  packs: {
    Type: PacksModel.List
  },

  onSelect: {
    type: 'any',
    default: () => () => {}
  },

  isSelected(pack) {
    // Using get() ensures that a rerender happens when new properties are added
    return !!this.selectedPackIds.get()[pack.id];
  },

  handleSelect(ev) {
    const idx = parseInt(ev.target.dataset.index, 10);
    const pack = this.packs[idx];
    if (this.multiple) {
      debug(`Setting mulitple: ${pack.id} in ${this.selectedPackIds}`);
      this.selectedPackIds.assign({ [pack.id]: !this.isSelected(pack) });
      this.onSelect(this.packs.filter(this.isSelected));
    } else {
      debug(`Setting single: ${pack.id}`);
      this.selectedPackIds = { [pack.id]: true };
      this.onSelect(pack);
    }
  },

  addNewPacks(packs) {
    this.packs = this.packs.concat(packs);
  }
});
