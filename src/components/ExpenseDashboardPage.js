import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenstListFilters';

export default () => (
    <div>
      <h1>This is expense dashboard page!</h1>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
);