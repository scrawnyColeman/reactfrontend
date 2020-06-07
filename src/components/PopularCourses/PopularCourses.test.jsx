import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PopularCourses from './component';
import data from '../../data/courses.js'

Enzyme.configure({ adapter: new Adapter() });

describe('PopularCourses component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<PopularCourses courses={data.courses} />);
        expect(wrapper).toMatchSnapshot();
    });
});
