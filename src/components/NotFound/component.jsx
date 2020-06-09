import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    font-size: 48px;
    margin: auto;
`;

const NotFoundPage = () => <StyledNotFound>Oops... something went wrong! Path not found</StyledNotFound>;

export default NotFoundPage;
