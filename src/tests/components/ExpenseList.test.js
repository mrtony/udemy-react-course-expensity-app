import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: moment(0)
}];

describe('ExpenseList component', () => {
  test('傳入只有1個expense的expenses陣列', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('傳入空的expenses陣列', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
})