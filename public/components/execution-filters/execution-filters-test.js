import QUnit from 'steal-qunit';
import { ViewModel } from './execution-filters';

// ViewModel unit tests
QUnit.module('execution-filters component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the execution-filters component');
});
