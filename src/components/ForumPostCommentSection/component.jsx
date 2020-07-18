import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentBlock from '../CommentBlock/component';
import { colours } from '../../constants/styles';
import CommentButton from '../CommentButton/component';
import { fetchForumPostComments } from '../../data/forumposts';
import { errorLogger } from '../../data/errorLogger';
const Container = styled.div`
    text-align: left;
    max-height: 390px;
    overflow-y: scroll;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    font-size: 1.25rem;
    margin: 0 8px;
`;
const StyledText = styled.div`
    font-size: 1rem;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 12px 8px 12px;
    color: ${colours.primary};
    font-size: 1.5rem;
`;
const StyledComment = styled.div`
    max-width: 85%;
`;
const StyledCommentButtons = styled.div`
    margin: auto 0;
`;
const StyledCommentUsername = styled.span`
    color: ${colours.primary};
`;
const StyledCommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ForumPost = ({ id }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetchForumPostComments(id)
            .then((response) => {
                setComments(response.data);
            })
            .catch(errorLogger);
    }, [id]); //call when data changes
    return (
        <Container>
            <StyledLabel>Discussion:</StyledLabel>
            {comments.map(
                (commentDetails) =>
                    commentDetails.parentId === 0 && (
                        <StyledWrapper key={commentDetails.id}>
                            <StyledText>
                                <StyledCommentContainer>
                                    <StyledComment>
                                        <StyledCommentUsername>
                                            [{commentDetails.author.username}]:
                                        </StyledCommentUsername>{' '}
                                        {commentDetails.comment}
                                    </StyledComment>
                                    <StyledCommentButtons>
                                        <CommentButton text="Reply" size="small" />
                                        {commentDetails.author.username &&
                                            commentDetails.author.username.toLowerCase() ===
                                                sessionStorage.getItem('activeUser').toLowerCase() && (
                                                <CommentButton text="Edit" size="small" />
                                            )}
                                        {commentDetails.author.username &&
                                            commentDetails.author.username.toLowerCase() ===
                                                sessionStorage.getItem('activeUser').toLowerCase() && (
                                                <CommentButton text="Delete" size="small" />
                                            )}
                                    </StyledCommentButtons>
                                </StyledCommentContainer>
                                {comments.length > 0 && (
                                    <CommentBlock
                                        childComments={comments.filter(
                                            (comment) => comment.parentId === commentDetails.id,
                                        )}
                                        allComments={comments}
                                    />
                                )}
                            </StyledText>
                        </StyledWrapper>
                    ),
            )}
        </Container>
    );
};

export default ForumPost;
