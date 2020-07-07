import React from 'react';
import spinner from '../../images/ajax-loader.gif';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
const StyledImg = styled.img`
    top: 30%;
    left: 48%;
    z-index: 1000;
    position: absolute;
`;

const LoadingSpinner = () => (
    <Container>
        <StyledImg src={spinner} alt="loading" />
    </Container>
);

export default LoadingSpinner;
