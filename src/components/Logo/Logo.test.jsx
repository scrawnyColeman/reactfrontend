import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Logo from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('Logo component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    });
});
