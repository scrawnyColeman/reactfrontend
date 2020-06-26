import React from 'react';
import styled from 'styled-components';
import { carouselSettings, colours } from '../../constants/styles';
import data from '../../data/quizzes.js';
import Slider from 'react-slick';
import PrerequisiteQuiz from '../PrequisiteQuiz/component';

const Container = styled.div`
    color: ${colours.primary}
    height: 65vh;
    margin: 0 auto;
    width: 90vw;
    border: 2px solid ${colours.primary};
`;

const PrerequisiteQuizPage = ({ id }) => {
    const { quizzes } = data;
    const carousel = { ...carouselSettings, slidesToShow: 1, infinite: false };

    return (
        <Container>
            <Slider {...carousel}>
                {quizzes.map(
                    (quizTopic, index) =>
                        quizTopic.prerequisiteOfLessonID.includes(id) && (
                            <PrerequisiteQuiz questions={quizTopic.questions} key={index} />
                        ),
                )}
            </Slider>
        </Container>
    );
};

export default PrerequisiteQuizPage;
