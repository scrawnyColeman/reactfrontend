import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PostComment from './component';
import data from '../../data/forumposts.js';
import CommentBlock from '../CommentBlock/component';

Enzyme.configure({ adapter: new Adapter() });

describe('PostComment component', () => {
    const id = '1';

    test('component matches snapshot with comments', () => {
        const wrapper = shallow(<PostComment id={id} data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('expect 2 comment blocks to be rendered', () => {
        const wrapper = shallow(<PostComment id={id} data={data} />);
        expect(wrapper.find(CommentBlock).length).toBe(2);
    });
});
