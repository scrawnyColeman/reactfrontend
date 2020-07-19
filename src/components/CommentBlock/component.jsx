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
        {childComments.map((comment) => {
            const { author, comment: commentText, id, nestingValue } = comment;
            const showCommentButton =
                author.username && author.username.toLowerCase() === sessionStorage.getItem('activeUser').toLowerCase();

            return (
                <StyledWrapper key={id} className={`parentComment-${id}`}>
                    <StyledCommentContainer>
                        <StyledComment>
                            <StyledCommentUsername>[{author.username}]:</StyledCommentUsername> {commentText}
                        </StyledComment>
                        <StyledCommentButtons>
                            {nestingValue < '2' && <CommentButton text="Reply" size="small" />}
                            {showCommentButton && <CommentButton text="Edit" size="small" />}
                            {showCommentButton && <CommentButton text="Delete" size="small" />}
                        </StyledCommentButtons>
                    </StyledCommentContainer>
                    <CommentBlock
                        childComments={allComments.filter((searchComment) => searchComment.parentId === id)}
                        allComments={allComments}
                        className={`childComment-${id}`}
                    />
                </StyledWrapper>
            );
        })}
    </Container>
);

export default CommentBlock;
