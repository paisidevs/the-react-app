import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-roboto';
import client from './apollo.config';
import App from './containers/App';
import AuthenticationProvider from './contexts/AuthenticationProvider.context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

// Persist "debug" package's enable state in localStorage
if (process.env.NODE_ENV !== 'production') {
  window.localStorage.setItem('debug', 'tra:*');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
