import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PersonalInformation from './component';
import { user } from '../__fixtures__/user';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(window, 'sessionStorage', {
    value: {
        getItem: jest.fn(() => ({
            activeUsers: { username: 'thomas' },
            activeEmail: 'email@email.com',
            activeType: 'admin',
        })),
        setItem: jest.fn(),
    },
});

describe('PersonalInformation component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<PersonalInformation user={user} />);
        expect(wrapper).toMatchSnapshot();
    });
});
