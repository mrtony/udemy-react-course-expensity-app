import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';

const expense = {
  description: 'Gum',
  note: 'my note',
  amount: 195,
  createdAt: +moment(0)
};

describe('ExpenseForm component', () => {
  describe('新增及編輯內容顯示', () => {
    test('依規格顯示正確的新增Expense內容', () => {
      const wrapper = shallow(<ExpenseForm  />);
      expect(wrapper).toMatchSnapshot();
    });
  
    test('依規格顯示正確的編輯已存在的Expense內容', () => {
      const wrapper = shallow(<ExpenseForm expense={expense}/>);
      expect(wrapper).toMatchSnapshot();
    });  
  });

  describe('UI行為測試', () => {
    test('當沒有輸入資料並點擊送出鍵, 要有錯誤訊息', () => {
      const wrapper = shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });
      expect(wrapper.state('error').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();
    });

    test('description欄位輸入資料會正確存入state', () => {
      const value = 'new description';
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('input').at(0).simulate('change', {
        target: { value }
      });
      expect(wrapper.state('description')).toBe(value);
    });

    test('note欄位輸入資料會正確存入state', () => {
      const value = 'new note';
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('textarea').simulate('change', {
        target: { value }
      });
      expect(wrapper.state('note')).toBe(value);
    });

    test('amount欄位輸入12.12資料會正確存入state', () => {
      const value = '12.12';
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('input').at(1).simulate('change', {
        target: { value }
      });
      expect(wrapper.state('amount')).toBe(value);
    });

    test('amount欄位輸入12.123資料不會存入state', () => {
      const value = '12.123';
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('input').at(1).simulate('change', {
        target: { value }
      });
      expect(wrapper.state('amount')).toBe('');
    });

    test('amount欄位輸入.12資料不會存入state', () => {
      const value = '.12';
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('input').at(1).simulate('change', {
        target: { value }
      });
      expect(wrapper.state('amount')).toBe('');
    });

    test('呼叫onSubmit prop送出正確的表單資料', () => {
      const onSubmitSpy = jest.fn();
      const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>);
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });
      expect(wrapper.state('error')).toBe('');
      expect(onSubmitSpy).toHaveBeenLastCalledWith(expense);
    });

    test('新日期被選擇後要存入', () => {
      const now = moment();
      const wrapper = shallow(<ExpenseForm />);
        wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
        expect(wrapper.state('createdAt')).toEqual(now);
    });

    test('should set calender focus on change', () => {
      const focused = false;
      const wrapper = shallow(<ExpenseForm />);
        wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
        expect(wrapper.state('calenderFocused')).toBe(focused);
    });
  })
})