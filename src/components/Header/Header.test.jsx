import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Header, {StyledNavLinks} from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
    global.window = {
        location: { href:"/" },
    };
    test('component matches snapshot', () => {
        const wrapper = shallow(<Header userName="Thomas"/>);
        expect(wrapper).toMatchSnapshot();
    });

    test.each`
        linkNumber | expectedHref
            ${0} | ${'/learn'}
            ${1} | ${'/forum'}
            ${2} | ${'/profile/{id}'}
    `('href is set onClick of navigation link', ({ linkNumber, expectedHref }) => {
        const wrapper = shallow(<Header userName="Thomas"/>);
        expect(wrapper.find(StyledNavLinks).at(linkNumber).props().href).toBe(expectedHref);
    });
});
