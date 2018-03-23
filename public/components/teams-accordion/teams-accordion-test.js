import QUnit from 'steal-qunit';
import ViewModel from './teams-accordion.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/teams-accordion');

QUnit.test('handleClick should update the active index', function(){
  var vm = new ViewModel();
  vm.handleClick(new Event('click'), {index: 2});
  QUnit.equal(vm.activeIndex, 2);
});
