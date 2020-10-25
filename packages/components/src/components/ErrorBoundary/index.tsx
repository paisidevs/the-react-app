import { Flex, Heading } from '@chakra-ui/core';
import { theme } from '@paisidevs/tra-theme';
import React, { Component } from 'react';
import { AlertTriangle } from 'react-feather';
import ScrollView from '../ScrollView';

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
          <ScrollView justifyContent="center">
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              margin="0 auto"
              width="100%"
              maxWidth="320px"
              textAlign="center"
            >
              <AlertTriangle
                color={theme.colors.red[500]}
                size="56px"
                strokeWidth={1.5}
              />
              <Heading
                as="h2"
                color="gray.500"
                fontSize="xl"
                marginTop={4}
                textAlign="center"
              >
                An error has occured
              </Heading>
            </Flex>
          </ScrollView>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
