import { useHistory } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Button from '../Button/component';
import { colours } from '../../constants/styles';

const StyledContainer = styled.div`
    margin: 0 auto;
    width: 45vw;
    height: 600px;
`;
const StyledPostsContainer = styled.div`
    overflow-y: scroll;
    height: 580px;
`;
const StyledTitle = styled.div`
    padding: 6px;
    color: ${colours.secondary}
    text-align: left;
    font-size: 2rem;
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    margin: 0 8px;
    text-align: left;
`;
const StyledHead = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${colours.primary};
    font-size: 1.5rem;
`;
const StyledBody = styled.div`
    color: ${colours.secondary};
    font-size: 1rem;
`;

const ForumPreview = ({ onClick, posts }) => {
    const history = useHistory();
    return (
        <StyledContainer>
            <StyledTitle>Forum Posts:</StyledTitle>
            <StyledPostsContainer>
                {posts.map((post) => {
                    const { id, title, lesson } = { ...post };
                    const { title: lessonName, language } = { ...lesson };
                    return (
                        <StyledWrapper key={id}>
                            <StyledHead>
                                {title ? (
                                    <p>{title}</p>
                                ) : (
                                    <p>{`${lessonName}: [${language.language.toUpperCase()}]`}</p>
                                )}
                                {lesson ? <p>[Lesson]</p> : <p>[Help]</p>}
                            </StyledHead>
                            <StyledBody>
                                <Button
                                    onClick={() => {
                                        history.push({ pathname: `forum/${id}` });
                                        onClick(id);
                                    }}
                                    text="View"
                                    size="small"
                                    variant="outlined"
                                    hierarchy="primary"
                                />
                            </StyledBody>
                        </StyledWrapper>
                    );
                })}
            </StyledPostsContainer>
        </StyledContainer>
    );
};

export default ForumPreview;
