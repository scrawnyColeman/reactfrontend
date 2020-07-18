import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    font-size: 2rem;
    margin: 30vh;
`;

const NotFoundPage = () => <StyledNotFound>Oops... something went wrong! Path not found.</StyledNotFound>;

export default NotFoundPage;
