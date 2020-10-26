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
import App from './containers/App';
import { AppProvider } from './contexts';
import * as serviceWorker from './serviceWorker';

const renderApp = (client: ApolloClient<NormalizedCacheObject>) =>
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Router>
          <AppProvider>
            <App />
          </AppProvider>
        </Router>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );

renderApp(client);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
