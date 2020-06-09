import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPage from './component';

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPage component', () => {
    test('component matches snapshot with URL param', () => {
        const wrapper = shallow(<ForumPage />);
        expect(wrapper).toMatchSnapshot();
    });
    test('component matches snapshot with URL param', () => {
        const wrapper = shallow(<ForumPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
