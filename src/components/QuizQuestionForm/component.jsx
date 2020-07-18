import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField/component';

const Counter = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 5px;
    font-size: 1.25rem;
`;
const StyledCounter = styled.div`
    padding-top: 25%;
`;
const StyledAnswer = styled.div`
    padding-top: 16px;
`;
const QuizQuestionForm = ({ questionNumber }) => {
    return (
        <>
            <Counter>
                <StyledCounter>{questionNumber}/10</StyledCounter>
            </Counter>
            <TextField placeholder={`Question ${questionNumber}`} />
            <StyledAnswer>
                <TextField placeholder={`Correct Answer:`} />
                <TextField placeholder={`Response Message:`} />
            </StyledAnswer>
            <StyledAnswer>
                <TextField placeholder={`Incorrect Answer 1:`} />
                <TextField placeholder={`Response Message 1:`} />
            </StyledAnswer>
            <StyledAnswer>
                <TextField placeholder={`Incorrect Answer 2:`} />
                <TextField placeholder={`Response Message 2:`} />
            </StyledAnswer>
        </>
    );
};
export default QuizQuestionForm;
