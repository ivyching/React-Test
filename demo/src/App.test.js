
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";

Enzyme.configure({adapter:new EnzymeAdapter()});

test("renders without errors",()=>{

  const wrapper=shallow(<App/>);

  const appComponent=wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

//按鈕是否顯示
test("render button",()=>{

  const wrapper=shallow(<App/>);

  const button=wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

//counter 顯示的數字是否正確
test("counter display",()=>{

  const wrapper=shallow(<App/>);

  const counterDisplay=wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

//counter 的初始值是否為0
test("counter start at 0",()=>{

});
//按下按鈕 counter是否加一
test("clicking on button increments counter display",()=>{

});