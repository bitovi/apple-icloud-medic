import QUnit from 'steal-qunit';
import ViewModel from './project-card.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/project-card');

QUnit.test('Has a projectId property', function(){
  var vm = new ViewModel({projectId: '102'});
  QUnit.equal(vm.projectId, '102');
});
