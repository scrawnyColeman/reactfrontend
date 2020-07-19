import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import QuizQuestionForm from './component';
import TextField from '../TextField/component';

Enzyme.configure({ adapter: new Adapter() });

describe('QuizQuestionForm component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<QuizQuestionForm questionNumber={8} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(TextField).length).toBe(7);
    });
});
