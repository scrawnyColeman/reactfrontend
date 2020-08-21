import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../TextField/component';
import Button from '../Button/component';
import { createForumPost } from '../../data/apiCalls';

const Container = styled.div`
    text-align: left;
`;
const StyledHeading = styled.div`
    padding: 0 0 14px;
    font-size: 2rem;
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

    const handleSubmit = () => {
        const post = {
            title: title,
            question: question,
        };
        createForumPost(post)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.log(error));
    };
    return (
        <Container>
            <StyledHeading>Reach out to the community...</StyledHeading>
            <StyledWrapper>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    text={title}
                    margin="normal"
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder={'Question Title:'}
                />
                <TextField
                    id="filled-multiline-static"
                    text={question}
                    margin="normal"
                    rows={20}
                    multiline={true}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder={'Write your question here...'}
                />
                <Button
                    onClick={() => handleSubmit()}
                    text="Submit"
                    size="large"
                    variant="outlined"
                    hierarchy="primary"
                    type="submit"
                    value="Submit"
                />
            </StyledWrapper>
        </Container>
    );
};

export default CreateForumPost;
