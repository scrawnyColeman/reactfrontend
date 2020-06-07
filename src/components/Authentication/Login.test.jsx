import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

describe('Login component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});
