import React, { Component } from 'react';
import { H2, Text } from '../../typography';
import { Box } from '../Box';

interface IErrorBoundaryProps {
  className?: string;
  template?: React.ReactNode;
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

export class ErrorBoundary extends Component<IErrorBoundaryProps, IState> {
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
      return (
        template || (
          <Box p={2}>
            <H2 mb={0}>Oops!</H2>
            <Text>An unexpected error has occured.</Text>
          </Box>
        )
      );
    }

    return this.props.children;
  }
}
