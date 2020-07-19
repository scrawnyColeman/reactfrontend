import React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/styles';
import Player from 'react-player';

const Container = styled.div`
    margin: auto;
    border: 2px solid ${colours.primary};
    height: 68vh;
    width: 48vw;
    overflow: hidden;
`;

const divStyle = {
    maxWidth: `100%`,
    margin: `auto`,
};

const TheoryVisualAid = ({ courseData }) => (
    <Container>
        <Player style={divStyle} height="100%" width="100%" url={courseData} />
    </Container>
);

export default TheoryVisualAid;
