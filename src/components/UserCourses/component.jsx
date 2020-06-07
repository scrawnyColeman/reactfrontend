import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Button from '../Button/component';

const Container = styled.div`
    width: 400px;
    height: 100%;
    margin: auto;
    padding: 8px 0;
`;
const StyledWrapper = styled.div`
    display: inline-block;
    width: 200px;
    text-align: center;
`;
const StyledImg = styled.img`
    margin: auto;
    width: 200px;
    object-fit: cover;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 8px;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
};

const UserCourses = ({ courses }) => (
    <Container>
        <StyledLabel>Pick up where you left off...</StyledLabel>
        <Slider {...settings}>
            {courses.map((course) => (
                <StyledWrapper key={course.id}>
                    <StyledImg src={course.imgUrl} />
                    <p>{course.title}</p>
                    <p>{course.description.slice(0, 80)}</p>
                    <Button onClick={() => window.location.pathname === '/'} text="Go" size="small" variant="outlined" hierarchy="primary" />
                </StyledWrapper>
            ))}
        </Slider>
    </Container>
);
export default UserCourses;
