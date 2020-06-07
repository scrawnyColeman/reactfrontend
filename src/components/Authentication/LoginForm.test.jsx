import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import LoginForm from './LoginForm';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginForm component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
