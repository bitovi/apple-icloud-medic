import QUnit from 'steal-qunit';
import { ViewModel } from './json-viewer';

// ViewModel unit tests
QUnit.module('json-viewer component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the json-viewer component');
});
