
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new EnzymeAdapter()});

test("renders without errors",()=>{

  const wrapper=shallow(<App/>);

  const appComponent=wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

//按鈕是否顯示
test("render button",()=>{

});

//counter 顯示的數字是否正確
test("counter display",()=>{

});

//counter 的初始值是否為0
test("counter start at 0",()=>{

});
//按下按鈕 counter是否加一
test("clicking on button increments counter display",()=>{

});