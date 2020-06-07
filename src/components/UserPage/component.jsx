import React from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import UserCourses from '../UserCourses/component';
import data from '../../data/courses.js';


const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 100px 20px 0 20px;
`;

const UserPage = () => (
    <StyledItemWrapper>
        <UserCourses courses={data.courses} />
        <PopularCourses courses={data.courses} />
    </StyledItemWrapper>
);

export default UserPage;
