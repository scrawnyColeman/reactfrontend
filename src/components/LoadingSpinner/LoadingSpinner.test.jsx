import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import LoadingSpinner from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('LoadingSpinner component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<LoadingSpinner />);
        expect(wrapper).toMatchSnapshot();
    });
});
