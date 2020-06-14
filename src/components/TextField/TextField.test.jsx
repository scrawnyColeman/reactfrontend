import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import TextField from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('TextField component', () => {
    const onChangeMock = jest.fn();

    beforeEach(() => {
        onChangeMock.mockReset();
    });

    test('primary TextField matches snapshot', () => {
        const wrapper = shallow(<TextField placeholder="primary TextField" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('secondary TextField matches snapshot', () => {
        const wrapper = shallow(<TextField hierarchy="secondary" placeholder="Second TextField" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('large TextField matches snapshot', () => {
        const wrapper = shallow(<TextField size="large" placeholder="Second TextField" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('multiline TextField matches snapshot', () => {
        const wrapper = shallow(<TextField size="large" placeholder="Second TextField" multiline={true} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('onChange prop is called when TextField is clicked', () => {
        const wrapper = shallow(<TextField hierarchy="secondary" placeholder="TextField" onChange={onChangeMock} />);
        wrapper.props().onChange();
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
