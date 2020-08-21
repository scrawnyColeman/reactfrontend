import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import LessonKeyInformationForm from '../LessonKeyInformationForm/component';
import QuizForm from '../QuizForm/component';
import Button from '../Button/component';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEditor from '../TextEditor/component';
import TextField from '../TextField/component';
import TheoryForm from '../TheoryForm/component';
import {
    postLesson,
    postQuestions,
    postAnswers,
    postPractical,
    postSolution,
    fetchApprovedLessons,
} from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';

const Container = styled.div``;
const QuizContainer = styled.div`
    margin: 16vh auto 0 auto;
    width: 50vw;
`;
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
const StyledThankyou = styled.div`
    width: 45vw;
    height: 60vh;
    margin: 20vh auto 0 auto;
    font-size: 2rem;
`;
const StyledPrereqHeader = styled.div`
    margin: 20vh auto 0 auto;
    font-size: 2.25rem;
    color: ${colours.primary};
`;
const StyledScrollBox = styled.div`
    height: 55vh;
    width: 60vw;
    margin: 0 auto;
    overflow-y: scroll;
`;
const StyledLesson = styled.div`
    height: 120px;
    color: ${colours.secondary};
    font-size: 1.75rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${colours.primary};
`;
const StyledKeyInfoContainer = styled.div`
    width: 45vw;
    height: 60vh;
    margin: auto;
`;
const ButtonContainer = styled.div`
    margin: 12px 32px 0 0;
    display: flex;
    justify-content: flex-end;
`;
const StyledArrowRight = styled(FontAwesomeIcon)`
    margin-left: 12px;
`;
const StyledLessonName = styled.span`
    margin: auto;
`;
const StyledButtonWrapper = styled.span`
    margin: auto 35px auto 0;
`;
const QuestionHeader = styled.div`
    font-size: 2rem;
    color: ${colours.secondary};
    margin: 0 12px;
`;
const QuestionBody = styled.div`
    overflow-y: scroll;
`;
const StyledHint = styled.div`
    color: ${colours.primary};
    margin: 0 12px;
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
    //practicals
    const [practicalTitle, setPracticalTitle] = useState('Sample title');
    const [codePreview, setCodePreview] = useState('//Sample Code');
    const [codeSolutionPreview, setCodeSolutionPreview] = useState('//Sample Code');
    const [questionPreview, setQuestionPreview] = useState('Sample Question');
    const [hintPreview, setHintPreview] = useState('Sample Hint');
    const [explanationPreview, setExplanationPreview] = useState('Sample Explanation');
    //page navigation
    const [page, setPage] = useState(1);
    //lesson
    const [lesson, setLesson] = useState();
    const [theory, setTheory] = useState('');
    const [description, setDescription] = useState('');
    const [languageId, setLanguageId] = useState(null);
    const [editorLanguage, setEditorLanguage] = useState('javascript');
    const [title, setTitle] = useState('');
    const [ytLink, setYTLink] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    //quizzes
    const [questions, setQuestions] = useState([]);
    const [allLessons, setAllLessons] = useState([]);

    if (page === 1)
        return (
            <Container>
                <LessonContainer>
                    <StyledKeyInfoContainer>
                        <LessonKeyInformationForm
                            setTitle={setTitle}
                            title={title}
                            setDescription={setDescription}
                            description={description}
                            setYTLink={setYTLink}
                            ytLink={ytLink}
                            setLanguageId={setLanguageId}
                            languageId={languageId}
                            setEditorLanguage={setEditorLanguage}
                        />
                    </StyledKeyInfoContainer>
                    <StyledTheoryContainer>
                        <TheoryForm setTheory={setTheory} theory={theory} />
                    </StyledTheoryContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button
                        text="Quizzes"
                        variant="outlined"
                        children={<RightIcon />}
                        onClick={() => {
                            setLesson({
                                title: title || 'Default title',
                                description: description || 'There is no description for this lesson.',
                                theory: theory || 'There is no theory for this lesson.',
                                youtubeLink: ytLink,
                                languageId: languageId,
                            });
                            setPage(2);
                        }}
                    />
                </ButtonContainer>
            </Container>
        );
    else if (page === 2) {
        fetchApprovedLessons().then((response) => setAllLessons(response.data));
        return (
            <Container>
                <StyledPrereqHeader>Select which lessons should be completed prior to this one...</StyledPrereqHeader>
                <StyledScrollBox>
                    {allLessons.map((lesson) => {
                        const { title, id, language } = lesson;
                        return (
                            <StyledLesson key={id}>
                                <StyledLessonName>{`${title} [${language.language.toUpperCase()}]`}</StyledLessonName>
                                <StyledButtonWrapper>
                                    <Button
                                        text={'+'}
                                        variant="outlined"
                                        hierarchy="primary"
                                        onClick={() => {
                                            recommendations.filter((r) => r === id).length === 0 &&
                                                setRecommendations([...recommendations, id]);
                                        }}
                                    />
                                </StyledButtonWrapper>
                            </StyledLesson>
                        );
                    })}
                </StyledScrollBox>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" onClick={() => setPage(1)} />
                    <Button
                        text="Submit"
                        variant="outlined"
                        children={<RightIcon />}
                        onClick={() => {
                            setPage(3);
                        }}
                    />
                </ButtonContainer>
            </Container>
        );
    } else if (page === 3)
        return (
            <Container>
                <QuizContainer>
                    <QuizForm questions={questions} setQuestions={setQuestions} />
                </QuizContainer>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" onClick={() => setPage(2)} />
                    <Button
                        text="Practicals"
                        variant="outlined"
                        children={<RightIcon />}
                        onClick={() => {
                            setPage(4);
                        }}
                    />
                </ButtonContainer>
            </Container>
        );
    else if (page === 4)
        return (
            <Container>
                <LessonContainer>
                    <div>
                        <QuestionHeader>
                            <TextField
                                onChange={(event) => setPracticalTitle(event.target.value)}
                                placeholder={practicalTitle}
                            />
                        </QuestionHeader>
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
                    <StyledKeyInfoContainer>
                        <StyledPreviewHeadWrapper>Preview</StyledPreviewHeadWrapper>
                        <StyledQuestionWrapper>{practicalTitle}</StyledQuestionWrapper>
                        <StyledQuestionWrapper>{questionPreview}</StyledQuestionWrapper>
                        Hint: {hintPreview}
                        <StyledEditorContainer>
                            <TextEditor value={codePreview} mode={editorLanguage} rows={15} />
                        </StyledEditorContainer>
                    </StyledKeyInfoContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" onClick={() => setPage(3)} />
                    <Button text="Submit" variant="outlined" children={<RightIcon />} onClick={() => setPage(5)} />
                </ButtonContainer>
            </Container>
        );
    else if (page === 5)
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
                    <StyledKeyInfoContainer>
                        <StyledPreviewHeadWrapper>Solution Preview</StyledPreviewHeadWrapper>
                        <StyledQuestionWrapper>{questionPreview}</StyledQuestionWrapper>
                        {explanationPreview}
                        <StyledEditorContainer>
                            <TextEditor value={codeSolutionPreview} mode={editorLanguage} rows={15} />
                        </StyledEditorContainer>
                    </StyledKeyInfoContainer>
                </LessonContainer>
                <ButtonContainer>
                    <Button text="Go Back" variant="outlined" children={<RightIcon />} onClick={() => setPage(4)} />
                    <Button
                        text="Submit"
                        variant="outlined"
                        children={<RightIcon />}
                        onClick={() => {
                            console.log({ ...lesson, recommendedLessons: recommendations });
                            postLesson({ ...lesson, recommendedLessons: recommendations }, lesson.languageId).then(
                                (response) => {
                                    const lessonId = response.data.id;
                                    const practical = {
                                        title: practicalTitle,
                                        question: questionPreview,
                                        codeSnippet: codePreview,
                                        hint: hintPreview,
                                    };
                                    postQuestions(questions, lessonId)
                                        .then((response) => {
                                            response.data.map((resp) => {
                                                const questionTitle = resp.split(':id:')[0];
                                                const questionId = resp.split(':id:')[1];
                                                const questionToAdd = questions.filter(
                                                    (q) => q.question === questionTitle,
                                                );
                                                return postAnswers(questionToAdd[0].answers, questionId)
                                                    .then((response) => console.log(response))
                                                    .catch(errorLogger);
                                            });
                                        })
                                        .catch(errorLogger);
                                    postPractical(practical, lessonId)
                                        .then((response) => {
                                            const solution = {
                                                codeSnippet: codeSolutionPreview,
                                                explanation: explanationPreview,
                                            };
                                            postSolution(solution, response.data)
                                                .then((response) => {
                                                    if (response.status === 200) setPage(6);
                                                })
                                                .catch(errorLogger);
                                        })
                                        .catch(errorLogger);
                                },
                            );
                        }}
                    />
                </ButtonContainer>
            </Container>
        );
    else if (page === 6)
        return <StyledThankyou> Thank you for your submission. It is now awaiting review by an admin. </StyledThankyou>;
};
export default NewLessonPage;
