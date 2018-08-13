import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: +moment(0)
}];

describe('expense reducer test', () => {
  test('測試expenses的初始值', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
  });

  test('測試移除一筆expense', () => {
    const action = { type: 'REMOVE_EXPENSE', id: "1"};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([]);
  });

  test('要移除的expense的id不存在', () => {
    const action = {type: 'ADD_EXPENSE', id: "-1"};
    const state = expensesReducer(expenses, action);
  });

  test('測試新增一筆expense', () => {
    const action = { type: 'ADD_EXPENSE', expense: {...expenses[0]}};
    const state = expensesReducer([], action);
    expect(state).toEqual([{...expenses[0]}]);
  });

  test('測試修改一筆expense的資料', () => {
    const currentState = [...expenses];
    const updatedExpense = {...expenses[0], note: 'my note'};
    const action = { type: 'EDIT_EXPENSE', id: '1', updates: {...updatedExpense}};
    const state = expensesReducer(currentState, action);
    expect(state[0].note).toEqual('my note');
  });

  test('測試修改一筆不存在expense id的資料', () => {
    const action = { type: 'EDIT_EXPENSE', id: '2'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  test('should set expenses', () => {
    const action = { type: 'SET_EXPENSES', expenses: [expenses[0]]};
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([expenses[0]]);
  });
});