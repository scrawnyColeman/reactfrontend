import React from 'react';
import spinner from '../../images/ajax-loader.gif';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const StyledImg = styled.img`
    z-index: 1000;
    margin: auto;
    padding-top: 18vh;
`;

const LoadingSpinner = () => (
    <Container>
        <StyledImg src={spinner} alt="loading" width="100px" />
    </Container>
);

export default LoadingSpinner;
