import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without craching', () => {
  const wrapper = shallow(<App />);
  console.log('wrapper.toString() ', wrapper.debug());
  expect(wrapper).toBeTruthy();
});
/*   const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
/* 

{
    "paymentId": "sdas78sf8asd345345345fwfwef",
    "paymentName": "Enel",
    "dueDate": "01/01/2020",
    "amount": 2000,
    "links": [
        {
            "href": "payment/Detail",
            "rel": "servipag",
            "type" : "GET"
        }
    ]
} */