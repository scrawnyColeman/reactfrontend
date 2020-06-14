import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import PostComments from '../PostComments/component';

const Container = styled.div`
    text-align: left;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
`;
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;

const StyledText = styled.div`
    padding-right: 12px;
`;
const StyledHeading = styled.span`
    width: 100%;
    color: ${colours.primary};
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;

const StyledHorizontalLine = styled.hr`
    border: 2px solid ${colours.primary};
    border-radius: 3px;
    width: 100%;
`;

const ForumPost = ({ id, data }) => {
    const { question, title, type } = data.posts.find((post) => post.id === id);
    return (
        <Container>
            <StyledWrapper key={id}>
                <StyledText>
                    <StyledHeading>
                        <p> {`${title}`}</p>
                        <p>[{type.toUpperCase()}]</p>
                    </StyledHeading>
                    <p>{question}</p>
                    <span>
                        <p>
                            {' '}
                            <span style={{ color: `${colours.primary}` }}></span>
                        </p>
                    </span>
                    <StyledHorizontalLine />
                </StyledText>
            </StyledWrapper>
            <PostComments id={id} data={data} />
        </Container>
    );
};

export default ForumPost;
