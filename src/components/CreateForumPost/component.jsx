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
    grid-template-rows: max-content max-content
    grid-gap: 20px;
    margin: 0 auto;
`;

const CreateForumPost = () => {
    const [title, setTitle] = useState(null);
    const [question, setQuestion] = useState(null);

    return (
        <Container>
            <StyledHeading>Reach out to the community...</StyledHeading>
            <StyledWrapper>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    text={title}
                    size="small"
                    margin="normal"
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder={'Question Title:'}
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
                <Button onClick={() => window.location.pathname === '/'} text="View" size="large" variant="outlined" hierarchy="primary" />
            </StyledWrapper>
        </Container>
    );
};

export default CreateForumPost;