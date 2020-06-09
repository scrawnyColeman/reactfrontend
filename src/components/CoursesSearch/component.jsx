import React, { useState } from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';
import TextField from '../TextField/component';

const Container = styled.div`
    text-align: left;
`;
const StyledWrapper = styled.div`
    margin: 0 auto;
`;
const StyledCoursesContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
`;
const StyledText = styled.div`
    padding-right: 12px;
`;
const StyledHeading = styled.span`
    width:100%;
    color: ${colours.primary};
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
`;
const StyledSearchBar = styled.div`
    width: 100%;
    height: max-content;
`;
const StyledHorizontalLine = styled.hr`
    border: 2px solid ${colours.primary};
    border-radius: 3px;
    width: 100%;
`;
const CoursesSearch = ({ courses }) => {
    const [title, setTitle] = useState('');
    return (
        <Container>
            <StyledSearchBar>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder='Search...'
                    size="small"
                    margin="normal"
                    onChange={(event) => setTitle(event.target.value)}
                />
            </StyledSearchBar>
            <StyledCoursesContainer>
                {courses.map((course) => {
                    const userSearchFilter = title.toLowerCase().replace(/\s+/g, '');
                    const courseNameThenLanguage = course.title.replace(/\s+/g, '').concat(course.language).toLowerCase();
                    const courseLanguageThenName = course.language.concat(course.title.replace(/\s+/g, '')).toLowerCase();

                    if (courseLanguageThenName.includes(userSearchFilter) || courseNameThenLanguage.includes(userSearchFilter) || !title) {
                        return (<StyledWrapper key={course.id}>
                            <StyledText>
                                <StyledHeading>
                                    <p>{course.title}</p>
                                    <p>[{course.language.toUpperCase()}]</p>
                                </StyledHeading>
                                <p>{course.description.slice(0, 180)}{course.description.length > 150 && '...'}</p>
                                <span>
                                    <p><span style={{ color: `${colours.primary}` }}>{course.activeUsers}</span> people have taken this course!</p>
                                    <Button onClick={() => window.location.pathname === '/'} text="Go" size="small" variant="outlined" hierarchy="primary" />
                                </span>
                                <StyledHorizontalLine />
                            </StyledText>
                        </StyledWrapper>
                        )
                    } return true
                })}
            </StyledCoursesContainer>
        </Container>
    );
};
export default CoursesSearch;