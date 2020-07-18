import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const Container = styled.div`
    height: 36px;
    width: 50vw;
    z-index: 1000;
    color: ${colours.primary};
    position: relative;
    font-size: 1.5rem;
    border: 2px solid red;
`;
const LoginError = ({ message }) => {
    return <Container>{message}</Container>;
};
export default LoginError;
