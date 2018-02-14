import QUnit from 'steal-qunit';
import ViewModel from './project-contributor.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/project-contributor');

QUnit.skip('updates contributor permissions', function(assert){ //TODO: not working as expected
  const done = assert.async();
  var vm = new ViewModel({contributorId: 101});
  vm.contributorPromise.then(() => {
    vm.handlePermissionsChange(null, 'Read/Write');
    assert.equal(vm.contributor.permissions, 'Read/Write');
    done();
  });
});
