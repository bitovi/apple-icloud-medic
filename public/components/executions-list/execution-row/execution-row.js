import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import { Button, Grid, Icon, Label, Table } from '@public/semantic-ui/index';
import { formatDate } from '@public/util/view-helpers';
import ExecutionsModel from '@public/models/executions';
import DataProvider from '@public/components/data-provider/data-provider';
import { NestableRow, LoadingStateComponent, ErrorStateComponent, NoDataStateComponent } from './partials';
import ExecutionRowVM from './execution-row.viewmodel';

const DATE_FORMAT = 'MMM D - h:mma';

const ChildRowsRenderer = ({ executions, depth, visible }) => {
  return executions.map(execution =>
    <ExecutionRow visible={visible} execution={execution} depth={depth} key={execution.id} />
  );
};

const ChildRows = DataProvider(ChildRowsRenderer, ExecutionsModel, {
  dataProp: 'executions',
  LoadingStateComponent: LoadingStateComponent,
  ErrorStateComponent: ErrorStateComponent,
  NoDataStateComponent: NoDataStateComponent
});

class ExecutionRow extends Component {
  static ViewModel = ExecutionRowVM;

  descriptorContent(execution) {
    const title = execution.type === 'workflow' ? 'Workflow Name' : 'Live Action Name';
    let value = '';
    if (execution.context.mistral && execution.context.mistral.task_name) {
      value = execution.context.mistral.task_name;
    } else if (execution.liveaction && execution.liveaction.action) {
      value = execution.liveaction.action;
    } else {
      value = 'unknown';
    }
    return <div>
      <strong>{title}</strong>,
      <p>{value}</p>
    </div>;
  }

  render() {
    const { execution, visible, expanded, hasExpanded, depth, statusColor } = this.viewModel;
    const { handleClick, handleExpanderClick } = this.viewModel;

    const rows = [
      <NestableRow visible={visible} depth={depth} key={execution.id}>
        <Table.Cell>
          {execution.children && !!execution.children.length &&
            <Icon name={expanded ? 'chevron down' : 'chevron right'} onClick={handleExpanderClick} />
          }
        </Table.Cell>
        <Table.Cell>
          <Grid divided>
            <Grid.Row>
              <Grid.Column offset={depth} width={8}>
                {this.descriptorContent(execution)}
              </Grid.Column>
              <Grid.Column width={3}>
                <Label color={ statusColor[execution.status]}> {execution.status} </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Table.Cell>
        <Table.Cell>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <strong> Action </strong>
                <p> {execution.action && execution.action.name} </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <Table.Cell> //TODO
            <strong> Project </strong>
            <p> {execution.project ? execution.project.name : 'Coming Soon'} </p>
          </Table.Cell> */}
        </Table.Cell>
        <Table.Cell>
          <div>
            <strong> Start Time </strong>
            <p> {execution.start_timestamp && formatDate(execution.start_timestamp, DATE_FORMAT)} </p>
          </div>
          {/* <div>
            <strong> Duration </strong>
            <p> {execution.duration && formatDate(execution.duration, DATE_FORMAT)} </p>
          </div> */}
        </Table.Cell>
        <Table.Cell>
          <Button basic onClick={handleClick}>Details</Button>
        </Table.Cell>
      </NestableRow>
    ];

    if (execution.children && execution.children.length && (expanded || hasExpanded)) {
      rows.push(
        <ChildRows
          memoize={true}
          visible={visible && expanded}
          query={{ parent: execution.id, teamName: route.data.teamName }}
          depth={depth + 1}
          key={execution.id + '_children'} />
      );
    }

    return rows;
  }
}

export default ExecutionRow;
