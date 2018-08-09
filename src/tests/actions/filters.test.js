import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate} from '../../actions/filters';

describe('filters reducer test', () => {
  test('產生設定start date的action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
    })
  });

  test('產生設定end date的action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
    })
  });

  test('設定搜尋字串', () => {
    const text = 'name';
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
    })
  });

  test('未傳入搜尋字串時的預設值', () => {
    const action  = setTextFilter();
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    });
  });
    
  test('設定排序使用date', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: 'SORT_BY_DATE'
    })
  });

  test('設定排序使用amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
    })
  });
});

