import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenstListFilters';
import ExpensesSummary from './ExpensesSummary';

export default () => (
    <div>
      <h1>This is expense dashboard page!</h1>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
);