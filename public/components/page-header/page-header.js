import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './page-header.viewmodel.js';
import { ComponentWrapper } from './partials/styled';
import { Divider, Grid, Icon, Label, Menu } from '@public/semantic-ui/index';

/**
 * @module PageHeader
 * @parent components
 *
 * PageHeader Description
 */
class PageHeader extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    //props
    const { title, description, category, pages } = this.viewModel;
    //methods
    const { navigateBack, toggleEdit } = this.viewModel;


    return (
      <ComponentWrapper>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={13}>
              <h1><Icon name="chevron left"  onClick={navigateBack}/>{title}</h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <Label>{category}</Label>
              <Icon name='pencil' size='large' className='pull-right' onClick={toggleEdit}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div className='description'>{description}</div>
          </Grid.Row>
          <Grid.Row>
            <Divider />
            <Menu className='page-nav' pointing secondary>
              {pages.map(page => (
                <Menu.Item key={page.route} active={page === page.route.slice(1)}>
                  <a href={page.route}>{page.title}</a>
                </Menu.Item>
              ))}
            </Menu>
          </Grid.Row>
        </Grid>
      </ComponentWrapper>
    );
  }
}

PageHeader.ViewModel = ViewModel;

export default PageHeader;
