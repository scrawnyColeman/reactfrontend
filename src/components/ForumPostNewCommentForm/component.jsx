import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../TextField/component';
import CommentButton from '../CommentButton/component';
import Button from '../Button/component';
import { createComment, editComment } from '../../data/apiCalls';
import { colours } from '../../constants/styles';

const Container = styled.div`
    text-align: left;
`;
const StyledHeading = styled.div`
    padding: 0 0 14px;
    font-size: 2rem;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: min-content max-content;
    grid-gap: 8px;
    margin: 0 auto;
`;
const StyledCommentHeader = styled.div`
    color: ${colours.primary};
    display: flex;
    justify-content: space-between;
`;

const ForumPostNewCommentForm = ({
    isReplying,
    replyingTo,
    postId,
    setReplying,
    setReplyingTo,
    editing,
    commentEditing,
    setEditing,
    setCommentEditing,
}) => {
    const [question, setQuestion] = useState(null);
    const userId = sessionStorage.getItem('activeId');

    const submitComment = () => {
        const comment = {
            comment: question,
            parentId: isReplying ? replyingTo.commentId : 0,
            nestingValue: isReplying ? Number(replyingTo.nest) + 1 : 0,
            post: Number.parseInt(postId, 10),
        };
        !editing
            ? createComment(comment, userId, comment.post)
                  .then((response) => {
                      console.log(response);
                      if (response.status === 200) window.location.reload();
                  })
                  .then((error) => console.log(error))
            : editComment(commentEditing, comment)
                  .then((response) => {
                      console.log(response);
                      if (response.status === 200) window.location.reload();
                  })
                  .catch((error) => console.log(error));
    };

    return (
        <Container>
            <StyledHeading>Join the discussion...</StyledHeading>
            <StyledWrapper>
                {!isReplying ? (
                    editing ? (
                        <StyledCommentHeader>
                            <>Editing...</>
                            <></>
                        </StyledCommentHeader>
                    ) : (
                        <StyledCommentHeader>
                            <>New Comment:</>
                            <></>
                        </StyledCommentHeader>
                    )
                ) : (
                    <StyledCommentHeader>
                        <>Replying to: {replyingTo.username}</>
                        <CommentButton
                            variant="outlined"
                            text={`x`}
                            size={`large`}
                            onClick={() => {
                                setReplyingTo(null);
                                setReplying(false);
                                setEditing(false);
                                setCommentEditing(null);
                            }}
                        />
                    </StyledCommentHeader>
                )}
                <TextField
                    id="filled-multiline-static"
                    text={question}
                    margin="normal"
                    rows={20}
                    multiline={true}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder={'Write your comment here...'}
                />
                <Button
                    onClick={() => submitComment()}
                    text="Submit"
                    size="large"
                    variant="outlined"
                    hierarchy="primary"
                />
            </StyledWrapper>
        </Container>
    );
};

export default ForumPostNewCommentForm;
