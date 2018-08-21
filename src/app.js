import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import {firebase} from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const el = document.getElementById("app");
ReactDOM.render(<p>載入中...</p>, el);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, el);
    hasRendered = true;
  }
};

// monitor login/logout state
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses())
    .then(() => {
      renderApp();
      if (history.location.pathname === '/')
        history.push('/dashboard');
    });
  }
  else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});