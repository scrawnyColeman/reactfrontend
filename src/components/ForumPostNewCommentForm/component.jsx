import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../TextField/component';
import Button from '../Button/component';

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

const ForumPostNewCommentForm = ({ isReplying, replyingTo }) => {
    const [commentUser, setCommentUser] = useState('default value');
    const [question, setQuestion] = useState(null);

    return (
        <Container>
            <StyledHeading>Join the discussion...</StyledHeading>
            <StyledWrapper>
                {!isReplying ? (
                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        margin="normal"
                        onChange={(event) => setCommentUser(event.target.value)}
                        disabled
                        placeholder={'New Comment'}
                    />
                ) : (
                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        margin="normal"
                        onChange={(event) => setCommentUser(event.target.value)}
                        disabled
                        placeholder={`Replying to: ${replyingTo}`}
                    />
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
                    onClick={() => window.location.pathname === '/'}
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
