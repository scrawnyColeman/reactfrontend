import React from 'react';
import styled from 'styled-components';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 100px 20px 0 20px;
`;

const ForumPage = () => (
    <StyledItemWrapper>
        <div>hello world</div>
    </StyledItemWrapper>
);

export default ForumPage;
