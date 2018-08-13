import configureMockStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';


const mockStoreCreator = configureMockStore([thunk]);

const expense = {
  id: "1",
  description: 'add expense', 
  note: 'test add expense',
  amount: 100,
  createdAt: 0
};

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expenseData[id] = {description, amount, note, createdAt: createdAt};
  });
  /*
  expenseData = {
    1: {},
    2: {}
    3: {}
  }
  */
 // 使用set(), key會是1, 2, 3, 而不是隨機產生, 因為我們不是用push
  database.ref('expenses').set(expenseData).then(() => done());
});

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
    const store = mockStoreCreator(defaultState);
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

  test('should set expenses action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });

  test('should get same expenses data from database', done => {
    const initialState = [];
    const store = mockStoreCreator(initialState);
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
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

