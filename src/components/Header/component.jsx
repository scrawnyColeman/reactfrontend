import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Logo from '../Logo/component';

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
`;
export const StyledNavLinks = styled.a`
    color: ${colours.primary};
    padding: 10px 0;
    font-size: 1.5rem;
    text-decoration: none;
`;
const StyledNavBar = styled.div`
    display:flex;
    justify-content: space-around;
`;
const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Header = ({ userName }) => (
    <StyledHeader>
        <StyledNavBar>
            <StyledNavLinks href='/learn'>LEARN</StyledNavLinks>
            <StyledNavLinks href='/forum'>FORUM</StyledNavLinks>
            {userName ? <StyledNavLinks href='/profile/{id}'>{userName}</StyledNavLinks> : <StyledNavLinks href='/login'>Log in</StyledNavLinks>}
        </StyledNavBar>
        <StyledLogoContainer>
            <Logo />
        </StyledLogoContainer>
    </StyledHeader>
);

export default Header;
