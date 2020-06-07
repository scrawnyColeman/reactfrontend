import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../images/logo.png';

const StyledLogo = styled.img`
    max-width: 95%;
`;

const Logo = () => <StyledLogo src={LogoImg} alt="Logo" />;

export default Logo;
