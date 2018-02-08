import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './page-header.viewmodel.js';
import { ComponentWrapper } from './partials/styled';
import { Divider, Grid, Icon, Label } from '@public/semantic-ui/index';

/**
 * @module PageHeader
 * @parent components
 *
 * PageHeader Description
 */
class PageHeader extends Component {
  static ViewModel = ViewModel;

  /**
   * @method render
   * @returns template
   */
  render() {
    const { title, description, category, backUrl, toggleEditFn } = this.viewModel;

    return (
      <ComponentWrapper>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={13}>
              <h1>
                {backUrl ?
                  <a href={backUrl}><Icon name="chevron left" /></a>
                  : backUrl}
                {title}
              </h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <Label>{category}</Label>
              <Icon name='pencil' size='large' className='pull-right' onClick={toggleEditFn}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className='description'>{description}</div>
              <Divider />
              {/*TODO: render children. this.props.children*/}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ComponentWrapper>
    );
  }
}

export default PageHeader;
