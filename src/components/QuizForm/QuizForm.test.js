import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import QuizForm from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('QuizForm component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<QuizForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
