import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: lightblue;
    text-align: left;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;

const StyledText = styled.div`
    margin: 4px;
`;
const StyledImg = styled.img`
    margin: auto;
    width: 50px;
    object-fit: cover;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const PopularCourses = ({ courses }) => (
    <Container>
        Popular:
        {courses.map((course) => (
            <StyledWrapper key={course.id}>
                <StyledText>
                    <p>{course.title}</p>
                    <p>{course.description.slice(0, 120)}</p>
                </StyledText>
                <StyledImg src={course.imgUrl} />
            </StyledWrapper>
        ))}
    </Container>
);
export default PopularCourses;
