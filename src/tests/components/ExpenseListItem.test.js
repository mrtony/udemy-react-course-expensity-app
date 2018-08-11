import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

const expense = {
  description: 'Gum',
  note: 'my note',
  amount: 195,
  createdAt: moment(0).format('YYYY/MM/DD')
};

describe('ExpenseListItem component', () => {
  test('should ExpenseListItem render without expense correctly', () => {
    const wrapper = shallow(<ExpenseListItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should ExpenseListItem render with id and expense correctly', () => {
    const wrapper = shallow(<ExpenseListItem id="1" {...expense} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Route to create page should correctly', () => {
    const wrapper = shallow(<ExpenseListItem id="1" />);
    const linkTo = wrapper.find('Link').prop('to');
    expect(linkTo).toBe('/edit/1');
  });
})