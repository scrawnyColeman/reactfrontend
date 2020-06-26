import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import courseData from '../../data/courses';
import TheoryLessonContent from '../TheoryLessonContent/component';
import TheoryVisualAid from '../TheoryVisualAid/component';
import Button from '../Button/component';
import styled from 'styled-components';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PracticalCodeChallenge from '../PracticalCodeChallenge/component';
import PracticalCodeSubmission from '../PracticalCodeSubmission/component';
import PracticalQuizPage from '../PracticalQuizPage/component';
import practicalData from '../../data/practical';

const TheoryContainer = styled.div`
    margin: 15vh auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const QuizContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
`;
const PracticalContainer = styled.div`
    margin: 15vh auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const CompletionContainer = styled.div`
    margin: 15vh auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const ButtonContainer = styled.div`
    margin: 12px 12px 0 0;
    display: flex;
    justify-content: flex-end;
`;

const StyledArrowRight = styled(FontAwesomeIcon)`
    margin-left: 12px;
`;

const FullLessonPage = () => {
    const location = useLocation();
    const lessonId = location.pathname.split('/lesson/')[1];
    const { title: courseTitle, theory, youtubeLink } = courseData.courses.find((course) => course.id === lessonId);
    const { title: practicalTitle, question, hint, codesnippet, solution, language } = practicalData.practicals.find(
        (practical) => practical.correspondingLessonID === lessonId,
    );
    const pages = ['theory', 'practical', 'quiz', 'completion'];
    const [pageName, setpageName] = useState(pages[0]);
    const [isCodeSubmitted, setCodeSubmitted] = useState(false);
    const RightIcon = () => <StyledArrowRight icon={faArrowCircleRight} />;

    switch (pageName) {
        case 'theory':
            return (
                <div>
                    <TheoryContainer>
                        <TheoryLessonContent courseData={{ courseTitle, theory }} />
                        <TheoryVisualAid id={lessonId} courseData={youtubeLink} />
                    </TheoryContainer>
                    <ButtonContainer>
                        <Button
                            text="Practicals"
                            variant="outlined"
                            onClick={() => setpageName(pages[1])}
                            children={<RightIcon />}
                        />
                    </ButtonContainer>
                </div>
            );
        case 'practical':
            return (
                <div>
                    <PracticalContainer>
                        <PracticalCodeChallenge
                            data={{ practicalTitle, question, hint, codesnippet, solution, language }}
                            submitted={isCodeSubmitted}
                        />
                        <PracticalCodeSubmission
                            data={{ language }}
                            submitted={isCodeSubmitted}
                            toggleSubmission={() => {
                                setCodeSubmitted(!isCodeSubmitted);
                            }}
                            getHelp={() => {
                                /* redirect to ID 5 */
                            }}
                        />
                    </PracticalContainer>
                    <ButtonContainer>
                        <Button
                            text="Quizzes"
                            variant="outlined"
                            onClick={() => setpageName(pages[2])}
                            children={<RightIcon />}
                        />
                    </ButtonContainer>
                </div>
            );
        case 'quiz':
            return (
                <QuizContainer>
                    <PracticalQuizPage id={lessonId} />
                    {/* <Button onClick={setpageName(pages[2])}/> */}
                </QuizContainer>
            );
        default:
            return (
                <CompletionContainer>
                    {/* Congratulations Component */}
                    {/* Mark Lesson as complete and add to user profile as a completed course. Reward the user with some certificate. */}
                    <Button text={`Download PDF Certificate and pan to that oage`} />
                </CompletionContainer>
            );
    }
};

export default FullLessonPage;
