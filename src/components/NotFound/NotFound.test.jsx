import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import NotFound from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('NotFound component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper).toMatchSnapshot();
    });
});
