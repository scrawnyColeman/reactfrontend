import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopularCourses from '../PopularCourses/component';
import CoursesSearch from '../CoursesSearch/component';
import { fetchApprovedLessons } from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-gap: 32px;
    margin: 20vh 20px 0;
`;

const LearnPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchApprovedLessons()
            .then((response) => {
                setCourses(response.data);
                setLoading(false);
            })
            .catch(errorLogger);
    }, []);

    return (
        <StyledItemWrapper>
            <CoursesSearch courses={courses} isLoading={loading} />
            <PopularCourses courses={courses} isLoading={loading} />
        </StyledItemWrapper>
    );
};

export default LearnPage;
