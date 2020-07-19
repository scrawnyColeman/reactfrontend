import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import ForumPreview, { StyledWrapper } from './component';
import { posts } from '../__fixtures__/post';

Enzyme.configure({ adapter: new Adapter() });

describe('ForumPreview component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<ForumPreview posts={[posts]} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledWrapper).length).toBe(1);
    });
});
