import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

const existComponent = (componentName) => {
  const wrapper = setup();
  return wrapper.exists(componentName);
}

test('App renders without craching', () => {
  const wrapper = setup();
  const shallowWrapper = wrapper.find(".App");
  expect(shallowWrapper.debug()).toContain('App');
});

test('Renders counter display', () => {
  const wrapper = setup(); 
  expect(existComponent("#display-counter")).not.toBeFalsy();
});

test('Renders increment button', () => {
  const wrapper = setup();
  expect(existComponent("#counter-button")).not.toBeFalsy();
});

test('State counter start at 0', () => {
  const wrapper = setup();
  const initalCounterState = wrapper.state('counter');
  expect(initalCounterState).toBe(0);
});

test('Clicking increase button add one the counter', () => {
  const counter = 7;
  const wrapper = setup(null, { counter: 7 });
  let counterState = wrapper.state('counter');
  expect(counterState).toBe(7);

  const button = wrapper.find("#counter-button");
  button.simulate('click');
  counterState = wrapper.state('counter');
  expect(counterState).toBe(8);
})

test('Render decrement button', () => {
  const wrapper = setup();
  const decrementButton = wrapper.find('#decrement-button');
  expect(decrementButton.debug()).toContain('id="decrement-button"');
})

test('Clicking decrement button subtract one the counter', () => {
  const counter = 3;
  const wrapper = setup(null, { counter: counter });
  let counterState = wrapper.state('counter');
  expect(counterState).toBe(3);

  const button = wrapper.find("#decrement-button");
  button.simulate('click');
  counterState = wrapper.state('counter');
  expect(counterState).toBe(2);
})

test('Clicking decrement button subtract if counter > 0', () => {
  const wrapper = setup(null, { counter: 0 });
  let counterState = wrapper.state('counter');
  expect(counterState).toBe(0);

  const button = wrapper.find("#decrement-button");
  button.simulate('click');
  counterState = wrapper.state('counter');
  expect(counterState).toBe(0);
})

test('Clicking decrement button subtract if counter > 0 display error', () => {
  const wrapper = setup(null, { counter: 0 });
  let counterState = wrapper.state('counter');
  expect(counterState).toBe(0);

  const button = wrapper.find("#decrement-button");
  button.simulate('click');
  expect(existComponent(".error-msg")).not.toBeFalsy();
})
