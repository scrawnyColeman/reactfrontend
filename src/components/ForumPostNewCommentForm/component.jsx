import React, { useState } from 'react';

import styled from 'styled-components';
import TextField from '../TextField/component';
import Button from '../Button/component';

const Container = styled.div`
    text-align: left;
`;
const StyledHeading = styled.div`
    padding: 0 0 14px;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: 48px max-content
    grid-gap: 8px;
    margin: 0 auto;
`;

const ForumPostNewCommentForm = () => {
    const [commentUser, setCommentUser] = useState('default value');
    const [question, setQuestion] = useState(null);

    return (
        <Container>
            <StyledHeading>Join the discussion...</StyledHeading>
            <StyledWrapper>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    size="small"
                    margin="normal"
                    onChange={(event) => setCommentUser(event.target.value)}
                    disabled
                    placeholder={'Replying to: ' + commentUser}
                />
                <TextField
                    id="filled-multiline-static"
                    size="large"
                    text={question}
                    margin="normal"
                    rows={20}
                    multiline={true}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder={'Write your comment here...'}
                />
                <Button
                    onClick={() => window.location.pathname === '/'}
                    text="View"
                    size="large"
                    variant="outlined"
                    hierarchy="primary"
                />
            </StyledWrapper>
        </Container>
    );
};

export default ForumPostNewCommentForm;
