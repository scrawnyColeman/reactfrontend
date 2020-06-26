import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import TextEditor from '../TextEditor/component';

const StyledWrapper = styled.div`
    color: ${colours.secondary};
    padding: 16px;
    display: grid;
    grid-template-rows: min-content min-content;
    min-height: 60vh;
`;
const StyledAnswer = styled.a`
    color: ${colours.secondary}
    text-align: center;
    font-size: 1.5rem;
    &:hover{
        color: ${colours.primary}
    }
`;
const StyledAnswerWrapper = styled.div`
    margin 8px;
    display: inline;
`;
const StyledHeading = styled.div`
    font-size: 1.25rem;
    padding: 8px;
`;
const StyledBody = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const StyledQuestion = styled.div`
    font-size: 2rem;
    padding: 16px;
`;
const StyledQuestionWrapper = styled.span`
    padding: 8px;
    color: ${colours.primary};
    margin: 0 auto;
`;
const StyledEditor = styled.div`
    margin: 0 auto;
`;

const PrerequisiteQuiz = ({ questions }) => {
    const quiz = questions[Math.floor(Math.random() * questions.length)];
    const { answers, question, codesnippet, id } = quiz;

    return (
        <StyledWrapper key={id}>
            <StyledHeading>
                <StyledQuestionWrapper>
                    <StyledQuestion>{question}</StyledQuestion>
                    <StyledEditor>{codesnippet && <TextEditor value={codesnippet} />}</StyledEditor>
                </StyledQuestionWrapper>
            </StyledHeading>
            <StyledBody>
                {answers.map((answer) => {
                    const { type, answer: nestedAnswer, answerid } = answer;
                    if (type === 'code') {
                        return (
                            <StyledAnswerWrapper key={answerid}>
                                <span>
                                    <TextEditor value={nestedAnswer} />
                                </span>
                                <span>
                                    <StyledAnswer>btn</StyledAnswer>
                                </span>
                            </StyledAnswerWrapper>
                        );
                    } else {
                        return (
                            <StyledAnswerWrapper key={answerid}>
                                <StyledAnswer>{nestedAnswer}</StyledAnswer>
                            </StyledAnswerWrapper>
                        );
                    }
                })}
            </StyledBody>
        </StyledWrapper>
    );
};

export default PrerequisiteQuiz;
