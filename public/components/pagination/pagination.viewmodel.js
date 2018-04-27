import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/map';

/**
 * ViewModel
 */
const ViewModel = DefineMap.extend('PaginationControl', {
  activePage: {
    get() {
      return route.data.page > 0 ? route.data.page : 1;
    }
  },
  totalPages: {
    default: 1
  },
  handlePaginationChange(ev, data) {
    route.data.page = data.activePage;
  },
  init() {
    if (typeof this.onPageChange === 'function') {
      this.on('activePage', (ev, val) => this.onPageChange(val));
    }
  }
});

export default ViewModel;
