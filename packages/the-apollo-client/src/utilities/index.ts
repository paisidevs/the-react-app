import { ApolloLink, NextLink, Operation } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { useMedia } from '../hooks';

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

const formatError = (message: any, path?: any) => {
  const color = usePrefersDarkMode()
    ? {
        gray: '#AAA',
        black: '#CCC',
      }
    : {
        gray: 'gray',
        black: '#333',
      };

  if (path) {
    const headerCss = [
      `color: ${color.gray}; font-weight: lighter`, // title
      `color: ${color.black}; font-weight: 600`, // message
      `color: ${color.gray}; font-weight: lighter`, // on
      `color: ${color.black}; font-weight: 600`, // path
      `color: ${color.gray}; font-weight: lighter`, // request.
    ];

    const parts = ['%c message'];

    parts.push(`%c${message}`);
    parts.push('%con');
    parts.push(`%c${path.join('.')}`);
    parts.push('%crequest');

    return [parts.join(' '), ...headerCss];
  }

  const headerCss = [
    `color: ${color.gray}; font-weight: lighter`, // title
    `color: ${color.black}; font-weight: 600`, // message
  ];

  const parts = ['%c message'];

  parts.push(`%c${message}`);

  return [parts.join(' '), ...headerCss];
};

const formatMessage = (
  operationType: string,
  operation: any,
  elapsed?: any,
) => {
  const color = usePrefersDarkMode()
    ? {
        gray: '#AAA',
        black: '#DDD',
      }
    : {
        gray: 'gray',
        black: '#222',
      };

  const headerCss = [
    `color: ${color.gray}; font-weight: lighter`, // title
    `color: ${
      operationType === 'query'
        ? '#02B875'
        : operationType === 'mutation'
        ? '#03A9F4'
        : '#FF3567'
    };`, // operationType
    `color: ${color.black};`, // operationName
  ];

  const parts = ['%c apollo'];

  parts.push(`%c${operationType}`);
  parts.push(`%c${operation.operationName}`);

  if (elapsed) {
    parts.push(`%c(in ${elapsed} ms)`);
    headerCss.push(`color: ${color.gray}; font-weight: lighter;`); // time
  }

  return [parts.join(' '), ...headerCss];
};

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation }: any) => {
    if (graphQLErrors) {
      const errorType = 'graphQLError';
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      graphQLErrors.map(({ message, path }: any) => {
        const error = formatError(message, path);
        console.log(...error);
        return { message, path };
      });

      // TODO: Check if removing argument breaks intended functionality.
      // @ts-ignore - Expects 0 arguments.
      console.groupEnd(...group);
    }

    if (networkError) {
      const errorType = 'networkError';
      const group = formatMessage(errorType, operation);

      console.groupCollapsed(...group);

      const error = formatError(networkError.message);
      console.log(...error);

      // TODO: Check if removing argument breaks intended functionality.
      // @ts-ignore - Expects 0 arguments.
      console.groupEnd(...group);
    }
  },
);

export const loggerLink = new ApolloLink(
  (operation: Operation, forward?: NextLink): any => {
    const startTime = new Date().getTime();

    return (
      forward &&
      forward(operation).map((result) => {
        // @ts-ignore - TS infers FragmentDefinitionNode instead of OperationDefinitionNode
        const operationType = operation.query.definitions[0].operation;
        const elapsed = new Date().getTime() - startTime;

        const group = formatMessage(operationType, operation, elapsed);
        console.groupCollapsed(...group);

        console.log('INIT', operation);
        console.log('RESULT', result);

        // TODO: Check if removing argument breaks intended functionality.
        // @ts-ignore - Expects 0 arguments.
        console.groupEnd(...group);

        return result;
      })
    );
  },
);
