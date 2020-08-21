import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Header from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
    global.window = {
        location: { href: '/' },
    };
    test('component matches snapshot', () => {
        const wrapper = shallow(<Header userName="Thomas" />);
        expect(wrapper).toMatchSnapshot();
    });
});
