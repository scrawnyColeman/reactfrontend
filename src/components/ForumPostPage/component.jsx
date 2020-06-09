import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
//import ForumPost from '../ForumPost/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 20vh 20px 0 20px;
`;

const ForumPostPage = () => {
    const location = useLocation();
    const postId = location.pathname.split('/forum/')[1];

    return (
        <StyledItemWrapper>
            {/* <ForumPost id={postId} />
            <PostCommentSection id={postId}/> */}
        </StyledItemWrapper>
    );
};
export default ForumPostPage;
