

/*
type SortByTypes = 'date' | 'amount';

interface Expense {
  id: string; //uuid
  description: string;
  note: string;
  amount: number;
  createdAt: number;  //unix timestamp
}

interface Filter {
  text: string; //'rent', 'bill'
  sortBy: string; //SortByTypes
  startDate?: number; //unix timestamp
  endDate?: number; //unix timestamp
}

interface DemoState {
  expenses: Array<expense>;
  filters: Filter
}
*/











store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}));

store.dispatch(sortByAmount());
// store.dispatch(setStartDate(-2000));
// store.dispatch(setEndDate(999));
//store.dispatch(setTextFilter('rent'));
/*
// test remove expense
store.dispatch(removeExpense(expenseOne.expense.id));

// test edit expense
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

// test text filter
store.dispatch(setTextFilter('rent'));

//test sort by date/amount
store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//test start/end date
store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(2000));

console.log(store.getState());
*/

