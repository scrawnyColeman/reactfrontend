import React, { useState } from 'react';
import styled from 'styled-components';
import { carouselSettings, colours } from '../../constants/styles';
import { fetchAllQuestionsByLessonId, fetchAllAnswersByLessonId } from '../../data/apiCalls.js';
import Slider from 'react-slick';
import TextEditor from '../TextEditor/component';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { errorLogger } from '../../data/errorLogger';

const Wrapper = styled.div`
    margin: 20px 20px 0 20px;
`;
const Container = styled.div`
    color: ${colours.primary}
    height: 65vh;
    margin: 20vh auto 0;
    width: 90vw;
    border: 2px solid ${colours.primary};
`;
const StyledWrapper = styled.div`
    color: ${colours.secondary};
    padding: 16px;
    display: grid;
    grid-template-rows: min-content min-content;
    min-height: 60vh;
    box-sizing: border-box;
`;
const SliderContainer = styled.div``;
const StyledAnswer = styled.a`
    color: ${colours.secondary}
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover{
        color: ${colours.primary}
    }
`;
const StyledAnswerWrapper = styled.div`
    margin: 16px;
`;
const StyledHeading = styled.div`
    font-size: 1.25rem;
    padding: 8px;
`;
const StyledBody = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const StyledResponse = styled.div`
    font-size: 24px;
    padding-top: 50px;
    border-top: 2px solid ${colours.primary};
    margin: auto;
    margin-top: 50px;
    width: 60%;
`;

const PracticalQuizPage = ({ fullLessonId }) => {
    const location = useLocation();
    const lessonId = location.pathname.split('/practical/')[1] || fullLessonId;
    const [showResponse, setShowResponse] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState();
    const [questions, setQuestions] = useState();

    useEffect(() => {
        fetchAllQuestionsByLessonId(lessonId)
            .then((response) => {
                setQuestions(response.data);
            })
            .catch(errorLogger);
        fetchAllAnswersByLessonId(lessonId)
            .then((response) => setAnswers(response.data))
            .catch(errorLogger);
    }, [lessonId]);

    return questions && answers ? (
        <Wrapper>
            <Container>
                <Slider {...carouselSettings}>
                    {questions.map((ques, index) => {
                        const { id: questionId, question, codeSnippet } = ques;
                        return (
                            <StyledWrapper key={index}>
                                <StyledHeading>
                                    <StyledQuestionWrapper>
                                        <StyledQuestion>{`${questionId}: ${question}`}</StyledQuestion>
                                        {codeSnippet && (
                                            <StyledEditor>
                                                <TextEditor value={codeSnippet} />
                                            </StyledEditor>
                                        )}
                                    </StyledQuestionWrapper>
                                </StyledHeading>
                                <StyledBody>
                                    {answers
                                        .filter((answer) => answer.question.id === questionId)
                                        .map((answer, index) => {
                                            const { answerType, answer: ans, responseMessage } = answer;
                                            if (answerType.typeName === 'code') {
                                                return (
                                                    <StyledAnswerWrapper key={index}>
                                                        <span>
                                                            <TextEditor value={ans} />
                                                        </span>
                                                        <span>
                                                            <StyledAnswer
                                                                href="#"
                                                                onClick={() => {
                                                                    setShowResponse(true);
                                                                    setSelectedAnswer(responseMessage);
                                                                }}
                                                            ></StyledAnswer>
                                                        </span>
                                                    </StyledAnswerWrapper>
                                                );
                                            } else {
                                                return (
                                                    <StyledAnswerWrapper key={index}>
                                                        <StyledAnswer
                                                            href="#"
                                                            onClick={() => {
                                                                setShowResponse(true);
                                                                setSelectedAnswer(responseMessage);
                                                            }}
                                                        >
                                                            {`(${index + 1}) ${ans}`}
                                                        </StyledAnswer>
                                                    </StyledAnswerWrapper>
                                                );
                                            }
                                        })}
                                    {showResponse && <StyledResponse>{selectedAnswer}</StyledResponse>}
                                </StyledBody>
                            </StyledWrapper>
                        );
                    })}
                </Slider>
            </Container>
        </Wrapper>
    ) : (
        <></>
    );
};

export default PracticalQuizPage;
