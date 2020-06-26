import React from 'react';
import styled from 'styled-components';
import CommentBlock from '../CommentBlock/component';
import { colours } from '../../constants/styles';
import CommentButton from '../CommentButton/component';

const Container = styled.div`
    text-align: left;
    max-height: 390px;
    overflow-y: scroll;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;
const StyledText = styled.div`
    font-size: 1rem;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 0 8px 12px;
    color: ${colours.primary};
    font-size: 1.25rem;
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

const ForumPost = ({ id, data }) => {
    const { comments } = data.posts.find((post) => post.id === id);
    return (
        <Container>
            <StyledLabel>Discussion:</StyledLabel>
            {comments.map(
                (commentDetails) =>
                    commentDetails.parentid === '0' && (
                        <StyledWrapper key={commentDetails.commentid}>
                            <StyledText>
                                <StyledCommentContainer>
                                    <StyledComment>
                                        <StyledCommentUsername>
                                            [{commentDetails.authorusername}]:
                                        </StyledCommentUsername>{' '}
                                        {commentDetails.comment}
                                    </StyledComment>
                                    <StyledCommentButtons>
                                        <CommentButton text="Reply" size="tiny" />
                                        {commentDetails.authorusername.toLowerCase() ===
                                            sessionStorage.getItem('activeUser').toLowerCase() && (
                                            <CommentButton text="Edit" size="tiny" />
                                        )}
                                        {commentDetails.authorusername.toLowerCase() ===
                                            sessionStorage.getItem('activeUser').toLowerCase() && (
                                            <CommentButton text="Delete" size="tiny" />
                                        )}
                                    </StyledCommentButtons>
                                </StyledCommentContainer>
                                {comments.length > 0 && (
                                    <CommentBlock
                                        childComments={comments.filter(
                                            (comment) => comment.parentid === commentDetails.commentid,
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
