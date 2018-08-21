import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import AppRouter from './routers/AppRouter';
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
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, el);
});

// monitor login/logout state
firebase.auth().onAuthStateChanged(user => {
  if (user)
    console.log('login');
  else
    console.log('logout');
});