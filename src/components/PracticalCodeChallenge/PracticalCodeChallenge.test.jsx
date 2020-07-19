import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import PracticalCodeChallenge, { StyledHint } from './component';
import { codeSnippet } from '../__fixtures__/codeSnippet';

Enzyme.configure({ adapter: new Adapter() });

describe('PracticalCodeChallenge component', () => {
    const language = 'Java';

    test('component matches snapshot when code is submitted', () => {
        const wrapper = shallow(<PracticalCodeChallenge language={language} submitted={true} data={codeSnippet} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledHint).text()).toBe(
            "If you are struggling to come to terms with this solution, select 'Get Help' to access the lessons forum discussion page.",
        );
    });
    test('component matches snapshot when code is not submitted', () => {
        const wrapper = shallow(<PracticalCodeChallenge language={language} submitted={false} data={codeSnippet} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledHint).text()).toBe('hint here');
    });
});
