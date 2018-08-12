import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage'

const expense = {
  id: "1",
  description: 'Gum',
  note: 'my note',
  amount: 195,
  createdAt: +moment(0)
};

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

describe('AddExpensePage Component Test', () => {
  test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expense);
  });
})