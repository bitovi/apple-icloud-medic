import QUnit from 'steal-qunit';
import ViewModel from './edit-team-modal.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/edit-team-modal');

QUnit.test('handleSuccess should update the sucess message and status', function(){
  var vm = new ViewModel();
  vm.handleSuccess({name: 'iCloud'});
  QUnit.equal(vm.successMessage.length > 0, true);
  QUnit.equal(vm.status, 'success');
});
