import React from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import data from '../../data/courses.js';
import CoursesSearch from '../CoursesSearch/component';


const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-gap: 32px;
    margin: 20vh 20px 0 20px;
`;

const LearnPage = () => (
    <StyledItemWrapper>
        <CoursesSearch courses={data.courses} />
        <PopularCourses courses={data.courses} />
    </StyledItemWrapper>
);

export default LearnPage;