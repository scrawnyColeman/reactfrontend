import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    font-size: 42px;
    margin: 20vh;
`;

const NotFoundPage = () => <StyledNotFound>Oops... something went wrong! Path not found. Dumb ass</StyledNotFound>;

export default NotFoundPage;
