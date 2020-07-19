import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PracticalCodeSubmission from './component';
import Button from '../Button/component';
Enzyme.configure({ adapter: new Adapter() });

describe('PracticalCodeSubmission component', () => {
    const getHelp = jest.fn();
    const toggleSubmission = jest.fn();
    const submitted = false;
    const data = { language: 'Java' };

    test('component matches snapshot', () => {
        const wrapper = shallow(
            <PracticalCodeSubmission
                getHelp={getHelp}
                toggleSubmission={toggleSubmission}
                submitted={submitted}
                data={data}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('getHelp prop called on Button click', () => {
        const wrapper = shallow(
            <PracticalCodeSubmission
                getHelp={getHelp}
                toggleSubmission={toggleSubmission}
                submitted={submitted}
                data={data}
            />,
        );
        wrapper.find(Button).at(0).simulate('click');

        expect(getHelp).toHaveBeenCalledTimes(1);
    });

    test('toggleSubmission prop called on Button click', () => {
        const wrapper = shallow(
            <PracticalCodeSubmission
                getHelp={getHelp}
                toggleSubmission={toggleSubmission}
                submitted={submitted}
                data={data}
            />,
        );
        wrapper.find(Button).at(1).simulate('click');

        expect(toggleSubmission).toHaveBeenCalledTimes(1);
    });

    test.each`
        Text               | Submitted
        ${'View Question'} | ${true}
        ${'View Solution'} | ${false}
    `('Toggle Button has correct text when submission is $Submitted', ({ Text, Submitted }) => {
        const wrapper = shallow(
            <PracticalCodeSubmission
                getHelp={getHelp}
                toggleSubmission={toggleSubmission}
                submitted={Submitted}
                data={data}
            />,
        );
        const mainButton = wrapper.find(Button).at(1);

        expect(mainButton.props().text).toBe(Text);
    });
});
