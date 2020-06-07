import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import UserCourses from './component';
import data from '../../data/userCourses.json'

Enzyme.configure({ adapter: new Adapter() });

describe('UserCourses component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<UserCourses courses={data.courses}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
