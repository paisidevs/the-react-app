import { Box, BoxProps, Heading } from '@chakra-ui/core';
import { ApolloError } from '@paisidevs/tra-apollo';
import React, { FC, Fragment, ReactNode } from 'react';

type GqlStateHandlerProps = BoxProps & {
  customError?: ReactNode;
  customLoader?: ReactNode;
  error: ApolloError | undefined;
  loading: boolean;
};

/**
 * @render react
 * @name GqlStateHandler component
 * @description GqlStateHandler component.
 * @example
 * <GqlStateHandler />
 */

const GqlStateHandler: FC<GqlStateHandlerProps> = ({
  children,
  customLoader,
  customError,
  error,
  loading,
  ...rest
}) => {
  if (error) {
    return (
      <Box {...rest}>
        {customError || (
          <Heading as="h4" mt={2} textAlign="center" color="error.500">
            Oops, something went wrong!
          </Heading>
        )}
      </Box>
    );
  }

  return <Fragment>{children}</Fragment>;
};

export default GqlStateHandler;
