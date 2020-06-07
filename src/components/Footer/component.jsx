import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    padding: 12px 0;
    width: 100%;
    color: ${colours.secondary};
`;

const Footer = () => {
    const date = new Date();
    return <StyledFooter>{`© Njoy Learning ${date.getFullYear()}. All rights reserved`}</StyledFooter>;
};

export default Footer;
