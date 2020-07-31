import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField/component';
import CommentButton from '../CommentButton/component';

const Counter = styled.div`
    margin: 4px 0;
    height: 64px;
    border-radius: 5px;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
`;
const StyledCounter = styled.div`
    padding-top: 12px;
`;
const StyledAnswer = styled.div`
    padding-top: 16px;
`;
const QuizQuestionForm = ({ questionNumber, setQuestionNumber, questions, setQuestions }) => {
    let temporaryQuestion = {
        question: 'Sample Question',
        codeSnippet: null,
        answers: [
            {
                answer: 'Sample',
                correct: true,
                responseMessage: 'Sample response',
            },
            {
                answer: 'Sample',
                correct: false,
                responseMessage: 'Sample response',
            },
            {
                answer: 'Sample',
                correct: false,
                responseMessage: 'Sample response',
            },
        ],
    };

    return (
        <div key={questionNumber}>
            <Counter>
                <StyledCounter>{questionNumber}/10</StyledCounter>
                <CommentButton
                    variant="outlined"
                    text={`+`}
                    size={`large`}
                    onClick={() => {
                        setQuestions(questions.concat(temporaryQuestion));
                        console.log(questions);
                        setQuestionNumber(questionNumber + 1);
                    }}
                />
            </Counter>
            <TextField
                placeholder={`Question ${questionNumber}`}
                onChange={(event) => (temporaryQuestion.question = event.target.value)}
            />
            <StyledAnswer>
                <TextField
                    placeholder={`Correct Answer:`}
                    onChange={(event) => (temporaryQuestion.answers[0].answer = event.target.value)}
                />
                <TextField
                    placeholder={`Response Message:`}
                    onChange={(event) => (temporaryQuestion.answers[0].responseMessage = event.target.value)}
                />
            </StyledAnswer>
            <StyledAnswer>
                <TextField
                    placeholder={`Incorrect Answer 1:`}
                    onChange={(event) => (temporaryQuestion.answers[1].answer = event.target.value)}
                />
                <TextField
                    placeholder={`Response Message 1:`}
                    onChange={(event) => (temporaryQuestion.answers[1].responseMessage = event.target.value)}
                />
            </StyledAnswer>
            <StyledAnswer>
                <TextField
                    placeholder={`Incorrect Answer 2:`}
                    onChange={(event) => (temporaryQuestion.answers[2].answer = event.target.value)}
                />
                <TextField
                    placeholder={`Response Message 2:`}
                    onChange={(event) => (temporaryQuestion.answers[2].responseMessage = event.target.value)}
                />
            </StyledAnswer>
        </div>
    );
};

export default QuizQuestionForm;
