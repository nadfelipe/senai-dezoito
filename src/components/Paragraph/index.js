import styled from 'styled-components';
import React from  'react';

const Paragrafo = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: red;
`;

const Subtitulo = styled.h3`
    font-size: 2.5rem;
    color: #C4AED4;
    line-height: 120%;
    font-weight: 700;
`
const Texto = styled.p`
    max-width: 90%;
    font-size: 1.5rem;
    color: #C4AED4;
    line-height: 126%;
    letter-spacing: -3.5%;
    font-weight: 500;
`


export default function Paragraph({ childrenH3, childrenP }){
    return(
        <Paragrafo>
            <Subtitulo>{childrenH3}</Subtitulo>
            <Texto>{childrenP}</Texto>
        </Paragrafo>
    )
};