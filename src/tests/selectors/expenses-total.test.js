import selectedExpensesTotal from '../../selectors/expenses-total';
import { expenses } from '../fixtures/expenses';
import { filter } from 'rsvp';

describe('Selected Expenses Total selector test', () => {
  test('if no expenses, return 0', () => {
    const total = selectedExpensesTotal([]);
    expect(total).toBe(0);
  });

  test('computed single expenses total correctly', () => {
    const total = selectedExpensesTotal([expenses[0]]);
    expect(total).toBe(20010);
  });

  test('computed selected expenses total correctly', () => {
    const total = selectedExpensesTotal(expenses);
    const actualTotal = expenses.map(e => e.amount).reduce((acc, curr) => acc + curr, 0);  
    expect(total).toBe(actualTotal);
  });
});