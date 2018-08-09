import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: moment(0)
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

const defaultFilters = {
  test: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

describe('expenses selector test', () => {
  test('使用text搜尋條件取得expenses', () => {
    const filters = { ...defaultFilters, text: 'e'};
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[1]]);
  });
  
  test('使用start date搜尋條件取得expenses', () => {
    const filters = { ...defaultFilters, startDate: moment(0)};
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0]]);
  });
  
  test('使用end date搜尋條件取得expenses', () => {
    const filters = { ...defaultFilters, endDate: moment(0)};
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[0], expenses[1]]);
  });
  
  test('使用sort by date排序expenses', () => {
    const filters = { ...defaultFilters};
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
  });
  
  test('使用sort by amount排序expenses', () => {
    const filters = { ...defaultFilters, sortBy: 'amount'};
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[1], expenses[2], expenses[0]]);
  });
});