import QUnit from 'steal-qunit';
import DefineMap from 'can-define/map/map';
import { makeViewModel } from './data-provider.viewmodel-factory';

QUnit.module('@public/components/data-provider');

// Test helper for making a Model with a connection.
// Connection methods throw errors by default to ensure test isolation.
const makeModel = (connection) => {
  return {
    connection: Object.assign({
      idProp: 'id',
      get: () => { throw new Error('Should not get called'); },
      getList: () => { throw new Error('Should not get called'); }
    }, connection)
  };
};

QUnit.test('dataProp defaults to "data" if none specified', () => {
  const Model = makeModel();
  const ViewModel = makeViewModel(Model);
  QUnit.ok(ViewModel.prototype.hasOwnProperty('data'));
});

QUnit.test('dataProp can be set to custom name', () => {
  const Model = makeModel();
  const customDataProp = 'customDataProp';
  const ViewModel = makeViewModel(Model, customDataProp);
  QUnit.ok(ViewModel.prototype.hasOwnProperty(customDataProp));
  QUnit.notOk(ViewModel.prototype.hasOwnProperty('data'), 'Should not have data property');
});

QUnit.test('"shouldLoadData" remains false when data is provided', () => {
  const Model = makeModel();
  const ViewModel = makeViewModel(Model, 'fooProp');
  const vm = new ViewModel({ fooProp: {} });
  QUnit.equal(vm.shouldLoadData, false);
});

QUnit.test('"shouldLoadData" set to true when no data is provided', () => {
  const Model = makeModel();
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel();
  QUnit.equal(vm.shouldLoadData, true);
});

QUnit.test('"query" is always returned as a plain object', () => {
  const ViewModel = makeViewModel(makeModel());
  const vm = new ViewModel({ query: new DefineMap({ foo: 'bar' }) });
  QUnit.equal(vm.query instanceof DefineMap, false);
});

QUnit.test('Calls connection.get() if "id" prop is set, extending the "query" object', (assert) => {
  assert.expect(2);
  const Model = makeModel({
    get: (query) => {
      assert.equal(query.id, 1234);
      assert.equal(query.foo, 'bar');
      return Promise.resolve({});
    }
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel({ id: 1234, query: { foo: 'bar' } });
  vm.get(vm.dataProp);
});

QUnit.test('Passes "id" on the idProp as defined on the connection', (assert) => {
  assert.expect(1);
  const Model = makeModel({
    idProp: 'fooIdProp',
    get: (query) => {
      assert.equal(query.fooIdProp, 1234);
      return Promise.resolve({});
    }
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel({ id: 1234 });
  vm.get(vm.dataProp);
});

QUnit.test('Calls connection.get() if "query.id" prop is set', (assert) => {
  assert.expect(2);
  const Model = makeModel({
    get: (query) => {
      assert.equal(query.id, 5678);
      assert.equal(query.foo, 'bar');
      return Promise.resolve({});
    }
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel({ query: { id: 5678, foo: 'bar' } });
  vm.get(vm.dataProp);
});

QUnit.test('Calls connection.getList() if "query.id" is an object', (assert) => {
  assert.expect(1);
  const Model = makeModel({
    getList: (query) => {
      assert.ok(typeof query.id, 'object');
      return Promise.resolve({});
    }
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel({ query: { id: { $in: [1, 2, 3] } } });
  vm.get(vm.dataProp);
});

QUnit.test('Calls connection.getList() if no ID is present', (assert) => {
  assert.expect(1);
  const Model = makeModel({
    getList: (query) => {
      assert.equal(query.foo, 'bar');
      return Promise.resolve([]);
    }
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel({ query: { foo: 'bar' } });
  vm.get(vm.dataProp);
});

QUnit.test('"isLoading" set to false when promise succeeds', (assert) => {
  assert.expect(2);
  const done = assert.async();
  const Model = makeModel({
    getList: () => Promise.resolve([])
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel();
  vm.on(vm.dataProp, () => {
    assert.equal(vm.isLoading, false);
    done();
  });
  assert.equal(vm.isLoading, true, 'should be true initially');
});

QUnit.test('Sets the [dataProp] property when the promise succeeds', (assert) => {
  assert.expect(1);
  const done = assert.async();
  const data = [{ name: 'Justin' }];
  const Model = makeModel({
    getList: () => Promise.resolve(data)
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel();
  vm.on('error', () => { throw new Error('Should not get called'); });
  vm.on(vm.dataProp, () => {
    assert.ok(true, 'data was set');
    done();
  });
});

QUnit.test('Sets the error property when the promise fails', (assert) => {
  assert.expect(1);
  const done = assert.async();
  const error = new Error('This is an error');
  const Model = makeModel({
    getList: () => Promise.reject(error)
  });
  const ViewModel = makeViewModel(Model);
  const vm = new ViewModel();
  vm.on(vm.dataProp, () => { throw new Error('Should not get called'); });
  vm.on('error', () => {
    assert.ok(true, 'error was set');
    done();
  });
});
