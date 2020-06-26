import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import CommentButton from '../CommentButton/component';

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
                    <StyledCommentButtons>
                        {comment.nestingvalue < '2' && <CommentButton text="Reply" size="tiny" />}
                        {comment.authorusername.toLowerCase() ===
                            sessionStorage.getItem('activeUser').toLowerCase() && (
                            <CommentButton text="Edit" size="tiny" />
                        )}
                        {comment.authorusername.toLowerCase() ===
                            sessionStorage.getItem('activeUser').toLowerCase() && (
                            <CommentButton text="Delete" size="tiny" />
                        )}
                    </StyledCommentButtons>
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
