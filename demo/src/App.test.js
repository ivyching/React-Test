
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new EnzymeAdapter()});

test('renders learn react link', () => {

  const wrapper= shallow(<App/>)

  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();

});
