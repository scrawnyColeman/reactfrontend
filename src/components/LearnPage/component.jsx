import React, { useState } from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import data from '../../data/courses.js';
import CoursesSearch from '../CoursesSearch/component';
import { useLocation } from 'react-router-dom';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-gap: 32px;
    margin: 20vh 20px 0 20px;
`;

const LearnPage = () => {
    const location = useLocation().search;
    const [param, setParam] = useState(location);
    const { courses } = data;
    return (
        <StyledItemWrapper>
            <CoursesSearch courses={courses} onClick={setParam} />
            <PopularCourses courses={courses} onClick={setParam} />
        </StyledItemWrapper>
    );
};

export default LearnPage;
