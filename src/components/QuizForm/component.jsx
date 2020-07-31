import React from 'react';
import styled from 'styled-components';
import QuizQuestionForm from '../QuizQuestionForm/component';
import { useState } from 'react';

const QuizContainer = styled.div`
    padding: 16px;
`;
const StyledHead = styled.div`
    text-align: left;
    font-size: 2rem;
`;
const StyledBody = styled.div`
    height: 60vh;
`;
const QuizForm = ({ questions, setQuestions }) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    return (
        <QuizContainer>
            <StyledHead>Quiz Questions</StyledHead>
            <StyledBody>
                <QuizQuestionForm
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    questions={questions}
                    setQuestions={setQuestions}
                />
            </StyledBody>
        </QuizContainer>
    );
};

export default QuizForm;
