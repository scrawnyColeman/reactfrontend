import React from 'react';
import styled from 'styled-components';
import TextArea from '../TextArea/component';

const Container = styled.div`
    display: grid;
    grid-template-rows: 70px 20px 500px;
`;
const CreateForumPost = () => {
    return (
        <Container>
            <TextArea
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                color='secondary'
                text="Question Title:"
                multiline
                size="small"
                margin="normal"
            />
            <div></div>
            <TextArea
                id="filled-multiline-static"
                style={{ margin: 8 }}
                color='secondary'
                text="Write your question here..."
                size="large"
                margin="normal"
                rows={8}
            />
        </Container>
    );
};

export default CreateForumPost