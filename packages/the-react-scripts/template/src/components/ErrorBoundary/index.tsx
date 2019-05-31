import React, { Component } from 'react';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('ErrorBoundary');

interface IErrorBoundaryProps {
  className?: string;
  template?: any;
}

interface IState {
  error?: object;
  errorInfo?: object;
  hasError: boolean;
}

/**
 * @render react
 * @name ErrorBoundary container
 * @description ErrorBoundary container.
 * @example
 * <ErrorBoundary />
 */

// eslint-disable-next-line react/prefer-stateless-function
class ErrorBoundary extends Component<IErrorBoundaryProps, IState> {
  state: IState = {
    hasError: false,
  };

  public componentDidCatch(error: object, errorInfo: object) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    });
  }

  public render() {
    const { template } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return template || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
