import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Button from '../Button/component';
import { colours } from '../../constants/styles';

const Container = styled.div`
    margin: 0 auto;
    width: 45vw;
    height: 100%;
`;
const StyledCard = styled.div`
    display: inline-block;
    width: 95%;
    text-align:left;
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
`;
const StyledDescription = styled.p`
    padding: 4px 0;
`;

const StyledHeading = styled.span`
    width:100%;
    color: ${colours.primary};
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};

const UserCourses = ({ courses }) => (
    <Container>
        <StyledLabel>Pick up where you left off...</StyledLabel>
        <Slider {...settings}>
            {courses.map((course) => (
                <StyledCard key={course.id}>
                    <StyledCardHeader>
                        <StyledImg src={course.header} />
                    </StyledCardHeader>
                    <StyledCardInformation>
                        <StyledHeading>
                            <p>{course.title}</p>
                            <p>[{course.language.toUpperCase()}]</p>
                        </StyledHeading>
                        <StyledDescription>{course.description.slice(0, 150)}{course.description.length > 150 && '...'}</StyledDescription>
                        <Button onClick={() => window.location.pathname === '/'} text="Go" size="small" variant="outlined" hierarchy="primary" />
                    </StyledCardInformation>
                </StyledCard>
            ))}
        </Slider>
    </Container>
);
export default UserCourses;
