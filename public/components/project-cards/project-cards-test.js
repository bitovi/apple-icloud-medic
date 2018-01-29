import QUnit from 'steal-qunit';
import ProjectCards from './project-cards';

// ViewModel unit tests
QUnit.module('@public/components/project-cards');

QUnit.test('Has a default isEditing state', function() {
  var vm = new ProjectCards.ViewModel();
  QUnit.equal(vm.isEditing, false);
});
