import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Button from '../Button/component';
import LoadingSpinner from '../LoadingSpinner/component';
import { useHistory } from 'react-router-dom';
import { iconArray } from '../../images/imageLoader';

const Container = styled.div`
    text-align: left;
`;
export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    margin: 0 8px;
`;
const StyledCoursesContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
    border: 2px solid ${colours.primary}
    border-top: none;
`;

const StyledText = styled.div`
    padding-right: 12px;
    font-size: 1.25rem;
`;
const StyledImg = styled.img`
    margin: auto;
    width: 50px;
    object-fit: cover;
`;
const StyledHeading = styled.span`
    width: 100%;
    color: ${colours.primary};
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 1.5rem;
`;
const StyledLabel = styled.div`
    text-align: left;
    padding: 10px 8px 12px;
    font-size: 2rem;
    border: 2px solid ${colours.primary};
`;

const StyledSpecialLabel = styled.span`
    color: ${colours.primary};
`;

const PopularCourses = ({ courses, isLoading }) => {
    const history = useHistory();
    let counter = 1;
    courses.sort((a, b) => b.activeUsers - a.activeUsers);

    return (
        <Container>
            <StyledLabel>Top 5 courses:</StyledLabel>
            <StyledCoursesContainer>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    courses.slice(0, 5).map((course) => {
                        const { description, id, language, title, activeUsers } = course;
                        const languageIcon = iconArray.find((icon) => icon.path === language.iconPath);
                        return (
                            <StyledWrapper key={id}>
                                <StyledText>
                                    <StyledHeading>
                                        <p> {`${counter++}: ${title} `}</p>
                                        <p>[{language.language.toUpperCase()}]</p>
                                    </StyledHeading>
                                    <p>
                                        {description.slice(0, 180)}
                                        {description.length > 180 && '...'}
                                    </p>
                                    <span>
                                        <p>
                                            <StyledSpecialLabel>{activeUsers}</StyledSpecialLabel>
                                            {activeUsers > 1 ? ` people have` : ` person has`} taken this course!
                                        </p>
                                        <Button
                                            onClick={() => history.push({ pathname: `/learn/${id}` })}
                                            text="Go"
                                            size="small"
                                            variant="outlined"
                                            hierarchy="primary"
                                        />
                                    </span>
                                </StyledText>
                                <StyledImg src={languageIcon.icon} alt={`${language.language}`} />
                            </StyledWrapper>
                        );
                    })
                )}
            </StyledCoursesContainer>
        </Container>
    );
};
export default PopularCourses;
