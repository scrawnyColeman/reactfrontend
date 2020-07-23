import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ForumPost from '../ForumPost/component';
import ForumPostNewCommentForm from '../ForumPostNewCommentForm/component';
import { fetchForumPost } from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';
import { useState } from 'react';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin: 20vh 20px 0;
`;

const ForumPostPage = () => {
    const location = useLocation();
    const postId = location.pathname.split('/forum/')[1];
    const [post, setPost] = useState([]);
    const [isReplying, setReplying] = useState(false);
    const [replyingTo, setReplyingTo] = useState(null);

    useEffect(() => {
        fetchForumPost(postId)
            .then((response) => {
                setPost(response.data);
            })
            .catch(errorLogger);
    }, [postId]);

    return (
        <StyledItemWrapper>
            <ForumPost id={postId} data={post} setReplying={setReplying} setReplyingTo={setReplyingTo} />
            <ForumPostNewCommentForm isReplying={isReplying} replyingTo={replyingTo} />
        </StyledItemWrapper>
    );
};
export default ForumPostPage;
