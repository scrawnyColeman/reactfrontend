import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PracticalCodeChallenge from '../PracticalCodeChallenge/component';
import PracticalCodeSubmission from '../PracticalCodeSubmission/component';
import { fetchSolutionByPracticalId } from '../../data/apiCalls';
import { errorLogger } from '../../data/errorLogger';
import { useHistory } from 'react-router-dom';

const PracticalContainer = styled.div`
    margin: 15vh auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const PracticalComponent = ({ isCodeSubmitted, setCodeSubmitted, practical, forumPostId }) => {
    const history = useHistory();
    const [solution, setSolution] = useState();
    useEffect(() => {
        fetchSolutionByPracticalId(practical.id)
            .then((response) => {
                setSolution(response.data);
            })
            .catch(errorLogger);
    }, [practical.id]);

    const { title, question, hint, codeSnippet, lesson } = practical;
    const language = lesson.language.language;
    console.log(solution);
    console.log(practical);
    return (
        <PracticalContainer>
            <PracticalCodeChallenge
                data={{ title, question, hint, codeSnippet, solution, language }}
                submitted={isCodeSubmitted}
            />
            <PracticalCodeSubmission
                data={{ language }}
                submitted={isCodeSubmitted}
                toggleSubmission={() => {
                    setCodeSubmitted(!isCodeSubmitted);
                }}
                getHelp={() => {
                    console.log({ forumPostId });
                    history.push({ pathname: `/forum/${forumPostId}` });
                }}
            />
        </PracticalContainer>
    );
};
export default PracticalComponent;
