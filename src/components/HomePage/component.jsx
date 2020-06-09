import React from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import UserCourses from '../UserCourses/component';
import data from '../../data/courses.js';


const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    margin: 20vh 20px 0 20px;
`;

const HomePage = () => (
    <StyledItemWrapper>
        <UserCourses courses={data.courses} />
        <PopularCourses courses={data.courses} />
    </StyledItemWrapper>
);

export default HomePage;