import configureMockStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';


const createMockStore = configureMockStore([thunk]);

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
      expense
    });
  });

  test('should add expense to database and store', (done) => {
    const defaultState = {};
    const store = createMockStore(defaultState);
    const expenseData = {
      description: 'add expense', 
      note: 'test add expense',
      amount: 100,
      createdAt: 12345678
    };

    store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });

  // test('should add expense with default value to database and store', () => {
    
  // });


  // test('新增expense時不傳資料的預設值', () => {
  //   const action = addExpense();
  //   expect(action).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0
  //     }
  //   })
  // });
});

