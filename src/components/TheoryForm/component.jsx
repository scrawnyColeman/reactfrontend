import React from 'react';
import TextField from '../TextField/component';
import 'react-dropdown/style.css';
import styled from 'styled-components';

const StyledBody = styled.div``;

const TheoryForm = ({ setTheory }) => {
    return (
        <StyledBody>
            <TextField
                id="filled-multiline-static"
                size="large"
                margin="normal"
                rows={25}
                multiline={true}
                onChange={(event) => {
                    setTheory(event.target.value);
                }}
                placeholder={'Write your theory here...'}
            />
        </StyledBody>
    );
};

export default TheoryForm;
