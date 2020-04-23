import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  errorLink,
  InMemoryCache,
  loggerLink,
  RetryLink,
  setContext,
} from '@paisidevs/tra-apollo';
import { GRAPHQL_ENDPOINT, NODE_ENV } from './constants';
import { getCognitoUserToken } from './utilities';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT || 'http://localhost:1337/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from (local/session) storage if it exists
  const token = getCognitoUserToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const retryLink = new RetryLink();

// @ts-ignore - incompatible types in `retryLink` and `authLink`
let clientLink = ApolloLink.from([retryLink, authLink, httpLink]);

if (NODE_ENV === 'development') {
  // @ts-ignore - incompatible types in `retryLink` and `authLink`
  clientLink = ApolloLink.from([loggerLink, errorLink, clientLink]);
}

const client = new ApolloClient({
  cache,
  link: clientLink,
});

export default client;
