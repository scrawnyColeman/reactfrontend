import React, { useState } from 'react';
import TextField from '../TextField/component';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import { fetchAllLanguages } from '../../data/apiCalls';

const StyledHeader = styled.div`
    border-top: 2px solid ${colours.primary};
    border-right: 2px solid ${colours.primary};
    border-bottom: 2px solid ${colours.primary};
`;
const StyledBody = styled.div``;

const LessonKeyInformationForm = ({ setDescription, setTitle, setYTLink, setLanguageId, setEditorLanguage }) => {
    const options = [{ value: 0, label: 'Select language...' }];
    fetchAllLanguages()
        .then((response) => {
            response.data.map((lang) => {
                const { id, language } = lang;
                return options.push({ value: id, label: language });
            });
        })
        .catch((error) => console.log(error));

    const [languageViaDropdown, setLanguageDropdown] = useState(options[0]);

    return (
        <div>
            <StyledHeader>
                <TextField
                    row={1}
                    placeholder={`Lesson Title:`}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <Dropdown
                    options={options}
                    value={languageViaDropdown.label}
                    onChange={(event) => {
                        setLanguageDropdown(event);
                        setLanguageId(event.value);
                        setEditorLanguage(event.label);
                    }}
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
                        setDescription(event.target.value);
                    }}
                    placeholder={'Describe your lesson here...'}
                />
                <div style={{ marginTop: '3px' }}>
                    <TextField
                        row={1}
                        placeholder={`Youtube URL:`}
                        onChange={(event) => {
                            setYTLink(event.target.value);
                        }}
                    />
                </div>
            </StyledBody>
        </div>
    );
};

export default LessonKeyInformationForm;
