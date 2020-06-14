import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PersonalInformation from './component';
import data from '../../data/user.js';

Enzyme.configure({ adapter: new Adapter() });

describe('PersonalInformation component', () => {
    test('component matches snapshot with comments', () => {
        const wrapper = shallow(<PersonalInformation user={data.user} />);
        expect(wrapper).toMatchSnapshot();
    });
});
