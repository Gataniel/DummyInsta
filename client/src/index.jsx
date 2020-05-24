import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './redux/store/configureStore';
import { verifyCredentials } from './redux/actions/redux-token-auth-config';

import pNotify from './init/pNotofy';

import Routes from './components/Routes';

import 'bulma/css/bulma.css';
import './styles/index.scss';

const store = configureStore();

verifyCredentials(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
