import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import UserCourses from './component';
import { userLesson } from '../__fixtures__/userLesson';

Enzyme.configure({ adapter: new Adapter() });

describe('UserCourses component', () => {
    const onClick = jest.fn();

    test('component matches snapshot', () => {
        const wrapper = shallow(<UserCourses courses={[userLesson]} onClick={onClick} />);
        expect(wrapper).toMatchSnapshot();
    });
});
