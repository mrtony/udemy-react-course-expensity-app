import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'react-dates/initialize';



const store = configureStore();
// console.log(store.getState());
store.dispatch(addExpense({description: 'Water Bill', amount: 10020, createdAt: 1533138923636 }));
// store.dispatch(addExpense({description: 'Gas Bill', amount: 2000, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const el = document.getElementById("app");
ReactDOM.render(jsx, el);
