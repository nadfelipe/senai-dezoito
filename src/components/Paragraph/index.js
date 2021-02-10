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
    position: absolute;
    right: 20%;
    padding: 1% 0 4% 0;
`;

const Subtitulo = styled.h3`
    font-size: 2.5rem;
    color: #C4AED4;
    line-height: 120%;
    font-weight: 700;
`
const Texto = styled.p`
    max-width: 90%;
    font-size: 2rem;
    color: #5D3C74;
    line-height: 115%;
    letter-spacing: -3.5%;
    font-weight: 500;
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