import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage'

const expense = {
  id: "1",
  description: 'Gum',
  note: 'my note',
  amount: 195,
  createdAt: +moment(0)
};

let startEditExpense, startRemoveExpense, history, match, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn()};
  match = { params: {id: expense.id}};
  const props = {
    expense, startEditExpense, startRemoveExpense, history, match
  }
  wrapper = shallow(<EditExpensePage {...props} />);
});

describe('EditExpensePage Component Test', () => {
  test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle startEditExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
  });

  test('should handle startRemoveExpense correctly', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
  });
});