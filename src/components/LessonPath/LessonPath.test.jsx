import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import LessonPath from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('LessonPath component', () => {
    const text = 'Java';
    const id = '12345';
    const path = '/path';

    test('component matches snapshot', () => {
        const wrapper = shallow(<LessonPath text={text} id={id} path={path} />);
        expect(wrapper).toMatchSnapshot();
    });
});
