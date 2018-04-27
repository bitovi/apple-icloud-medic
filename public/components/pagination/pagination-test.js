import QUnit from 'steal-qunit';
import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import ViewModel from './pagination.viewmodel';

// ViewModel unit tests
let oldRouteData;
QUnit.module('@public/components/pagination', {
  beforeEach: () => {
    oldRouteData = route.data;
    route.stop();
    route.data = new DefineMap({ page: 1 });
  },
  afterEach: () => {
    route.stop();
    route.data = oldRouteData;
  }
});

QUnit.test('Calls a callback when active page changes', (assert) => {
  const done = assert.async();
  new ViewModel({
    // Get called during instantiation
    onPageChange (val) {
      assert.equal(val, 123, 'Callback was called');
      done();
    }
  });
  route.data.page = 123;
});
