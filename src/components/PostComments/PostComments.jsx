import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPostCommentSection, { StyledWrapper } from './component';
import { fetchForumPostComments } from '../../data/forumposts';
import { post } from '../__fixtures__/post';

jest.mock('../../data/forumposts', () => ({ fetchForumPostComments: jest.fn() }));
jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('PostComment component', () => {
    const id = '1';

    test('component matches snapshot with no comments', () => {
        fetchForumPostComments.mockResolvedValue([post]);

        const wrapper = shallow(<ForumPostCommentSection id={id} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledWrapper).length).toBe(0);
    });
});
