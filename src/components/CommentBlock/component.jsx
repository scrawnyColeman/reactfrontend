import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    margin: 12px 0 12px 24px;
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

const CommentBlock = ({ childComments, allComments }) => (
    <Container>
        {childComments.map((comment) => (
            <StyledWrapper key={comment.commentid} className={`parentComment-${comment.commentid}`}>
                <StyledCommentContainer>
                    <StyledComment>
                        <StyledCommentUsername>[{comment.authorusername}]:</StyledCommentUsername> {comment.comment}
                    </StyledComment>
                    <StyledCommentButtons>btn btn btn</StyledCommentButtons>
                </StyledCommentContainer>

                <CommentBlock
                    childComments={allComments.filter((searchComment) => searchComment.parentid === comment.commentid)}
                    allComments={allComments}
                    className={`childComment-${comment.commentid}`}
                />
            </StyledWrapper>
        ))}
    </Container>
);
export default CommentBlock;
