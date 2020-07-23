import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const Container = styled.div`
    height: 36px;
    padding-top: 4px;
    width: 72vw;
    z-index: 1000;
    color: ${colours.primary};
    margin: 0 auto;
    font-size: 1.1rem;
    border-bottom: 2px solid ${colours.secondary};
`;

const LoginError = ({ message }) => <Container>{message}</Container>;

export default LoginError;
