import React from 'react';
import styled from 'styled-components';
import ForumPreview from '../ForumPreview/component'
import data from '../../data/forumposts.js';
import CreateForumPost from '../CreateForumPost/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20vh 20px 0 20px;
`;

const ForumPage = () => (
    <StyledItemWrapper>
        <ForumPreview posts={data.posts} />
        <CreateForumPost />
    </StyledItemWrapper>
);

export default ForumPage;
