import React, { useState } from 'react';
import styled from 'styled-components';
import { carouselSettings, colours } from '../../constants/styles';
import data from '../../data/quizzes.js';
import Slider from 'react-slick';
import TextEditor from '../TextEditor/component';
import { useLocation } from 'react-router-dom';

const Container1 = styled.div`
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

const PracticalQuizPage = ({ id }) => {
    const location = useLocation();
    const lessonId = id || location.pathname.split('/practical/')[1];
    const { quizzes } = data;
    const quizQuestions = quizzes.find((quiz) => quiz.correspondingLessonID.includes(lessonId));
    const [showResponse, setShowResponse] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const carousel = {
        ...carouselSettings,
        slidesToShow: 1,
        infinite: false,
        afterChange: () => {
            setShowResponse(false);
        },
    };

    return (
        <Container1>
            <Container>
                <Slider {...carousel}>
                    {quizQuestions.questions.map((question, index) => {
                        const { id: questionId, question: innerQuestion, codesnippet, answers } = question;

                        return (
                            <StyledWrapper key={index}>
                                <StyledHeading>
                                    <StyledQuestionWrapper>
                                        <StyledQuestion>{`${questionId}: ${innerQuestion}`}</StyledQuestion>
                                        {codesnippet && (
                                            <StyledEditor>
                                                <TextEditor value={codesnippet} />
                                            </StyledEditor>
                                        )}
                                    </StyledQuestionWrapper>
                                </StyledHeading>
                                <StyledBody>
                                    {answers.map((answer, index) => {
                                        const { type, answer: nestedAnswer, responseMessage } = answer;
                                        if (type === 'code') {
                                            return (
                                                <StyledAnswerWrapper key={index}>
                                                    <span>
                                                        <TextEditor value={nestedAnswer} />
                                                    </span>
                                                    <span>
                                                        <StyledAnswer
                                                            href="#"
                                                            onClick={() => {
                                                                setShowResponse(true);
                                                                setSelectedAnswer(responseMessage);
                                                            }}
                                                        >
                                                            btn
                                                        </StyledAnswer>
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
                                                        {`(${index + 1}) ${nestedAnswer}`}
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
        </Container1>
    );
};

export default PracticalQuizPage;
