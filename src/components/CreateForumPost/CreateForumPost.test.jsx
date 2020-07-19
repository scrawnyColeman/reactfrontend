import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import CreateForumPost from './component';
import Button from '../Button/component';

Enzyme.configure({ adapter: new Adapter() });

global.window = { location: { pathname: '/hello' } };

describe('CreateForumPost component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<CreateForumPost />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Button click updates window pathname', () => {
        const wrapper = shallow(<CreateForumPost />);
        wrapper.find(Button).simulate('click');

        expect(global.window.location.pathname).toBe('/');
    });
});
