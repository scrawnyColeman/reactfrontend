import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ForumPost from '../ForumPost/component';
import forumposts from '../../data/forumposts';
import ForumPostNewCommentForm from '../ForumPostNewCommentForm/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin: 20vh 20px 0 20px;
`;

const ForumPostPage = () => {
    const location = useLocation();
    const postId = location.pathname.split('/forum/')[1];

    return (
        <StyledItemWrapper>
            <ForumPost id={postId} data={forumposts} />
            <ForumPostNewCommentForm />
        </StyledItemWrapper>
    );
};
export default ForumPostPage;
