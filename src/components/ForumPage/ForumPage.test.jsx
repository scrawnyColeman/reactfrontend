import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPage from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPage component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
