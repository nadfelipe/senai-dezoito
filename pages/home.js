import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import styled from 'styled-components';

const Banner = styled.section`
    width: 80vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

Banner.Textos = styled.div`
    max-width: 60%;
    align-self: flex-start;
    margin-top: 5%;
`;

Banner.H1 = styled.h1`
    font-family: Faustina, serif;
    font-weight: 500;
    font-size: 10rem;
    color: #5D3C74;
`;

Banner.H2 = styled.h2`
    font-family: Jost, sans-serif;
    font-weight: 500;
    font-size: 4rem;
    color: #E39600;
    font-style: italic;
    z-index: 100;
    &::before{
        content: '';
        width: 280px;
        height: 30px;
        background: rgba(255, 168, 0, 0.28);
        position: absolute;
        z-index: 3;
        margin-top: 2%;
        margin-left: 0.3%;
        opacity: 0.5;
    }
`;

const Section1 = styled.section`
    width: 80vw;
    min-height: 100vh;
    background: blue;
`;
const Section2 = styled.section`
    width: 80vw;
    min-height: 100vh;
    background: green;
`;
const Section3 = styled.section`
    width: 80vw;
    min-height: 100vh;
    background: yellowgreen;
`;


export default function HomePage(){
    return(
        <Container className={styles.homepage} >
            <Banner>
                <Banner.Textos>
                    <Banner.H1>SENAI INFO</Banner.H1>
                    <Banner.H2>#dezoitou</Banner.H2>
                </Banner.Textos>
                <ArrowScroll />
            </Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </Container>
    )
}
