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

const CommentBlock = ({ childComments, allComments }) => {
    return (
        <Container>
            {childComments.map((comment) => (
                <StyledWrapper key={comment.id} className={`parentComment-${comment.id}`}>
                    <StyledCommentContainer>
                        <StyledComment>
                            <StyledCommentUsername>[{comment.author.username}]:</StyledCommentUsername>{' '}
                            {comment.comment}
                        </StyledComment>
                        <StyledCommentButtons>
                            {comment.nestingValue < '2' && <CommentButton text="Reply" size="small" />}
                            {comment.author.username &&
                                comment.author.username.toLowerCase() ===
                                    sessionStorage.getItem('activeUser').toLowerCase() && (
                                    <CommentButton text="Edit" size="small" />
                                )}
                            {comment.author.username &&
                                comment.author.username.toLowerCase() ===
                                    sessionStorage.getItem('activeUser').toLowerCase() && (
                                    <CommentButton text="Delete" size="small" />
                                )}
                        </StyledCommentButtons>
                    </StyledCommentContainer>
                    <CommentBlock
                        childComments={allComments.filter((searchComment) => searchComment.parentId === comment.id)}
                        allComments={allComments}
                        className={`childComment-${comment.id}`}
                    />
                </StyledWrapper>
            ))}
        </Container>
    );
};
export default CommentBlock;
