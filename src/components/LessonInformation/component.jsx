import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import LessonDisplayPage from '../LessonDisplayPage/component';
import LessonPath from '../LessonPath/component';

const Container = styled.div`
    color: ${colours.primary}
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    height: 60vh;
`;

const LessonContainer = styled.div`
    margin: 10vh 0 0;
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
            <LessonContainer>
                <LessonPath text="Theory" id={id} path="theory" />
                <LessonPath text="Practice Questions" id={id} path="practical" />
                <LessonPath text="Full Lesson" id={id} path="lesson" />
            </LessonContainer>
        </Container>
    );
};

export default LessonInformation;
