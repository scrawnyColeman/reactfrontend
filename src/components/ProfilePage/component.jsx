import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonalInformation from '../PersonalInformation/component';
import UserCourses from '../UserCourses/component';
import { fetchUserLessons } from '../../data/courses.js';
import userData from '../../data/user.js';
import { useLocation } from 'react-router-dom';
import BigButton from '../BigButton/component';
import { errorLogger } from '../../data/errorLogger';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20vh 20px 0;
    height: 60vh;
`;

const StyledButtonContainer = styled.div`
    width: 30vw;
    margin: auto;
`;

const ProfilePage = () => {
    const location = useLocation().search;
    const [param, setParam] = useState(location);
    const { user } = userData;
    const userId = sessionStorage.getItem('activeId') || null;
    const [userLessons, setUserLessons] = useState();

    useEffect(() => {
        fetchUserLessons(userId)
            .then((response) => {
                setUserLessons(response.data);
            })
            .catch(errorLogger);
    }, [userId]);
    console.log(userLessons);
    return userLessons ? (
        <StyledItemWrapper>
            <PersonalInformation user={user} />
            {userLessons.length !== 0 ? (
                <UserCourses courses={userLessons} id={userId} onClick={setParam} />
            ) : (
                <StyledButtonContainer>
                    <BigButton text={`Begin Learning`} path={`/learn`} />
                </StyledButtonContainer>
            )}
        </StyledItemWrapper>
    ) : (
        <div />
    );
};
export default ProfilePage;
