import React, { useState } from 'react';

import styled from 'styled-components';
import TextField from '../TextField/component';
import Button from '../Button/component';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: max-content max-content
    grid-gap: 20px;
    margin: 0 auto;
`;

const ForumComment = ({ posts }) => {
    const [title, setTitle] = useState(null);
    const [question, setQuestion] = useState(null);

    return (
        <Container>
            <StyledWrapper>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    text={title}
                    size="small"
                    margin="normal"
                    disabled
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder={`Replying to:`}
                />
                <TextField
                    id="filled-multiline-static"
                    text={question}
                    size="large"
                    margin="normal"
                    rows={20}
                    multiline={true}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder={'Write your question here...'}
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

export default ForumComment;
