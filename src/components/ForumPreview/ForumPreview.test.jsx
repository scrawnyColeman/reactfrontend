import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPreview from './component';
import data from '../../data/forumposts.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPreview component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumPreview posts={data.posts} />);
        expect(wrapper).toMatchSnapshot();
    });
});
