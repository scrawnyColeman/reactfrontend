import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPage from './component';
import { useLocation } from 'react-router-dom';
import { fetchAllForumPosts } from '../../data/apiCalls.js';
import ForumPreview from '../ForumPreview/component';

jest.mock('../../data/apiCalls.js', () => ({
    fetchAllForumPosts: jest.fn(),
}));

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something', search: 'somewhere' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPage component', () => {
    console.log = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation((fn) => fn());
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('component matches snapshot with URL param', () => {
        fetchAllForumPosts.mockResolvedValueOnce({ data: { post: { id: 1 } } });

        const wrapper = shallow(<ForumPage />);
        const preview = wrapper.find(ForumPreview);

        expect(wrapper).toMatchSnapshot();
        expect(fetchAllForumPosts).toHaveBeenCalledTimes(1);
        expect(preview.length).toBe(0);
    });
    test('component matches snapshot with no URL param', () => {
        useLocation.mockReturnValue({ search: null });
        fetchAllForumPosts.mockResolvedValueOnce({ data: { post: { id: 1 } } });

        const wrapper = shallow(<ForumPage />);
        const preview = wrapper.find(ForumPreview);

        expect(wrapper).toMatchSnapshot();
        expect(preview.length).toBe(1);
        expect(fetchAllForumPosts).toHaveBeenCalledTimes(1);
    });
});
