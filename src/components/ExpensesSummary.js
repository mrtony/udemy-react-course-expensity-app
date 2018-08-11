import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedExpenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => (
  <div>
    <h3>Expenses Summary</h3>
    <p>Viewing {expenseCount > 1? 'expenses': 'expense'} {expenseCount} totaling {numeral(expensesTotal).format('$0,0.00')}</p>
  </div>
);

const mapStateToProps = state => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectedExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);