import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import App from './app';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    test('component matches snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
