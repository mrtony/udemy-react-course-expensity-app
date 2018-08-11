import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('Expenses Component test', () => {
  test('should render component with single expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />)
    expect(wrapper).toMatchSnapshot();
  });

  test('should render component with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={123456789} />)
    expect(wrapper).toMatchSnapshot();
  });
});