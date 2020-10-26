import { ApolloError, ApolloQueryResult } from '@apollo/client';
import {
  BoxProps,
  Button,
  Flex,
  Heading,
  IToast,
  useToast,
} from '@chakra-ui/core';
import { theme } from '@paisidevs/tra-theme';
import React, { FC, Fragment } from 'react';
import { AlertTriangle } from 'react-feather';
import FillLoader from '../FillLoader';
import ScrollView from '../ScrollView';
import Toast from '../Toast';

export const SUCCESS_TOAST: IToast = {
  duration: 6000,
  isClosable: true,
  title: 'Success!',
  status: 'success',
  position: 'bottom',
};

export const ERROR_TOAST: IToast = {
  duration: 6000,
  title: 'Oops!',
  status: 'error',
  isClosable: true,
  position: 'bottom',
};

// FC components break when referencing React.ReactNode types for props
// https://stackoverflow.com/questions/54905376/type-error-jsx-element-type-null-undefined-is-not-a-constructor-functi

type GqlStateHandlerProps = BoxProps & {
  customError?: any;
  customLoader?: any;
  error: ApolloError | undefined;
  loading: boolean;
  onRetry?: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<any>>;
};

/**
 * @render react
 * @name GqlStateHandler component
 * @description Handles GraphQL state UI.
 * @example
 * <GqlStateHandler error={error} loading={loading}>
 *   {children}
 * </GqlStateHandler>
 */

const GqlStateHandler: FC<GqlStateHandlerProps> = ({
  children,
  customLoader,
  customError,
  error,
  loading,
  onRetry,
  ...rest
}) => {
  const toast = useToast();

  if (loading) {
    return customLoader || <FillLoader />;
  }

  if (error) {
    return (
      <ScrollView justifyContent="center" {...rest}>
        {customError || (
          <Flex
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            margin="0 auto"
            width="100%"
            maxWidth="320px"
            textAlign="center"
            onClick={() => {
              onRetry && onRetry();

              toast({
                ...ERROR_TOAST,
                render: ({ onClose }) => (
                  <Toast
                    status="error"
                    title="Error"
                    description="An error has occured"
                    onClose={onClose}
                  />
                ),
              });
            }}
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
            {onRetry && (
              <Button
                color="solid.teal"
                fontSize="sm"
                marginTop={2}
                minWidth="auto"
                rounded="lg"
                size="lg"
                variant="link"
              >
                Tap to retry
              </Button>
            )}
          </Flex>
        )}
      </ScrollView>
    );
  }

  return <Fragment>{children}</Fragment>;
};

export default GqlStateHandler;
