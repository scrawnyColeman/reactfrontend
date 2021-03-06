import { useHistory } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Logo from '../Logo/component';
import AuthenticationService from '../AuthenticationService/AuthenticationService';

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 12px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;
    text-transform: uppercase;
    @media only screen and (max-width: 968px) {
        display: block;
    }
`;
export const StyledNavLinks = styled.a`
    color: ${colours.primary};
    padding: 10px 0;
    font-size: 1.5rem;
    text-decoration: none;
`;
const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-around;
`;
const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 968px) {
        display: none;
    }
`;
const Header = ({ username }) => {
    const history = useHistory();
    return username ? (
        <StyledHeader>
            <StyledNavBar>
                <StyledNavLinks href={`/profile/${username}`} username>
                    {username}
                </StyledNavLinks>
                <StyledNavLinks href="/learn">Learn</StyledNavLinks>
                <StyledNavLinks href="/forum">Forum</StyledNavLinks>
                <StyledNavLinks
                    href="/login"
                    onClick={() => AuthenticationService.logout().then(() => history.push({ pathname: '/login' }))}
                >
                    logout
                </StyledNavLinks>
            </StyledNavBar>
            <StyledLogoContainer>
                <Logo />
            </StyledLogoContainer>
        </StyledHeader>
    ) : (
        <></>
    );
};

export default Header;
