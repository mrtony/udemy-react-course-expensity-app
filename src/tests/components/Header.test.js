import React from 'react';
//import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// test('Should render Header correctly using snapshot', () => {
//   //使用jest snapshot的作法
//   const renderer = new ShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

describe('Header component', () => {
  test('至少要有1個<h1>tag using enzyme', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  test('<h1>tag文字為Expensity App - using enzyme', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Expensity App');
  });
  
  test('snapshot test - using enzyme', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
})




