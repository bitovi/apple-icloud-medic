import React from 'react';
import route from 'can-route-pushstate';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import UserExecutionsModel from '@public/models/user-executions';
import { Table, Divider, Button } from '@public/semantic-ui/index';
import { formatDate } from '@public/util/view-helpers';

const ViewModel = DefineMap.extend('UserExecutionsList', {
  isLoading: {
    type: 'boolean',
    get(lastSetVal, setVal) {
      this.pendingPromise.then(() => setVal(false));
      return true;
    }
  },
  pending: {
    value: () => [],
    Type: UserExecutionsModel.List,
    get(lastSetVal, setVal){
      this.pendingPromise.then(setVal);
      return lastSetVal;
    }
  },
  getListSet(status) {
    const { emailAddress, allGroups } = route.data.currentUser;
    return {
      $or: [{
        groupIds: {
          $overlap: allGroups
        }
      }, {
        userEmail: emailAddress
      }],
      status,
      $sort: { createdAt: -1 }
    };
  },
  pendingPromise: {
    get() {
      return UserExecutionsModel.getList( this.getListSet('pending') );
    }
  },
  completed: {
    value: () => [],
    Type: UserExecutionsModel.List,
    get(lastSetVal, setVal){
      this.completedPromise.then(setVal);
      return lastSetVal;
    }
  },
  completedPromise: {
    get() {
      return UserExecutionsModel.getList( this.getListSet({ $ne: 'pending' }) );
    }
  },
  continueExecution(userExecution) {
    UserExecutionsModel.approval(userExecution, 'approve');
  },
  cancelExecution(userExecution) {
    UserExecutionsModel.approval(userExecution, 'cancel');
  }
});

class UserExecutionsList extends Component {
  static ViewModel = ViewModel;

  constructor() {
    super();
    ['renderPending', 'renderCompleted'].forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  renderPending(item) {
    const { continueExecution, cancelExecution } = this.viewModel;
    return (
      <Table.Row key={'item_' + item.id}>
        <Table.Cell>
          <a href={'/executions/' + item.executionId}>{item.executionId}</a>
        </Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => continueExecution(item)}>Continue</Button>
          <Button onClick={() => cancelExecution(item)}>Cancel</Button>
        </Table.Cell>
      </Table.Row>
    );
  }

  renderCompleted(item) {
    return (
      <Table.Row key={'item_' + item.id}>
        <Table.Cell>
          <a href={'/executions/' + item.executionId}>{item.executionId}</a>
        </Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
        <Table.Cell>{item.status}</Table.Cell>
      </Table.Row>
    );
  }

  renderApprovals(approvals, isLoading, rendererName) {
    return (
      <Table.Body>
        {(() => {
          if (isLoading || !approvals) {
            return <Table.Row key="loading">
              <Table.Cell colSpan="3">Loading...</Table.Cell>
            </Table.Row>;
          }
          if (!approvals.length) {
            return <Table.Row key="loading">
              <Table.Cell colSpan="3">There are no items to display</Table.Cell>
            </Table.Row>;
          }
          return approvals.map(this[rendererName]);
        })()}
      </Table.Body>
    );
  }

  render() {
    const { isLoading, pending, completed } = this.viewModel;
    return (
      <div>
        <Divider />
        <h2>Pending Approvals</h2>
        <Table celled padded striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Execution ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.renderApprovals(pending, isLoading, 'renderPending')}
        </Table>

        <h2>Completed Approvals</h2>
        <Table celled padded striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Execution ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.renderApprovals(completed, isLoading, 'renderCompleted')}
        </Table>
      </div>
    );
  }
}

export default UserExecutionsList;
