import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

const expense = {
  id: "1",
  description: 'add expense', 
  note: 'test add expense',
  amount: 100,
  createdAt: 0
};

describe('expense actions test', () => {
  test('removeExpense的Action的設定值', () => {
    const action = removeExpense({id: expense.id});
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expense.id
    });
  });

  test('editExpense的Action的設定值', () => {
    const action = editExpense(expense.id, {
      note: expense.note,
      description: expense.description
    });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: expense.id,
      updates: { 
        note: expense.note,
        description: expense.description
      }
    });
  });

  test('新增一筆有資料的expense', () => {
    const action = addExpense(expense);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expense,
        id: expect.any(String)
      }
    });
  });

  test('新增expense時不傳資料的預設值', () => {
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    })
  });
});

