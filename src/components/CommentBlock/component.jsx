import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    padding-left: 16px;
`;

const CommentBlock = ({ childComments, allComments }) => (
    <Container>
        {childComments.map((comment) => (
            <StyledWrapper key={comment.commentid}>
                [{comment.authorusername}]: {comment.comment}
                <CommentBlock
                    childComments={allComments.filter((searchComment) => searchComment.parentid === comment.commentid)}
                    allComments={allComments}
                />
            </StyledWrapper>
        ))}
    </Container>
);
export default CommentBlock;
