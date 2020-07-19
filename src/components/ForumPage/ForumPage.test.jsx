import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPage from './component';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something', search: 'somewhere' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPage component', () => {
    test('component matches snapshot with URL param', () => {
        const wrapper = shallow(<ForumPage />);
        expect(wrapper).toMatchSnapshot();
    });
    test('component matches snapshot with no URL param', () => {
        useLocation.mockReturnValue({ search: null });
        const wrapper = shallow(<ForumPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
