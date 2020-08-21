import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonalInformation from '../PersonalInformation/component';
import UserCourses from '../UserCourses/component';
import { fetchUserLessons } from '../../data/apiCalls.js';
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

const ProfilePage = ({ setLocalUsername }) => {
    const user = {
        username: sessionStorage.getItem('activeUser'),
        email: sessionStorage.getItem('activeEmail'),
        id: sessionStorage.getItem('activeId'),
        userRole: sessionStorage.getItem('activeType'),
    };
    const [userLessons, setUserLessons] = useState(null);
    useEffect(() => {
        fetchUserLessons(user.id)
            .then((response) => {
                setUserLessons(response.data);
            })
            .catch(errorLogger);
    }, [user.id]);

    return userLessons ? (
        <StyledItemWrapper>
            <PersonalInformation user={user} setLocalUsername={() => setLocalUsername()} />
            {userLessons.length !== 0 ? (
                <UserCourses courses={userLessons} id={user.id} />
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
