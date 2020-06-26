import React from 'react';
import LessonPath from '../LessonPath/component';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10vh 0 0 0;
`;

const LessonPathways = ({ id }) => (
    <Container>
        <LessonPath text="Theory" id={id} path="theory" />
        <LessonPath text="Practice Questions" id={id} path="practical" />
        <LessonPath text="Full Lesson" id={id} path="lesson" />
    </Container>
);

export default LessonPathways;
