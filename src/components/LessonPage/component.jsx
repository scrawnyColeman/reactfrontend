import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LessonInformation from '../LessonInformation/component';
import coursedata from '../../data/courses';

const Container = styled.div`
    margin: 20vh 20px 0 20px;
`;

const LessonPage = () => {
    const location = useLocation();
    const lessonId = location.pathname.split('/learn/')[1];
    return (
        <Container>
            <LessonInformation lessonId={lessonId} courses={coursedata.courses} />
        </Container>
    );
};

export default LessonPage;
