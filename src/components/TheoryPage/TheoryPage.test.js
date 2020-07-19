import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import TheoryPage from './component';
import { lesson } from '../__fixtures__/lesson';

jest.mock('react-router-dom', () => {
    const useLocation = jest.fn(() => ({ pathname: 'something', search: 'somewhere' }));
    return { useLocation };
});

Enzyme.configure({ adapter: new Adapter() });

describe('TheoryPage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<TheoryPage courseData={lesson} />);
        expect(wrapper).toMatchSnapshot();
    });
});
