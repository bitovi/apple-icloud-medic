import React from 'react';
import Component from 'react-view-model/component';
import { makeViewModel } from './data-provider.viewmodel-factory';
import { Message, Loader } from '@public/semantic-ui/index';

const LoadingStateComponent = ({ Loader }) => Loader;
const ErrorStateComponent = ({ Message }) => Message;
const NoDataStateComponent = ({ Message }) => Message;

/**
 * @module DataProvider
 * @parent components
 */
const factory = (WrappedComponent, Model, options) => {
  // allow consumers to pass a string dataProp for options
  if (typeof options === 'string') {
    options = { dataProp: options };
  }
  options = Object.assign({
    dataProp: 'data',
    LoadingStateComponent,
    ErrorStateComponent,
    NoDataStateComponent
  }, options);

  class DataProvider extends Component {
    static ViewModel = makeViewModel(Model, options.dataProp);
    static displayName = WrappedComponent.name || 'DataProvider';

    render() {
      const { isLoading, error, noData } = this.viewModel;
      const { LoadingStateComponent, ErrorStateComponent, NoDataStateComponent } = options;

      if (isLoading && LoadingStateComponent) {
        const LoaderComponent = <Loader active inline></Loader>;
        return <LoadingStateComponent Loader={LoaderComponent} {...this.viewModel} />;
      }
      if (error && ErrorStateComponent) {
        const ErrorMessage = (
          <Message error>
            Error: <b>{error.message || 'There was an error loading data for this component.'}</b>
          </Message>
        );
        return <ErrorStateComponent Message={ErrorMessage} {...this.viewModel} />;
      }
      if (noData && NoDataStateComponent) {
        const NoDataMessage = (
          <Message>There are no {options.dataProp} to display: {JSON.stringify(this.viewModel.query)}</Message>
        );
        return <NoDataStateComponent Message={NoDataMessage} {...this.viewModel}/>;
      }

      //!steal-remove-start
      const data = this.viewModel[this.viewModel.dataProp];
      if (this.viewModel.isSingleObject && data[0]) {
        throw new Error(`The data provider got a list when expecting a single object. This likely because the "ViewModel.${options.dataProp}.Type" is not set to a DefineList.`);
      }
      //!steal-remove-end
      return <WrappedComponent {...this.viewModel} />;
    }
  }

  return DataProvider;
};

export default factory;
