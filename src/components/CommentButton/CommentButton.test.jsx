import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Button from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('Button component', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
        onClickMock.mockReset();
    });

    test('primary button matches snapshot', () => {
        const wrapper = shallow(<Button text="primary button" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('secondary button matches snapshot', () => {
        const wrapper = shallow(<Button hierarchy="secondary" text="Second button" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('large button matches snapshot', () => {
        const wrapper = shallow(<Button size="large" text="Second button" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('onClick prop is called when button is clicked', () => {
        const wrapper = shallow(<Button hierarchy="secondary" text="Button" onClick={onClickMock} />);
        wrapper.props().onClick();
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
