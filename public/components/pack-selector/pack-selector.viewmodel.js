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
  /** number of items per row */
  itemsPerRow: {
    default: 3
  },

  /** dictionary of selected pack IDs */
  selectedPackIds: {
    default: () => ({})
  },

  /** whether or not to allow multiple selections */
  multiple: {
    default: false
  },

  /** list of packs which can be selected */
  packs: {
    Type: PacksModel.List
  },

  /** Passed from above */
  onSelect: 'any',

  /** Whether or not the given pack has been selected */
  isPackSelected(pack) {
    // Using get() ensures that a rerender happens when new properties are added
    return !!this.selectedPackIds.get()[pack.id];
  },

  /** handles the "select" event of individual pack items */
  handleSelect(ev) {
    const idx = parseInt(ev.target.dataset.index, 10);
    const pack = this.packs[idx];
    let val = null;
    if (this.multiple) {
      debug(`Setting mulitple: ${pack.id} in ${this.selectedPackIds}`);
      this.selectedPackIds.assign({ [pack.id]: !this.isPackSelected(pack) });
      val = this.packs.filter(this.isPackSelected);
    } else {
      debug(`Setting single: ${pack.id}`);
      this.selectedPackIds = { [pack.id]: true };
      val = pack;
    }
    if (typeof this.onSelect === 'function') {
      this.onSelect(val);
    }
  },

  /** adds new packs onto the existing array */
  addNewPacks(packs) {
    this.packs = this.packs.concat(packs);
  }
});
