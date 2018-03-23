import React from 'react';
import PropTypes from 'prop-types';
import { ComponentWrapper } from './partials/styled';
import { Divider, Grid, Icon, Label, Header } from '@public/semantic-ui/index';

/**
 * @module PageHeader
 * @parent components
 *
 * A simple renderer component for consistent page headers.
 */
const PageHeader = ({ title, description, category, backUrl, toggleEditFn, children, ActionButtonComponent }) => {
  return (
    <ComponentWrapper>
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <Header as='h1'>
              {backUrl ?
                <a href={backUrl}><Icon name="chevron left" /></a>
                : null}
              {title}
            </Header>
            {description ?
              <p className='description'>{description}</p>
              : null}
          </Grid.Column>
          <Grid.Column width={3}>
            {category ?
              <Label>{category}</Label>
              : null}
            {toggleEditFn ?
              <Icon name='pencil' size='large' className='floatRight' onClick={toggleEditFn}/>
              : null}
            {ActionButtonComponent ? ActionButtonComponent : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {children ?
        <Divider />
        : null}
      {children}
    </ComponentWrapper>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  backUrl: PropTypes.string,
  toggleEditFn: PropTypes.func,
  children: PropTypes.object,
  ActionButtonComponent: PropTypes.object
};

export default PageHeader;
