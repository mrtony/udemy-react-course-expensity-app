import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

describe('Login Page test suit', () => {
  test('LoginPage should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should startLogin be called after button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });
});