import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PopularCourses, { StyledWrapper } from './component';
import { lesson } from '../__fixtures__/lesson';
import LoadingSpinner from '../LoadingSpinner/component';

Enzyme.configure({ adapter: new Adapter() });

describe('PopularCourses component', () => {
    const course = lesson.recommendedLessons[0];

    test('component matches snapshot when not oading', () => {
        const wrapper = shallow(<PopularCourses courses={[course]} isLoading={false} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledWrapper).length).toBe(1);
    });
    test('component matches snapshot when loading', () => {
        const wrapper = shallow(<PopularCourses courses={[course]} isLoading={true} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(LoadingSpinner).length).toBe(1);
    });
});
