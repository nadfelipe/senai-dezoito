import styled from 'styled-components';
import React from  'react';

const Paragrafo = styled.div`
    max-width: 25%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20%;
    font-family: Jost, sans-serif;
    padding: 1% 0 4% 0;
`;

const Subtitulo = styled.h3`
    font-size: 3rem;
    color: #C4AED4;
    line-height: 110%;
    font-weight: 700;
`
const Texto = styled.p`
    max-width: 92%;
    font-size: 1.75rem;
    color: #5D3C74;
    line-height: 135%;
    letter-spacing: -3%;
    font-weight: 400;
`


export default function Paragraph({ childrenH3, childrenP }){
    return(
        <Paragrafo>
            <Subtitulo>{childrenH3}</Subtitulo>
            <br></br>
            <Texto>{childrenP}</Texto>
        </Paragrafo>
    )
};