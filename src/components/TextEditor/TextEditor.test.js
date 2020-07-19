import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import TextEditor from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('TextEditor component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<TextEditor value={'Value'} />);
        expect(wrapper).toMatchSnapshot();
    });
});
