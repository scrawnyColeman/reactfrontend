import React, { useEffect, useState } from 'react';
import TheoryLessonContent from '../TheoryLessonContent/component';
import TheoryVisualAid from '../TheoryVisualAid/component';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { fetchLessonById } from '../../data/courses';
import { errorLogger } from '../../data/errorLogger';

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
    const [lesson, setLesson] = useState(null);
    useEffect(() => {
        fetchLessonById(lessonId)
            .then((response) => {
                setLesson(response.data);
            })
            .catch(errorLogger);
    });
    console.log(lesson);
    return lesson ? (
        <Container>
            <StyledWrapper>
                <TheoryLessonContent id={lessonId} courseData={lesson} />
                <TheoryVisualAid id={lessonId} courseData={lesson.youtubeLink} />
            </StyledWrapper>
        </Container>
    ) : (
        <></>
    );
};

export default TheoryPage;
