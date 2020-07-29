import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import CoursesSearch from '../CoursesSearch/component';
import { fetchUnapprovedLessons } from '../../data/apiCalls';

const StyledContainer = styled.div`
    margin: 20vh auto 0 auto;
    width: 65vw;
`;

const ReviewLessonPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchUnapprovedLessons()
            .then((response) => {
                setCourses(response.data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <StyledContainer>
            <CoursesSearch courses={courses} isLoading={loading} review={true} />
        </StyledContainer>
    );
};

export default ReviewLessonPage;
