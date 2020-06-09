import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import HomePage from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('HomePage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).toMatchSnapshot();
    });
});
