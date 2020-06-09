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
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    margin: 0 8px;
    text-align: left;
`;
const StyledHead = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${colours.primary};
    font-size: 1.25rem;
`;
const StyledBody = styled.div`
    display flex;
    justify-content: space-between;
    color: ${colours.secondary}
`;

const ForumPreview = ({ onClick, posts }) => {
    const history = useHistory();
    return (
        <StyledContainer>
            <StyledTitle>Forum Posts:</StyledTitle>
            <StyledPostsContainer>
                {posts.map((post) => {
                    const { id, title, type, comments } = post;
                    return (
                        <StyledWrapper key={id}>
                            <StyledHead>
                                <p>{title}</p>
                                <p>[{type.toUpperCase()}]</p>
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
                                <p>{comments.length} comments</p>
                            </StyledBody>
                        </StyledWrapper>
                    );
                })}
            </StyledPostsContainer>
        </StyledContainer>
    );
};

export default ForumPreview;
