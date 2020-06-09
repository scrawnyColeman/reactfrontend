import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import LearnPage from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('LearnPage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<LearnPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
