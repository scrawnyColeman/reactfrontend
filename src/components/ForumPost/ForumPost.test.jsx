import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPost from './component';
import data from '../../data/forumposts.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPost component', () => {
    const id = '1';
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumPost data={data} id={id} />);
        expect(wrapper).toMatchSnapshot();
    });
});
