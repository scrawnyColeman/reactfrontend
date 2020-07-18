import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';
import TextField from '../TextField/component';
import { useHistory } from 'react-router-dom';

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

const PersonalInformation = ({ user }) => {
    const [editInfo, setEditInfo] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [username, setUsername] = useState(sessionStorage.getItem('activeUser').username);
    const [email, setEmail] = useState(sessionStorage.getItem('activeEmail'));
    const [userType, setUserType] = useState(sessionStorage.getItem('activeType'));
    const [password, setPassword] = useState('');
    const history = useHistory();

    return (
        <StyledItemWrapper>
            {checkPassword ? (
                <>
                    <StyledAccountInformation>
                        <StyledAccountHead>Verify Password</StyledAccountHead>
                        <StyledAccountBody>
                            <TextField
                                id="outlined-full-width"
                                label="Label"
                                size="small"
                                placeholder={'Enter your password'}
                                onChange={(e) => setPassword(e.target.value)}
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
                                    //call password check function
                                    //-->call PUT request
                                    //---->reset form
                                    setEditInfo(false);
                                    setCheckPassword(false);
                                }}
                                text="Submit"
                                size="small"
                                variant="outlined"
                                hierarchy="primary"
                                style={{ margin: '8px' }}
                            />
                        </StyledBtnContainer>
                    </StyledAccountInformation>
                </>
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
                                        label="Label"
                                        size="small"
                                        placeholder={'Enter new Username'}
                                        onChange={(e) => setUsername(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                )}
                            </StyledInfo>
                        </StyledAccountBody>
                    </StyledAccountInformation>
                    <StyledBtnContainer>
                        {editInfo ? (
                            <Button
                                onClick={() => {
                                    setCheckPassword(true);
                                    setEditInfo(false);
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
                    {userType === 'learner' && (
                        <StyledRequestTag onClick={() => console.log('requesting access')}>
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
