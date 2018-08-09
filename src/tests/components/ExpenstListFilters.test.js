import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenstListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  const props = {
    setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, filters
  }

  wrapper = shallow(<ExpenseListFilters {...props} />)
});

describe('ExpenseListFilters component test', () => {
  test('should ExpenseListFilters render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should set ExpenseListFilters render with altFilters correctly', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('state.focusedInput should set correctly', () => {
    const focusedInput = true;
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput);
    expect(wrapper.state('focusedInput')).toBe(focusedInput);
  });

  test('props.setStartDate should set correctly', () => {
    const between = {startDate: 1, endDate: 2};
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(between);
    expect(setStartDate).toHaveBeenLastCalledWith(between.startDate);
  });

  test('props.setEndDate should set correctly', () => {
    const between = {startDate: 1, endDate: 2};
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(between);
    expect(setEndDate).toHaveBeenLastCalledWith(between.endDate);
  });

  test('props.setTextFilter should set correctly', () => {
    const value = 'Gas';
    wrapper.find('input').at(0).simulate('change', {
      target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  test('props.sortByDate should set correctly', () => {
    const value = 'date';
    wrapper.find('select').at(0).simulate('change', {
      target: {value}
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
  });

  test('props.sortByAmount should set correctly', () => {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
      target: {value}
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
  });
})
