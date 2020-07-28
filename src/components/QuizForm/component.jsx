import React from 'react';
import styled from 'styled-components';
import QuizQuestionForm from '../QuizQuestionForm/component';

const QuizContainer = styled.div`
    padding: 16px;
`;
const StyledHead = styled.div`
    text-align: left;
    font-size: 2rem;
`;
const StyledBody = styled.div`
    height: 50vh;
    overflow-y: scroll;
`;
const QuizForm = () => {
    const quizQuestions = new Array(10).fill('');
    return (
        <QuizContainer>
            <StyledHead>Quiz Questions</StyledHead>
            <StyledBody>
                {quizQuestions.map((value, index) => (
                    <QuizQuestionForm key={`${value}${index}`} questionNumber={index + 1} />
                ))}
            </StyledBody>
        </QuizContainer>
    );
};

export default QuizForm;
