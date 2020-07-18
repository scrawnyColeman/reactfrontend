import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import LessonDisplayPage from '../LessonDisplayPage/component';
import LessonPathways from '../LessonPathways/component';

const Container = styled.div`
    color: ${colours.primary}
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    height: 60vh;
`;

const LessonInformation = ({ course }) => {
    const { id, title, language, description, recommendedLessons } = course;
    return (
        <Container>
            <LessonDisplayPage
                title={title}
                language={language}
                description={description}
                recommendedLessons={recommendedLessons}
            />
            <LessonPathways id={id} />
        </Container>
    );
};

export default LessonInformation;
