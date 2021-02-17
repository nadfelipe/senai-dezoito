import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import styled from 'styled-components';
import ReadingProgress from '../src/components/PageProgress'
import Banner from '../src/components/Banner'


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
    const ref = React.createRef();
    return(
        <>
            <ReadingProgress />
            <Head>
                <title>SENAI 18</title>
                <link rel="icon" href='../src/public/favicon.ico' />
            </Head>
            <Container className={styles.homepage}>
                    <Banner>
                        <Banner.Div>
                            <Banner.Textos>
                                <Banner.H1>SENAI INFO</Banner.H1>
                                <Banner.H2>#dezoitou</Banner.H2>
                            </Banner.Textos>
                            <ArrowScroll />
                        </Banner.Div>
                    </Banner>
                <Section1></Section1>
                <Section2></Section2>
                <Section3></Section3>
            </Container>
        </>
    )
}
