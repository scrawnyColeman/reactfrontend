import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';
import LoadingSpinner from '../LoadingSpinner/component';
import TextField from '../TextField/component';

const Container = styled.div`
    text-align: left;
`;
export const StyledWrapper = styled.div`
    margin: 0 auto;
`;
const StyledCoursesContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
`;
const StyledText = styled.div`
    padding-right: 12px;
    font-size: 1.25rem;
`;
const StyledHeading = styled.span`
    width: 100%;
    color: ${colours.primary};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 1.5rem;
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
const CoursesSearch = ({ courses, isLoading }) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const sortedCourses = courses.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <Container>
            <StyledSearchBar>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Search..."
                    margin="normal"
                    onChange={(event) => setTitle(event.target.value)}
                />
            </StyledSearchBar>
            <StyledCoursesContainer>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    sortedCourses.map((course) => {
                        const { description, id, title: courseTitle, language, activeUsers } = course;
                        const userSearchFilter = title.toLowerCase().replace(/\s+/g, '');
                        const courseNameThenLanguage = courseTitle
                            .replace(/\s+/g, '')
                            .concat(language.language)
                            .toLowerCase();
                        //recursionjava
                        const courseLanguageThenName = language.language
                            .concat(courseTitle.replace(/\s+/g, ''))
                            .toLowerCase();
                        //javarecursion

                        if (
                            courseLanguageThenName.includes(userSearchFilter) ||
                            courseNameThenLanguage.includes(userSearchFilter) ||
                            !title
                        ) {
                            return (
                                <StyledWrapper key={id}>
                                    <StyledText>
                                        <StyledHeading>
                                            <p>{courseTitle}</p>
                                            <p>[{language.language.toUpperCase()}]</p>
                                        </StyledHeading>
                                        <p>
                                            {description.slice(0, 180)}
                                            {description.length > 180 && '...'}
                                        </p>
                                        <span>
                                            <p>
                                                <span style={{ color: colours.primary }}>{activeUsers}</span> people
                                                have taken this course!
                                            </p>
                                            <Button
                                                onClick={() => history.push({ pathname: `/learn/${id}` })}
                                                text="Go"
                                                size="small"
                                                variant="outlined"
                                                hierarchy="primary"
                                            />
                                        </span>
                                        <StyledHorizontalLine />
                                    </StyledText>
                                </StyledWrapper>
                            );
                        }
                        return true;
                    })
                )}
            </StyledCoursesContainer>
        </Container>
    );
};
export default CoursesSearch;
