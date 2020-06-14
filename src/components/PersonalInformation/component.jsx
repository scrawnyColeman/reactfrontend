import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import DefaultImg from '../../images/defaultimg.jpg';
import Button from '../Button/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 0 auto;
    width: 50vw;
    height: 100%
    overflow: hidden;
`;
const StyledProfile = styled.div`
    width: 100%;
    text-align: left;
`;
const StyledTop = styled.div`
    display: grid
    grid-template-columns: 1fr 1fr;
`;
const StyledProgress = styled.div`
    text-align: left;
`;
const StyledProgressHeader = styled.div`
    font-size: 1.5rem;
    color: ${colours.primary};
`;
const StyledProgressAnalytics = styled.div`
    font-size: 1.12rem;
    color: ${colours.secondary};
    padding: 4px 0;
`;
const StyledAccountCard = styled.div`
    margin: 0 auto;
    height: 100%;
`;
const StyledAccountInformation = styled.div`
    margin: auto 4px;
`;
const ImgCropper = styled.div`
    max-width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
`;
const StyledImg = styled.img`
    display: inline;
    margin: 0 auto;
    margin-left: -25%; //centers the image
    height: 100%;
`;

const StyledSpecialLabel = styled.span`
    color: ${colours.primary};
`;

const PersonalInformation = ({ user }) => {
    const { activeCourses, languagesUsed, completedCourses } = user;
    const numberOfLessons = activeCourses.length;
    const numberOfLanguages = languagesUsed.length;
    const completedLessons = completedCourses.length;
    return (
        <StyledItemWrapper>
            <StyledProfile>
                <StyledAccountCard>
                    <StyledTop>
                        <ImgCropper>
                            <StyledImg src={DefaultImg} />
                        </ImgCropper>
                        <StyledAccountInformation>
                            <StyledProgressHeader>Account Information</StyledProgressHeader>
                            <p>
                                <StyledSpecialLabel>Username:</StyledSpecialLabel> {user.username}
                            </p>
                            <p>
                                <StyledSpecialLabel>Email:</StyledSpecialLabel> {user.email}
                            </p>
                            <Button
                                onClick={() => window.location.pathname === '/'}
                                text="Edit Information"
                                size="small"
                                variant="outlined"
                                hierarchy="primary"
                            />
                        </StyledAccountInformation>
                    </StyledTop>
                </StyledAccountCard>
            </StyledProfile>
            <StyledProgress>
                {numberOfLessons > 5 && numberOfLessons < 10 && (
                    <StyledProgressHeader>You're making progress!</StyledProgressHeader>
                )}
                {numberOfLessons > 9 && <StyledProgressHeader>Fantastic progress!</StyledProgressHeader>}
                {numberOfLessons <= 5 && <StyledProgressHeader>Keep Going! </StyledProgressHeader>}
                <StyledProgressAnalytics>
                    {' '}
                    Lessons in progress: <StyledSpecialLabel>{numberOfLessons}</StyledSpecialLabel>
                </StyledProgressAnalytics>
                <StyledProgressAnalytics>
                    {' '}
                    Completed lessons: <StyledSpecialLabel>{completedLessons}</StyledSpecialLabel>
                </StyledProgressAnalytics>
                <StyledProgressAnalytics>
                    {' '}
                    Languages used: <StyledSpecialLabel>{numberOfLanguages}</StyledSpecialLabel>
                </StyledProgressAnalytics>
            </StyledProgress>
        </StyledItemWrapper>
    );
};

export default PersonalInformation;
