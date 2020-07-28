import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TheoryLessonContent from '../TheoryLessonContent/component';
import TheoryVisualAid from '../TheoryVisualAid/component';
import Button from '../Button/component';
import styled from 'styled-components';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PracticalQuizPage from '../PracticalQuizPage/component';
import { fetchPracticalByLessonId, fetchForumPostByLesson, fetchLessonById } from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';
import PracticalComponent from './practicalComponent';

const TheoryContainer = styled.div`
    margin: 15vh auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const QuizContainer = styled.div`
    margin: 0 auto;
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
    const [forumPost, setForumPost] = useState();
    const [lesson, setLesson] = useState();
    const [practical, setPractical] = useState(null);
    const pages = ['theory', 'practical', 'quiz', 'completion'];
    const [pageName, setpageName] = useState(pages[0]);
    const [isCodeSubmitted, setCodeSubmitted] = useState(false);
    const RightIcon = () => <StyledArrowRight icon={faArrowCircleRight} />;

    useEffect(() => {
        fetchLessonById(lessonId)
            .then((response) => setLesson(response.data))
            .catch(errorLogger);
        fetchForumPostByLesson(lessonId)
            .then((response) => setForumPost(response.data))
            .catch(errorLogger);
        fetchPracticalByLessonId(lessonId)
            .then((response) => setPractical(response.data))
            .catch(errorLogger);
    }, [lessonId]);

    if (lesson) {
        const { title, theory, youtubeLink } = lesson;
        switch (pageName) {
            case 'theory':
                return (
                    <div>
                        <TheoryContainer>
                            <TheoryLessonContent courseData={{ title, theory }} />
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
                        {practical && (
                            <PracticalComponent
                                forumPostId={forumPost.id}
                                setCodeSubmitted={setCodeSubmitted}
                                isCodeSubmitted={isCodeSubmitted}
                                practicalId={practical.id}
                                setPractical={setPractical}
                                practical={practical}
                            />
                        )}
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
                        <PracticalQuizPage fullLessonId={lessonId} />
                        <Button
                            text="Finish"
                            variant="outlined"
                            onClick={() => {
                                //setLessonCompleted()
                                setpageName(pages[3]);
                            }}
                            children={<RightIcon />}
                        />
                    </QuizContainer>
                );
            default:
                return <CompletionContainer>Lesson Completed! Fantastic Progress.</CompletionContainer>;
        }
    } else {
        return <div />;
    }
};

export default FullLessonPage;
