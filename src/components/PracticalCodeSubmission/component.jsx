import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import TextEditor from '../TextEditor/component';
import Button from '../Button/component';

const Container = styled.div`
    height: 65vh;
    border: 2px solid ${colours.primary};
    padding: 16px;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflox-y: scroll;
`;

const StyledButtonContainer = styled.div`
    margin-top: 24px;
    text-align: right;
`;

const PracticalCodeSubmission = ({ data, getHelp, toggleSubmission, submitted }) => (
    <Container>
        <TextEditor
            mode={data.language}
            readOnly={false}
            minLines={20}
            maxLines={20}
            placeholder={`// Write your code here\n//Don't be afraid to seek help from the forum`}
            fontSize={18}
        />
        <StyledButtonContainer>
            <Button text="Get help" onClick={getHelp} />
            <Button text={submitted ? 'View Question' : 'View Solution'} onClick={toggleSubmission} />
        </StyledButtonContainer>
    </Container>
);

export default PracticalCodeSubmission;
