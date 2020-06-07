import React from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import UserCourses from '../UserCourses/component';
import userCourses from '../../data/userCourses.json';
import popularCourses from '../../data/popularCourses.json';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 100px 20px 0 20px;
`;

const UserPage = () => (
    <StyledItemWrapper>
        <UserCourses courses={userCourses.courses} />
        <PopularCourses courses={popularCourses.courses} />
    </StyledItemWrapper>
);

export default UserPage;
