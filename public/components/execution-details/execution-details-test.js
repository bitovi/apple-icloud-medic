import QUnit from 'steal-qunit';
import { ViewModel } from './execution-details';

// ViewModel unit tests
QUnit.module('execution-details component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the execution-details component');
});
