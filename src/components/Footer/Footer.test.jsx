import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import Footer from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
    function mockDate(isoDate) {
        global.Date = class {
            constructor() {
                return new Date(isoDate);
            }
        };
    }
    afterAll(() => {
        global.Date = Date;
    });

    test('component matches snapshot', () => {
        mockDate('2020-06-03T12:34:56z');
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
