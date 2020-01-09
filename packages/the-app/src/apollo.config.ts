import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  errorLink,
  InMemoryCache,
  loggerLink,
  RetryLink,
  setContext,
} from 'the-apollo-client';
import { GRAPHQL_ENDPOINT, JWT_LOCAL_STORAGE_KEY, NODE_ENV } from './constants';
import { albums } from './data';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const retryLink = new RetryLink();

let clientLink = ApolloLink.from([retryLink, authLink, httpLink]);

if (NODE_ENV === 'development') {
  clientLink = ApolloLink.from([loggerLink, errorLink, clientLink]);
}

const client = new ApolloClient({
  cache,
  link: clientLink,
});

cache.writeData({
  data: {
    albums: {
      edges: albums,
      __typename: 'AlbumEdges',
    },
  },
});

export default client;
