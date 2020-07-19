import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import { useHistory } from 'react-router-dom';

const StyledButton = styled.button`
    width: 100%;
    border: 6px solid ${colours.secondary}
    color: ${colours.secondary}
    background: none;
    border-radius: 25px;
    font-size: 2.5rem;
    padding: 1rem;

    &:hover {
        border: 6px solid ${colours.primary}
        background: none;
        color: ${colours.primary}
    }
`;
const BigButton = ({ text, path }) => {
    const history = useHistory();

    return <StyledButton onClick={() => history.push({ pathname: path })}>{text}</StyledButton>;
};
export default BigButton;
