import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import TextEditor from '../TextEditor/component';

const Container = styled.div`
    height: 65vh;
    border: 2px solid ${colours.primary};
    padding: 16px;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflox-y: scroll;
`;
const QuestionHeader = styled.div`
    font-size: 2rem;
    color: ${colours.secondary};
    margin: 12px;
`;
const Question = styled.div`
    font-size: 1rem;
    color: ${colours.secondary}
    text-align: left;
`;
const QuestionBody = styled.div`
    overflow-y: scroll;
`;
const StyledHint = styled.div`
    color: ${colours.primary};
    margin: 12px;
`;
const StyledTitle = styled.div`
    color: ${colours.primary};
    margin: 0 auto 24px auto;
`;
const StyledCodeSnippet = styled.div`
    overflow-y: scroll;
`;
const StyledExplanation = styled.div`
    margin: 12px;
    text-align: left;
    overflow-y: scroll;
`;
const StyledEditorContainer = styled.div`
    margin-top: 24px;
    text-align: left;
`;

const PracticalCodeChallenge = ({ data, submitted, language }) => {
    const { title, question, hint, codeSnippet, solution } = data;
    console.log(solution);
    return submitted ? (
        <Container>
            <QuestionHeader>Solution</QuestionHeader>
            <QuestionBody>
                <StyledHint>
                    If you are struggling to come to terms with this solution, select 'Get Help' to access the lessons
                    forum discussion page.
                </StyledHint>
                <StyledCodeSnippet>
                    <StyledEditorContainer>
                        <TextEditor value={solution.codeSnippet} mode={language} />
                    </StyledEditorContainer>
                    <StyledExplanation>{solution.explanation}</StyledExplanation>
                </StyledCodeSnippet>
            </QuestionBody>
        </Container>
    ) : (
        <Container>
            <QuestionHeader>
                <StyledTitle>{title}</StyledTitle>
                <Question>{question}</Question>
            </QuestionHeader>
            <QuestionBody>
                <StyledHint>{hint}</StyledHint>
                <StyledCodeSnippet>
                    <TextEditor value={codeSnippet} mode={language} />
                </StyledCodeSnippet>
            </QuestionBody>
        </Container>
    );
};

export default PracticalCodeChallenge;
