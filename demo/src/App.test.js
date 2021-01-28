
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";

Enzyme.configure({adapter:new EnzymeAdapter()});

const setup=()=>shallow(<App/>);
const findByTestAttribute=(wrapper,value)=>wrapper.find(`[data-test='${value}']`);

test("renders without errors",()=>{

  const wrapper=setup();

  const appComponent=findByTestAttribute(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
});

//按鈕是否顯示
test("render button",()=>{

  const wrapper=setup();

  const button=findByTestAttribute(wrapper,'increment-button');
  expect(button.length).toBe(1);
});

//counter 顯示的數字是否正確
test("counter display",()=>{

  const wrapper=setup();

  const counterDisplay=findByTestAttribute(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});

//counter 的初始值是否為0
test("counter start at 0",()=>{

  const wrapper=setup();

  const count=findByTestAttribute(wrapper,"count").text();

  expect(count).toBe("0");

});
//按下按鈕 counter是否加一
test("clicking on button increments counter display",()=>{

  const wrapper = setup();

  const button=findByTestAttribute(wrapper,'increment-button');

  button.simulate('click');

  const count=findByTestAttribute(wrapper,"count").text();

  expect(count).toBe("1");

});