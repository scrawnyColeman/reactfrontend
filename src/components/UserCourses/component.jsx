import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Button from '../Button/component';
import { colours, carouselSettings } from '../../constants/styles';
import { useHistory } from 'react-router-dom';
import { imageArray } from '../../images/imageLoader';

const Container = styled.div`
    margin: 0 auto;
    width: 45vw;
    height: 100%;
`;
const StyledCard = styled.div`
    display: inline-block;
    width: 95%;
    text-align: left;
    height: 490px;
    border: 2px ${colours.secondary};
`;
const StyledCardInformation = styled.div`
    height: 220px;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-rows: 50px 120px 35px;
    padding: 6px;
`;
const StyledCardHeader = styled.div`
    height: 270px
    overflow: hidden;
`;
const StyledImg = styled.img`
    width: 95%;
    height: 270px;
    margin: auto;
    object-fit: cover;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 0 12px 12px;
    font-size: 1.75rem;
`;
const StyledDescription = styled.p`
    padding: 4px 0;
`;

const StyledHeading = styled.span`
    width: 100%;
    color: ${colours.primary};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

const UserCourses = ({ courses }) => {
    const history = useHistory();

    return (
        <Container>
            <StyledLabel>Pick up where you left off...</StyledLabel>
            <Slider {...carouselSettings}>
                {courses.map((course) => {
                    const { lesson } = course;
                    const languageImage = imageArray.find((img) => img.path === lesson.language.imagePath);
                    return (
                        <StyledCard key={course.id}>
                            <StyledCardHeader>
                                <StyledImg src={languageImage.img} />
                            </StyledCardHeader>
                            <StyledCardInformation>
                                <StyledHeading>
                                    <p>{lesson.title}</p>
                                    <p>[{lesson.language.language.toUpperCase()}]</p>
                                </StyledHeading>
                                <StyledDescription>
                                    {lesson.description.slice(0, 150)}
                                    {lesson.description.length > 150 && '...'}
                                </StyledDescription>
                                <Button
                                    onClick={() => {
                                        history.push({ pathname: `/learn/${lesson.id}` });
                                    }}
                                    text="Go"
                                    size="small"
                                    variant="outlined"
                                    hierarchy="primary"
                                />
                            </StyledCardInformation>
                        </StyledCard>
                    );
                })}
            </Slider>
        </Container>
    );
};

export default UserCourses;
