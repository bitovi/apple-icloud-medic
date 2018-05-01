import React from 'react';
import Component from 'react-view-model/component';
import { Button, Form } from '@public/semantic-ui/index';
import { CriterionGroup } from './partials';
import ViewModel from './criteria-field.viewmodel';

/**
 * @module CriteriaField
 * @parent components
 *
 * CriteriaField allows for adding multiple criteria for a rule
 */
class CriteriaField extends Component {
  static ViewModel = ViewModel;

  getIdxFromParent(node) {
    let parent = node.parentNode;
    while(parent) {
      if (parent.dataset.idx) {
        return parseInt(parent.dataset.idx, 10);
      }
      parent = parent.parentNode;
    }
  }

  handleValueChange = (ev, data) => {
    const idx = this.getIdxFromParent(ev.target);
    const prop = data['data-name'];
    this.viewModel.handleValueChange(idx, prop, data.value);
  }

  render() {
    const { criteria, operators, addCriterion, canAddCriterion } = this.viewModel;
    return (
      <Form>
        {criteria.map((criterion, i) => {
          return (
            <CriterionGroup widths="equal" key={'criterion_' + i} data-idx={i} className={!criterion.isComplete && 'incomplete'}>
              <Form.Input fluid placeholder="trigger.body / trigger.header" data-name="key" value={criterion.key} onChange={this.handleValueChange} />
              <Form.Select fluid options={operators} placeholder="operator" data-name="type" value={criterion.type} onChange={this.handleValueChange} />
              <Form.Input fluid data-name="pattern" value={criterion.pattern} onChange={this.handleValueChange} />
            </CriterionGroup>
          );
        })}
        <Button onClick={addCriterion} disabled={!canAddCriterion}>Add Criterion</Button>
      </Form>
    );
  }
}

export default CriteriaField;
