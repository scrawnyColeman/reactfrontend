import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LessonInformation from '../LessonInformation/component';
import coursedata, { fetchLessonById } from '../../data/courses';
import { errorLogger } from '../../data/errorLogger';
import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/component';

const Container = styled.div`
    margin: 20vh 20px 0 20px;
`;

const LessonPage = () => {
    const location = useLocation();
    const lessonId = location.pathname.split('/learn/')[1];

    const [lesson, setLesson] = useState(null);
    useEffect(() => {
        fetchLessonById(lessonId)
            .then((response) => {
                setLesson(response.data);
            })
            .catch(errorLogger);
    }, []);

    console.log(lesson);
    return lesson ? (
        <Container>
            <LessonInformation course={lesson} />
        </Container>
    ) : (
        <></>
    );
};

export default LessonPage;
