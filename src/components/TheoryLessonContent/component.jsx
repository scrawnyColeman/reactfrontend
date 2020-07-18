import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const Container = styled.div`
    margin: auto auto;
    border: 2px solid ${colours.primary};
    height: 68vh;
    width: 48vw;
    overflow-y: scroll;
`;
const StyledWrapper = styled.div`
    padding: 16px;
    text-align: left;
`;
const StyledHead = styled.div`
    padding: 4px;
    font-size: 2rem;
    color: ${colours.primary};
`;
const StyledBody = styled.div`
    padding: 4px;
    font-size: 1.25rem;
    line-height: 36px;
`;

const TheoryLessonContent = ({ courseData }) => (
    <Container>
        <StyledWrapper>
            <StyledHead>{courseData.title}</StyledHead>
            <StyledBody>{courseData.theory}</StyledBody>
        </StyledWrapper>
    </Container>
);

export default TheoryLessonContent;
