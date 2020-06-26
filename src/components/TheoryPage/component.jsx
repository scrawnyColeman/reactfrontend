import React from 'react';
import TheoryLessonContent from '../TheoryLessonContent/component';
import TheoryVisualAid from '../TheoryVisualAid/component';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import courseData from '../../data/courses';

const Container = styled.div`
    margin: 12vh auto 0 auto;
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
`;

const TheoryPage = () => {
    const location = useLocation();
    const lessonId = location.pathname.split('/theory/')[1];
    const { title: courseTitle, theory, youtubeLink } = courseData.courses.find((course) => course.id === lessonId);

    return (
        <Container>
            <StyledWrapper>
                <TheoryLessonContent id={lessonId} courseData={{ courseTitle, theory }} />
                <TheoryVisualAid id={lessonId} courseData={youtubeLink} />
            </StyledWrapper>
        </Container>
    );
};

export default TheoryPage;
