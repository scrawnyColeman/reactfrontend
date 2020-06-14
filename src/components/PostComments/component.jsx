import React from 'react';
import styled from 'styled-components';
import CommentBlock from '../CommentBlock/component';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;
const StyledText = styled.div`
    padding-right: 12px;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 0 8px 12px;
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
                                [{commentDetails.authorusername}]: {commentDetails.comment}
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
