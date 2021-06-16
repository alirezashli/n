import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import Reducer from './redux/reducers/Index';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

React.icons = icons

// axios.defaults.baseURL = '/';
// axios.defaults.baseURL = 'http://185.211.59.175/api/';
// axios.defaults.headers.common['token'] = localStorage.getItem("token");
// axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={createStore(Reducer)}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
