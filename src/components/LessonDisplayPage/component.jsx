import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 8px;
    padding 16px;
    border: 2px solid ${colours.primary}
`;

const StyledHead = styled.div``;
const StyledTitle = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
`;
const StyledDesc = styled.div`
    font-size: 1.5rem;
    color: ${colours.secondary}
    margin-top: 5vh;
    text-align: left;
`;
const StyledBody = styled.div`
    text-align: left;
`;

export const StyledListItem = styled.li`
    margin: 4px;
    color: ${colours.secondary};
`;

const LessonDisplayPage = ({ title, language, description, recommendedLessons }) => (
    <Container>
        <StyledHead>
            <StyledTitle>
                <span>{title}</span>
                <span>[{language.language}]</span>
            </StyledTitle>
            <StyledDesc>{description}</StyledDesc>
        </StyledHead>
        <StyledBody>
            {recommendedLessons.length > 0 ? (
                <div>Before beginning this course, it is adviced that you have knowledge of the following:</div>
            ) : (
                <div>
                    There are no prerequisities for this lesson! Good luck and don't be afraid to visit the forum for
                    help.
                </div>
            )}
            {recommendedLessons.length > 0 &&
                recommendedLessons.map(
                    (prereq) => prereq && <StyledListItem key={prereq.id}>{prereq.title}</StyledListItem>,
                )}
        </StyledBody>
    </Container>
);

export default LessonDisplayPage;
