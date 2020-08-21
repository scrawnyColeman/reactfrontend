import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPage from './component';
import { useLocation } from 'react-router-dom';
import { fetchAllForumPosts } from '../../data/apiCalls.js';
import ForumPreview from '../ForumPreview/component';
import ForumPostPage from '../ForumPostPage/component';

jest.mock('../../data/apiCalls.js', () => ({
    fetchAllForumPosts: jest.fn(),
}));

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something', search: 'somewhere' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPage component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('component matches snapshot with URL param', () => {
        fetchAllForumPosts.mockResolvedValueOnce({ data: { post: { id: 1 } } });
        const wrapper = shallow(<ForumPage />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ForumPreview).length).toBe(0);
        expect(wrapper.find(ForumPostPage).length).toBe(1);
    });
    test('component matches snapshot with no URL param', () => {
        useLocation.mockReturnValue({ search: null });
        fetchAllForumPosts.mockResolvedValueOnce({ data: { post: { id: 1 } } });
        const wrapper = shallow(<ForumPage />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ForumPreview).length).toBe(1);
        expect(wrapper.find(ForumPostPage).length).toBe(0);
    });
});
