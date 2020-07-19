import React, { useState } from 'react';
import TextField from '../TextField/component';
import data from '../../data/languages';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import { colours } from '../../constants/styles';

const StyledHeader = styled.div`
    border-top: 2px solid ${colours.primary};
    border-right: 2px solid ${colours.primary};
    border-bottom: 2px solid ${colours.primary};
`;
const StyledBody = styled.div``;

const TheoryForm = ({ theory, setTheory }) => {
    const options = [];
    data.languages.map((language) => options.push({ id: language.id, label: language.name }));

    const [languageViaDropdown, setLanguage] = useState(options[0]);

    const selectedLanguage = options.find((key) => key.label === languageViaDropdown.label);
    console.log(selectedLanguage.id); //language id from dropdown for post and put request.

    return (
        <>
            <StyledHeader>
                <TextField row={1} placeholder={`Lesson Title:`} />
                <Dropdown
                    options={options}
                    value={languageViaDropdown.label}
                    onChange={(event) => setLanguage(event)}
                    placeholder="Select an option"
                />
            </StyledHeader>
            <StyledBody>
                <TextField
                    id="filled-multiline-static"
                    size="large"
                    margin="normal"
                    rows={16}
                    multiline={true}
                    onChange={(event) => {
                        setTheory(event.target.value);
                    }}
                    placeholder={'Write your theory here...'}
                />
                <div style={{ marginTop: '3px' }}>
                    <TextField row={1} placeholder={`Youtube URL:`} />
                </div>
            </StyledBody>
        </>
    );
};

export default TheoryForm;
