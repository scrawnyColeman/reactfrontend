import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import PostComments from '../PostComments/component';

const Container = styled.div`
    text-align: left;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 16px;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
    max-height: 220px;
    overflow-y: scroll;
`;

const StyledText = styled.div`
    padding-right: 12px;
`;
const StyledContent = styled.span`    
    max-height: 150px
    overflow-y: scroll;
    font-size: 1.25rem;
`;
const StyledHeading = styled.span`
    width: 100%;
    color: ${colours.primary};
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 1.5rem;
`;

const StyledHorizontalLine = styled.hr`
    border: 2px solid ${colours.primary};
    border-radius: 3px;
    width: 100%;
`;

const ForumPost = ({ id, data, setReplying, setReplyingTo, setEditing, setCommentEditing }) => {
    const { question, title, lesson } = { ...data };
    const { title: lessonTitle, language } = { ...lesson };

    return (
        <Container>
            <StyledWrapper key={id}>
                <StyledText>
                    <StyledHeading>
                        {title && <p> {title}</p>}
                        {lessonTitle && language && <p>{lessonTitle}</p>}
                    </StyledHeading>
                    <StyledContent>
                        {question && <p>{question}</p>}
                        {lessonTitle && language.language && (
                            <p>{`This thread is for the discussion of ${lessonTitle}, taught in ${language.language}`}</p>
                        )}
                    </StyledContent>
                    <StyledHorizontalLine />
                </StyledText>
            </StyledWrapper>
            <PostComments
                id={id}
                setReplying={setReplying}
                setReplyingTo={setReplyingTo}
                setEditing={setEditing}
                setCommentEditing={setCommentEditing}
            />
        </Container>
    );
};

export default ForumPost;
