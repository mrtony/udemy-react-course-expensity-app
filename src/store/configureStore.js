import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

export default () => {
    // Create store
    const enhancer = compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
    }), enhancer);

    return store;
}

