import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

describe('filter reducer test', () => {
  test('filters reducer的default值', () => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });

  test('要異動sort by為by amount', () => {
    const currentState = { ...defaultFilters };
    const action = {type: 'SORT_BY_AMOUNT'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('amount');
  });

  test('要異動sort by為by date', () => {
    const currentState = { ...defaultFilters };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
  });

  test('要異動set start date資料', () => {
    const startDate = moment(0);
    const action = {type: 'SET_START_DATE', startDate};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
  });

  test('要異動set end date資料', () => {
    const endDate = moment(0);
    const action = {type: 'SET_END_DATE', endDate};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
  });

  test('要異動test的資料', () => {
    const action = {type: 'SET_TEXT_FILTER', text: 'e'};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('e');
  });
});