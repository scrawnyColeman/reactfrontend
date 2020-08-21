import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';
import TextField from '../TextField/component';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { fetchUserByUsernameOrEmail, updateUserInfo } from '../../data/apiCalls';
import Error from '../LoginError/component';

const StyledItemWrapper = styled.div`
    display: grid;
    margin: 0 auto;
    width: 50vw;
    height: 100%
    overflow: hidden;
`;
const StyledAccountHead = styled.div`
    font-size: 2.5rem;
    margin: 24px auto;
    color: ${colours.primary};
    text-align: center;
`;
const StyledAccountBody = styled.div`
    margin: 0 auto;
    font-size: 1.5rem;
    height: 100%;
`;
const StyledAccountInformation = styled.div`
    display: grid;
`;
const StyledSpecialLabel = styled.span`
    color: ${colours.primary};
    padding-right: 4px;
`;
const StyledInfo = styled.div`
    margin: 24px;
`;
const StyledBtnContainer = styled.div`
    margin: auto;
`;
const StyledUsername = styled.span`
    padding: 8px;
`;
const StyledRequestTag = styled.a`
    &:hover {
        color: ${colours.primary};
    }
`;
const StyledErrorMessages = styled.div``;

const PersonalInformation = ({ user, setLocalUsername }) => {
    const history = useHistory();
    const userId = sessionStorage.getItem('activeId');
    const [editInfo, setEditInfo] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [userType, setUserType] = useState(sessionStorage.getItem('activeType'));
    const [password, setPassword] = useState('');
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [usernameAndEmailTaken, setUsernameAndEmailTaken] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);

    const updateCredentials = (userId, username, email, password) => {
        fetchUserByUsernameOrEmail(username, email)
            .then((response) => {
                if (response.data[0] === null && response.data[1] === null) {
                    updateUserInfo(userId, username, email, password)
                        .then((response) => {
                            sessionStorage.setItem(
                                'authToken',
                                `Basic ${window.btoa(`${response.data.username}:${password}`)}`,
                            );
                            sessionStorage.setItem('activeUser', response.data.username);
                            sessionStorage.setItem('activeEmail', response.data.email);
                            setLocalUsername(username);
                            history.push({ pathname: `/profile/${sessionStorage.getItem('activeUser')}` });
                        })
                        .catch((error) => console.log(error));
                } else if (response.data[0] !== null && response.data[1] === null) {
                    setUsernameTaken(true);
                } else if (response.data[0] === null && response.data[1] !== null) {
                    setEmailTaken(true);
                } else if (response.data[0] !== null && response.data[1] !== null) {
                    setUsernameAndEmailTaken(true);
                }
            })
            .catch((error) => console.log(error));
    };
    return (
        <StyledItemWrapper>
            {checkPassword ? (
                <StyledAccountInformation>
                    <StyledAccountHead>Verify Password</StyledAccountHead>
                    <StyledAccountBody>
                        <TextField
                            id="outlined-full-width"
                            placeholder={'Enter your password'}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </StyledAccountBody>
                    <StyledBtnContainer>
                        <Button
                            onClick={() => {
                                setCheckPassword(false);
                                setEditInfo(false);
                            }}
                            text="Cancel"
                            size="small"
                            variant="outlined"
                            hierarchy="primary"
                            style={{ margin: '8px' }}
                        />
                        <Button
                            onClick={() => {
                                const currentToken = sessionStorage.getItem('authToken');
                                const tokenWithPassword = `Basic ${window.btoa(
                                    `${sessionStorage.getItem('activeUser')}:${password}`,
                                )}`;
                                setEditInfo(false);
                                if (currentToken === tokenWithPassword) {
                                    setCheckPassword(false);
                                    updateCredentials(userId, username, email, password);
                                }
                            }}
                            text="Submit"
                            size="small"
                            variant="outlined"
                            hierarchy="primary"
                            style={{ margin: '8px' }}
                        />
                    </StyledBtnContainer>
                </StyledAccountInformation>
            ) : (
                <>
                    <StyledAccountInformation>
                        <StyledAccountHead>Account Information</StyledAccountHead>
                        <StyledAccountBody>
                            <StyledInfo>
                                <StyledUsername>
                                    <StyledSpecialLabel>Username:</StyledSpecialLabel>
                                    {user.username}
                                </StyledUsername>
                                {editInfo && (
                                    <TextField
                                        id="outlined-full-width"
                                        placeholder={'Enter new Username'}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            setUsernameTaken(false);
                                            setEmailTaken(false);
                                            setUsernameAndEmailTaken(false);
                                        }}
                                    />
                                )}
                            </StyledInfo>
                            <StyledInfo>
                                <StyledSpecialLabel>Email:</StyledSpecialLabel>
                                {user.email}
                                {editInfo && (
                                    <TextField
                                        rows={1}
                                        placeholder={'Enter new Email address'}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setUsernameTaken(false);
                                            setEmailTaken(false);
                                            setUsernameAndEmailTaken(false);
                                        }}
                                    />
                                )}
                            </StyledInfo>
                        </StyledAccountBody>
                    </StyledAccountInformation>
                    <StyledBtnContainer>
                        {editInfo ? (
                            <Button
                                onClick={() => {
                                    if (username && email) {
                                        setCheckPassword(true);
                                        setEditInfo(false);
                                    }
                                }}
                                text="Submit"
                                size="small"
                                variant="outlined"
                                hierarchy="primary"
                            />
                        ) : (
                            <Button
                                onClick={() => {
                                    setEditInfo(true);
                                }}
                                text="Edit Information"
                                size="small"
                                variant="outlined"
                                hierarchy="primary"
                            />
                        )}
                    </StyledBtnContainer>
                    <StyledErrorMessages>
                        {emailTaken && <Error message={'Email is in use'} />}
                        {usernameTaken && <Error message={'Username is in use'} />}
                        {usernameAndEmailTaken && <Error message={'Username and Email are taken'} />}
                    </StyledErrorMessages>
                    {userType === 'user' && (
                        <StyledRequestTag
                            onClick={() => {
                                const userId = sessionStorage.getItem('activeId');
                                axios
                                    .put(`http://localhost:8080/njoy/users/${userId}/roles/2`)
                                    .then(() => setUserType('author'))
                                    .then(() => sessionStorage.setItem('activeType', 'author'))
                                    .catch((error) => console.log(error));
                            }}
                        >
                            Become an Author
                        </StyledRequestTag>
                    )}
                    {userType === 'author' && (
                        <StyledRequestTag onClick={() => history.push({ pathname: `/lessons/new` })}>
                            Create Lesson
                        </StyledRequestTag>
                    )}
                    {userType === 'admin' && (
                        <StyledRequestTag onClick={() => history.push({ pathname: `/lessons/review` })}>
                            Review Submissions
                        </StyledRequestTag>
                    )}
                </>
            )}
        </StyledItemWrapper>
    );
};

export default PersonalInformation;
