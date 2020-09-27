import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@paisidevs/tra-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';
import { client } from './apollo.config';
import { BUGSNAG_API_KEY } from './constants';
import App from './containers/App';
import { AppProvider } from './contexts';
import * as serviceWorker from './serviceWorker';

Bugsnag.start({
  apiKey: BUGSNAG_API_KEY || '',
  plugins: [new BugsnagPluginReact()],
});

// @ts-ignore - Bugsnag.getPlugin('react') possibly undefined
const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

const renderApp = (client: ApolloClient<NormalizedCacheObject>) =>
  ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Router>
            <AppProvider>
              <App />
            </AppProvider>
          </Router>
        </ApolloProvider>
      </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root'),
  );

renderApp(client);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
