import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { RetryLink } from 'apollo-link-retry';
import localForage from 'localforage';

import { GRAPHQL_ENDPOINT, NODE_ENV } from '@app/constants';
import { loggerLink, errorLink } from '@app/utils/apollo-utilities';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const retryLink = new RetryLink();

const devHttpLink = ApolloLink.from([
  loggerLink,
  errorLink,
  retryLink,
  httpLink,
]);

const prodHttpLink = ApolloLink.from([
  retryLink,
  httpLink,
]);

persistCache({
  cache,
  storage: localForage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
});

const client = new ApolloClient({
  cache,
  link: NODE_ENV === 'production' ? prodHttpLink : devHttpLink,
});

export default client;
