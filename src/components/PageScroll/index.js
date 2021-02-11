import React from 'react';
import styled from 'styled-components';

const DivPage = styled.div`
    position:  fixed;
    background:  linear-gradient(
        to right,
        rgba(93, 60, 116) ${props => props.scroll},
        transparent  0);
    width:  100%;
    height:  5px;
    z-index:  3;
`;

export default DivPage;