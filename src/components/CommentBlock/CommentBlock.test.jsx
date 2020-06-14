import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import CommentBlock from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('CommentBlock component', () => {
    const allComments = [];
    const childComments = [];

    test('component matches snapshot with no', () => {
        const wrapper = shallow(<CommentBlock childComments={childComments} allComments={allComments} />);
        expect(wrapper).toMatchSnapshot();
    });
});
