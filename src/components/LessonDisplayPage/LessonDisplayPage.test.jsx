import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import LessonDisplayPage, { StyledListItem } from './component';

Enzyme.configure({ adapter: new Adapter() });

describe('LessonDisplayPage component', () => {
    const title = 'Lesson title';
    const language = { language: 'Javascript' };
    const description = 'JS lesson';
    const recommendedLessons = [
        { title: 'Java', id: '1' },
        { title: 'Recursion', id: '2' },
    ];

    test('component matches snapshot with recommended lessons', () => {
        const wrapper = shallow(
            <LessonDisplayPage
                title={title}
                language={language}
                description={description}
                recommendedLessons={recommendedLessons}
            />,
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledListItem).length).toBe(2);
    });

    test('component matches snapshot with no recommended lessons', () => {
        const wrapper = shallow(
            <LessonDisplayPage title={title} language={language} description={description} recommendedLessons={[]} />,
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledListItem).length).toBe(0);
    });
});
