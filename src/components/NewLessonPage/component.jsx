import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import TheoryForm from '../TheoryForm/component';
import QuizForm from '../QuizForm/component';
import Button from '../Button/component';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEditor from '../TextEditor/component';
import TextField from '../TextField/component';

const Container = styled.div``;
const LessonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin: 20vh auto 0 auto;
`;
const StyledTheoryContainer = styled.div`
    width: 45vw;
    height: 60vh;
    margin: auto;
`;
const StyledQuizContainer = styled.div`
    width: 45vw;
    height: 60vh;
    margin: auto;
    border: 2px solid ${colours.primary};
`;
const ButtonContainer = styled.div`
    margin: 12px 32px 0 0;
    display: flex;
    justify-content: flex-end;
`;
const StyledArrowRight = styled(FontAwesomeIcon)`
    margin-left: 12px;
`;
const QuestionHeader = styled.div`
    font-size: 2rem;
    color: ${colours.secondary};
    margin: 12px;
`;
const QuestionBody = styled.div`
    overflow-y: scroll;
`;
const StyledHint = styled.div`
    color: ${colours.primary};
    margin: 12px;
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
const StyledQuestionWrapper = styled.div`
    padding: 16px;
    color: ${colours.primary};
    font-size: 1.25rem;
`;
const StyledPreviewHeadWrapper = styled.div`
    padding: 16px;
    text-align: left;
    color: ${colours.secondary};
    font-size: 1.5rem;
`;

const NewLessonPage = () => {
    const RightIcon = () => <StyledArrowRight icon={faArrowCircleRight} />;
    const youtubeURLBase = `https://www.youtube.com/watch?v=`;
    const [codePreview, setCodePreview] = useState('//Sample Code');
    const [codeSolutionPreview, setCodeSolutionPreview] = useState('//Sample Code');
    const [questionPreview, setQuestionPreview] = useState('Sample Question');
    const [hintPreview, setHintPreview] = useState('Sample Hint');
    const [page, setPage] = useState(1);
    const [explanationPreview, setExplanationPreview] = useState('Sample Explanation');
    const [theory, setTheory] = useState('');
    const [languageId, setLanguageId] = useState(null);
    const [title, setTitle] = useState('');
    const [ytLink, setYTLink] = useState('');
    const [questions, setQuestions] = useState(
        new Array(10).fill({
            question: '',
            codeSnippet: null,
            answers: [
                {
                    answer: '',
                    responseMessage: '',
                    correct: true,
                },
                {
                    answer: '',
                    responseMessage: '',
                    correct: true,
                },
                {
                    answer: '',
                    responseMessage: '',
                    correct: true,
                },
            ],
        }),
    );
    if (page === 1)
        return (
            <Container>
                <LessonContainer>
                    <StyledTheoryContainer>
                        <TheoryForm
                            setTheory={() => setTheory()}
                            setYTLink={(extension) => setYTLink(youtubeURLBase + `${extension}`)}
                            setTitle={() => setTitle()}
                            setLanguageId={() => setLanguageId()}
                        />
                    </StyledTheoryContainer>
                    <StyledQuizContainer>
                        <QuizForm handleQuestion={() => setQuestions} />
                    </StyledQuizContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button text="Practicals" variant="outlined" children={<RightIcon />} onClick={() => setPage(2)} />
                </ButtonContainer>
            </Container>
        );
    else if (page === 2)
        return (
            <Container>
                <LessonContainer>
                    <div>
                        <QuestionHeader>
                            <TextField
                                onChange={(event) => setQuestionPreview(event.target.value)}
                                placeholder={questionPreview}
                            />
                        </QuestionHeader>
                        <QuestionBody>
                            <StyledHint>
                                <TextField
                                    onChange={(event) => setHintPreview(event.target.value)}
                                    placeholder={hintPreview}
                                />
                            </StyledHint>
                            <StyledCodeSnippet>
                                <StyledExplanation>
                                    <TextField
                                        id="filled-multiline-static"
                                        size="large"
                                        margin="normal"
                                        rows={16}
                                        multiline={true}
                                        onChange={(event) => setCodePreview(event.target.value)}
                                        placeholder={'Enter your code here'}
                                    />
                                </StyledExplanation>
                            </StyledCodeSnippet>
                        </QuestionBody>
                    </div>
                    <StyledQuizContainer>
                        <StyledPreviewHeadWrapper>Preview</StyledPreviewHeadWrapper>
                        <StyledQuestionWrapper>{questionPreview}</StyledQuestionWrapper>
                        {hintPreview}
                        <StyledEditorContainer>
                            <TextEditor value={codePreview} mode={`javascript`} rows={15} />
                        </StyledEditorContainer>
                    </StyledQuizContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" children={<RightIcon />} onClick={() => setPage(1)} />
                    <Button text="Submit" variant="outlined" children={<RightIcon />} onClick={() => setPage(3)} />
                </ButtonContainer>
            </Container>
        );
    else if (page === 3)
        return (
            <Container>
                <LessonContainer>
                    <div>
                        <QuestionBody>
                            <StyledHint>
                                <TextField
                                    id="filled-multiline-static"
                                    size="large"
                                    margin="normal"
                                    rows={12}
                                    multiline={true}
                                    onChange={(event) => setExplanationPreview(event.target.value)}
                                    placeholder={explanationPreview}
                                />
                            </StyledHint>
                            <StyledCodeSnippet>
                                <StyledExplanation>
                                    <TextField
                                        id="filled-multiline-static"
                                        size="large"
                                        margin="normal"
                                        rows={12}
                                        multiline={true}
                                        onChange={(event) => setCodeSolutionPreview(event.target.value)}
                                        placeholder={'Enter your code here'}
                                    />
                                </StyledExplanation>
                            </StyledCodeSnippet>
                        </QuestionBody>
                    </div>
                    <StyledQuizContainer>
                        <StyledPreviewHeadWrapper>Solution Preview</StyledPreviewHeadWrapper>
                        <StyledQuestionWrapper>{questionPreview}</StyledQuestionWrapper>
                        {explanationPreview}
                        <StyledEditorContainer>
                            <TextEditor value={codeSolutionPreview} mode={`javascript`} rows={15} />
                        </StyledEditorContainer>
                    </StyledQuizContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" children={<RightIcon />} onClick={() => setPage(2)} />
                    <Button text="Submit" variant="outlined" children={<RightIcon />} onClick={() => setPage(4)} />
                </ButtonContainer>
            </Container>
        );
    else if (page === 4)
        return <div style={{ marginTop: '20vh' }}>If post request has been successful, Congratulations</div>;
};
export default NewLessonPage;
