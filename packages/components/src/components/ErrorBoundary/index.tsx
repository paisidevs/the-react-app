import { Box, Heading, Text } from '@chakra-ui/core';
import React, { Component } from 'react';

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
      return (
        template || (
          <Box p={2}>
            <Heading as="h2" mb={0}>
              Oops!
            </Heading>
            <Text>An unexpected error has occured.</Text>
          </Box>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
