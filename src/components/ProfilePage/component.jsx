import React from 'react';
import styled from 'styled-components';
import PersonalInformation from '../PersonalInformation/component';
import UserCourses from '../UserCourses/component';
import courseData from '../../data/courses.js';
import userData from '../../data/user.js';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin: 20vh 20px 0;
`;

const ProfilePage = () => {
    const { courses } = courseData;
    const { user } = userData;
    const { activeCourses } = user;

    return (
        <StyledItemWrapper>
            <PersonalInformation user={user} />
            {activeCourses.length !== 0 ? <UserCourses courses={courses} id={user.id} /> : <div>hello</div>}
        </StyledItemWrapper>
    );
};
export default ProfilePage;
