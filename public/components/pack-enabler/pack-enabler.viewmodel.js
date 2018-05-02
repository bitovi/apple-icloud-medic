import DefineMap from 'can-define/map/map';

const PackEnablerVM = DefineMap.extend('PackEnablerVM', {
  projectId: 'number',

  /** whether or not the modal is open */
  isOpen: {
    type: 'boolean',
    default: false
  },

  /** array of selected packs */
  selectedPacks: {
    default: () => []
  },

  /** list of pack IDs to exclude from the list (blacklist) */
  excludePackIds: {
    default: () => []
  },

  /** event handler for anything which should open the modal */
  handleOpen() {
    this.isOpen = true;
  },

  /** event handler for anything which should close the modal */
  handleClose() {
    this.isOpen = false;
  },

  /** handle the modal "confirm" button  */
  handleSave() {
    if (typeof this.onConfirmation === 'function') {
      this.onConfirmation(this.selectedPacks);
    }
    this.isOpen = false;
  },

  /** handles the onPackSelect event of the pack selector */
  handlePackSelect(packs) {
    this.selectedPacks = packs;
  },

  /**
   * Confirmation function passed from parent
   * @method
   */
  onConfirmation: 'any'
});

export default PackEnablerVM;
