import React from 'react';
import styled from 'styled-components';
import Button from '../Button/component';
import { colours } from '../../constants/styles';
import { useHistory } from 'react-router-dom';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin auto 0;
`;
const StyledHR = styled.hr`
    border: 1px solid ${colours.primary};
`;
const Container = styled.div`
    max-height: 300px;
    margin: auto auto;
    width: 75%;
`;
const StyledText = styled.div`
    color: ${colours.secondary};
    font-size: 1.5rem;
    margin: auto 0;
`;

const LessonPath = ({ text, id, path }) => {
    const history = useHistory();
    return (
        <Container>
            <StyledWrapper>
                <StyledText>{text}</StyledText>
                <Button
                    text="Begin"
                    onClick={() => {
                        history.push({ pathname: `${path}/${id}` });
                    }}
                />
            </StyledWrapper>
            <StyledHR />
        </Container>
    );
};

export default LessonPath;
