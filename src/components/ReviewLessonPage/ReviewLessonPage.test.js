import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ReviewLessonPage from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewLessonPage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ReviewLessonPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
