import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import CommentBlock from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('CommentBlock component', () => {
    const allComments = [
        {
            commentid: '1',
            comment: 'This is the best test',
            parentid: '0',
            authorusername: 'Testy McTestFace',
        },
        {
            commentid: '2',
            comment: 'Im just happy to be here',
            parentid: '0',
            authorusername: 'Tester Zero',
        },
    ];
    const childComments = [
        {
            commentid: '3',
            comment: 'This is the best test',
            parentid: '1',
            authorusername: 'Testy McTestFace',
        },
        {
            commentid: '4',
            comment: 'Im just happy to be here',
            parentid: '1',
            authorusername: 'Tester Zero',
        },
    ];

    test('component matches snapshot with no comments', () => {
        const wrapper = shallow(<CommentBlock childComments={[]} allComments={[]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('component matches snapshot with comments', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={allComments} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('comments are rendered in order', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={allComments} />);

        expect(wrapper.children().at(0).props().className).toBe('parentComment-3');
        expect(wrapper.children().at(1).props().className).toBe('parentComment-4');
    });
    test('nested comments are rendered in order', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={allComments} />);

        expect(wrapper.find(CommentBlock).at(0).props().className).toBe('childComment-3');
        expect(wrapper.find(CommentBlock).at(1).props().className).toBe('childComment-4');
    });
});
