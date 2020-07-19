import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPostPage from './component';

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something', search: 'somewhere' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPostPage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumPostPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
