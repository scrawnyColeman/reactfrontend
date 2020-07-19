import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import CommentBlock from './component';
import { commentArray, childComments } from '../__fixtures__/comments';

Enzyme.configure({ adapter: new Adapter() });

describe('CommentBlock component', () => {
    test('component matches snapshot with no comments', () => {
        const wrapper = shallow(<CommentBlock childComments={[]} allComments={[]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('component matches snapshot with comments', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={commentArray} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('comments are rendered in order', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={commentArray} />);

        expect(wrapper.children().at(0).props().className).toBe('parentComment-100');
        expect(wrapper.children().at(1).props().className).toBe('parentComment-101');
    });
    test('nested comments are rendered in order', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={commentArray} />);

        expect(wrapper.find(CommentBlock).at(0).props().className).toBe('childComment-100');
        expect(wrapper.find(CommentBlock).at(1).props().className).toBe('childComment-101');
    });
});
