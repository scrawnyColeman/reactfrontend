import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumComment from './component';
import Button from '../Button/component';

Enzyme.configure({ adapter: new Adapter() });

global.window = { location: { pathname: '/hello' } };

describe('ForumComment component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumComment />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Button click updates window pathname', () => {
        const wrapper = shallow(<ForumComment />);
        wrapper.find(Button).simulate('click');

        expect(global.window.location.pathname).toBe('/');
    });
});
