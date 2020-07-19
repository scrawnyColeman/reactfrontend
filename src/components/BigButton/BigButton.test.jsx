import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import BigButton from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('BigButton component', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
        onClickMock.mockReset();
    });

    test('BigButton matches snapshot', () => {
        const wrapper = shallow(<BigButton text="BigButton" path="path" />);
        expect(wrapper).toMatchSnapshot();
    });
});
