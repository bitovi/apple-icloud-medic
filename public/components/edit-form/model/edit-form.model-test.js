import QUnit from 'steal-qunit';
import DefineMap from 'can-define/map/map';
import ViewModel from './edit-form.model.viewmodel';

QUnit.module('@public/components/edit-form/edit-form.model');

function makeType (props) {
  // NOTE: certain tests rely on the values defined here
  const definitions = Object.assign({
    // common fields
    id: 'number',
    createdAt: 'date',
    updatedAt: 'date',

    name: 'string',
    age: 'number',
    enabled: 'boolean',
    withDefault: { type: 'string', default: 'foobar'}
  }, props);
  //--------------------- name         static           prototype
  return DefineMap.extend('TestModel', { definitions }, definitions);
}

QUnit.test('ViewModel init checks ItemType validity', () => {
  const InvalidType = DefineMap.extend({});
  QUnit.throws(() => new ViewModel());
  QUnit.throws(() => new ViewModel({ ItemType: InvalidType }));
});

QUnit.test('getEditableProps filters out functions and other known props', () => {
  const vm = new ViewModel({ ItemType: makeType({ fooFunc(){} }) });
  const keys = vm.getEditableProps();
  QUnit.ok(Array.isArray(keys));
  QUnit.ok(!keys.includes('id'));
  QUnit.ok(!keys.includes('createdAt'));
  QUnit.ok(!keys.includes('updatedAt'));
  QUnit.ok(!keys.includes('fooFunc'));
});

QUnit.test('generated _formDef lets user defined "formDef" values prevail', () => {
  const formDef = {
    enabled: { type: 'footype' },
    withDefault: { value: 'foovalue' }
  };
  const vm = new ViewModel({ ItemType: makeType(), formDef });
  Object.keys(vm._formDef).forEach(prop => {
    const def = vm._formDef[prop];
    switch(prop) {
    case 'enabled':
      QUnit.equal(def.type, 'footype');
      break;
    case 'withDefault':
      QUnit.equal(def.value, 'foovalue');
      break;
    }
  });
});
