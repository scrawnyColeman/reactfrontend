import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentBlock from '../CommentBlock/component';
import { colours } from '../../constants/styles';
import CommentButton from '../CommentButton/component';
import { fetchForumPostComments, deleteComment } from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';

const Container = styled.div`
    text-align: left;
    max-height: 390px;
    overflow-y: scroll;
`;
export const StyledWrapper = styled.div`
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

const PostComments = ({ id, setReplying, setReplyingTo, setEditing, setCommentEditing }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetchForumPostComments(id)
            .then((response) => {
                setComments(response.data);
            })
            .catch(errorLogger);
    }, [id]);

    return (
        <Container>
            <StyledLabel>Discussion:</StyledLabel>
            {comments.map((commentDetails) => {
                const { author, comment, id, parentId, nestingValue } = commentDetails;
                const showCommentButton =
                    author.username &&
                    author.username.toLowerCase() === sessionStorage.getItem('activeUser').toLowerCase();

                return (
                    parentId === 0 && (
                        <StyledWrapper key={id}>
                            <StyledText>
                                <StyledCommentContainer>
                                    <StyledComment>
                                        <StyledCommentUsername>[{author.username}]:</StyledCommentUsername> {comment}
                                    </StyledComment>
                                    <StyledCommentButtons>
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
                                            }}
                                        />
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
                                {comments.length > 0 && (
                                    <CommentBlock
                                        childComments={comments.filter((comment) => comment.parentId === id)}
                                        allComments={comments}
                                        setReplying={setReplying}
                                        setReplyingTo={setReplyingTo}
                                        setEditing={setEditing}
                                        setCommentEditing={setCommentEditing}
                                    />
                                )}
                            </StyledText>
                        </StyledWrapper>
                    )
                );
            })}
        </Container>
    );
};

export default PostComments;
