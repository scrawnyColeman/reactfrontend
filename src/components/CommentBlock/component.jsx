import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import CommentButton from '../CommentButton/component';
import { deleteComment } from '../../data/apiCalls';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    margin: 0 0 0 24px;
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

const CommentBlock = ({ childComments, allComments, setReplying, setReplyingTo, setEditing, setCommentEditing }) => (
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
                            {nestingValue < '2' && (
                                <CommentButton
                                    text="Reply"
                                    size="small"
                                    onClick={() => {
                                        setReplyingTo({
                                            username: author.username,
                                            id: author.id,
                                            nest: nestingValue,
                                            commentId: id,
                                        });
                                        setReplying(true);
                                        console.log('hello');
                                    }}
                                />
                            )}
                            {showCommentButton && (
                                <CommentButton
                                    text="Edit"
                                    size="small"
                                    onClick={() => {
                                        setReplying(false);
                                        setReplyingTo(null);
                                        setEditing(true);
                                        setCommentEditing(id);
                                        console.log('hi');
                                    }}
                                />
                            )}
                            {showCommentButton && (
                                <CommentButton
                                    text="Delete"
                                    size="small"
                                    onClick={() => {
                                        deleteComment(id)
                                            .then((response) => {
                                                if (response.status === 200) window.location.reload();
                                            })
                                            .catch((error) => console.log(error));
                                    }}
                                />
                            )}
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
