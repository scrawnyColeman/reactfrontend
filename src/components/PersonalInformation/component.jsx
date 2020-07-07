import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';

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
`;
const StyledBtnContainer = styled.div`
    margin: auto;
`;

const PersonalInformation = ({ user }) => {
    return (
        <StyledItemWrapper>
            <StyledAccountInformation>
                <StyledAccountHead>Account Information</StyledAccountHead>
                <StyledAccountBody>
                    <p>
                        <StyledSpecialLabel>Username:</StyledSpecialLabel>
                        {` ${user.username}`}
                    </p>
                    <p>
                        <StyledSpecialLabel>Email:</StyledSpecialLabel>
                        {` ${user.email}`}
                    </p>
                </StyledAccountBody>
            </StyledAccountInformation>
            <StyledBtnContainer>
                <Button
                    onClick={() => window.location.pathname === '/'}
                    text="Edit Information"
                    size="small"
                    variant="outlined"
                    hierarchy="primary"
                />
            </StyledBtnContainer>
        </StyledItemWrapper>
    );
};

export default PersonalInformation;
