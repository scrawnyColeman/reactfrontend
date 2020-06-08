import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;
const StyledCoursesContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
`;


const StyledText = styled.div`
    padding-right: 12px;
`;
const StyledImg = styled.img`
    margin: auto;
    width: 50px;
    object-fit: cover;
`;
const StyledHeading = styled.span`
    width:100%;
    color: ${colours.primary};
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 0 8px 12px;
`;
const StyledHorizontalLine = styled.hr`
    border: 2px solid ${colours.primary};
    border-radius: 3px;
    width: 100%;
`;
const PopularCourses = ({ courses }) => (
    <Container>
        <StyledLabel>Most Popular Lessons:</StyledLabel>
        <StyledCoursesContainer>
            {courses.map((course) => (
                <StyledWrapper key={course.id}>
                    <StyledText>
                        <StyledHeading>
                            <p>{course.title}</p>
                            <p>[{course.language.toUpperCase()}]</p>
                        </StyledHeading>
                        <p>{course.description.slice(0, 180)}{course.description.length > 150 && '...'}</p>
                        <span>
                            <p><span style={{ color: `${colours.primary}` }}>{course.activeUsers}</span> people have taken this course!</p>
                            <Button onClick={() => window.location.pathname === '/'} text="Go" size="small" variant="outlined" hierarchy="primary" />
                        </span>
                        <StyledHorizontalLine />
                    </StyledText>
                    <StyledImg src={course.icon} />
                </StyledWrapper>
            ))}
        </StyledCoursesContainer>
    </Container>
);
export default PopularCourses;
