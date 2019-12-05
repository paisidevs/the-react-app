import { Global, ThemeProvider } from '@app/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { globalStyles } from './global-styles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider>
    <React.Fragment>
      <Global styles={globalStyles} />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
