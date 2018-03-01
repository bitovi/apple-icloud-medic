import DefineMap from 'can-define/map/map';

const PackEnablerVM = DefineMap.extend('PackEnablerVM', {
  projectId: 'number',

  isOpen: {
    type: 'boolean',
    default: false
  },

  selectedPacks: {
    default: () => []
  },

  excludePackIds: {
    default: () => []
  },

  handleOpen() {
    this.isOpen = true;
  },

  handleClose() {
    this.isOpen = false;
  },

  handleSave() {
    this.onConfirmation(this.selectedPacks);
    this.isOpen = false;
  },

  onPackSelect(packs) {
    this.selectedPacks = packs;
  },

  /**
   * Confirmation function passed from parent
   * @method
   */
  onConfirmation: {
    type: 'any'
  }
});

export default PackEnablerVM;
