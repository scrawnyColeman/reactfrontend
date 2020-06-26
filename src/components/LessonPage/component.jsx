import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LessonInformation from '../LessonInformation/component';
import PrerequisiteQuizPage from '../PrerequisiteQuizPage/component';
import coursedata from '../../data/courses';

const Container = styled.div`
    margin: 20vh 20px 0 20px;
`;

const LessonPage = () => {
    const location = useLocation();
    const lessonId = location.pathname.split('/learn/')[1];
    const [prerequisitesMet, setPrerequisitesMet] = useState(true);
    // const thisLesson = coursedata.courses.find(course => course.id === lessonId)
    // thisLesson.prereqs.length === 0 ? setPrerequisitesMet(true) : setPrerequisitesMet(prerequisitesMet)
    return (
        <Container>
            {prerequisitesMet ? (
                <LessonInformation lessonId={lessonId} courses={coursedata.courses} />
            ) : (
                <PrerequisiteQuizPage id={lessonId} onSubmit={setPrerequisitesMet} />
            )}
        </Container>
    );
};

export default LessonPage;
