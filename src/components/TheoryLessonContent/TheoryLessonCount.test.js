import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import TheoryLessonCount from './component';
import { lesson } from '../__fixtures__/lesson';

Enzyme.configure({ adapter: new Adapter() });

describe('TheoryLessonCount component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<TheoryLessonCount courseData={lesson} />);
        expect(wrapper).toMatchSnapshot();
    });
});
