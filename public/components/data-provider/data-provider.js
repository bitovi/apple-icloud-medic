import React from 'react';
import Component from 'react-view-model/component';
import { makeViewModel } from './data-provider.viewmodel-factory';
import { Message, Loader } from '@public/semantic-ui/index';

/**
 * @module DataProvider
 * @parent components
 */
const factory = (WrappedComponent, Model, dataProp) => {
  class DataProvider extends Component {
    static ViewModel = makeViewModel(Model, dataProp);
    static displayName = WrappedComponent.name || 'DataProvider';

    render() {
      const { isLoading, dataProp, error } = this.viewModel;
      if (isLoading) {
        return <Loader active inline>Loading {dataProp}</Loader>;
      }
      if (error) {
        return <Message error>
          Error: <b>{error.message || 'There was an error loading data for this component.'}</b>
        </Message>;
      }
      return <WrappedComponent {...this.viewModel} />;
    }
  }

  return DataProvider;
};

export default factory;
