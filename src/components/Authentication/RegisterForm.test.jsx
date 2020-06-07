import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import RegisterForm from './RegisterForm';

Enzyme.configure({ adapter: new Adapter() });

describe('RegisterForm component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<RegisterForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
