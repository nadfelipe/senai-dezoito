import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image'

import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import ReadingProgress from '../src/components/PageProgress'
import Banner from '../src/components/Banner'


const Section1 = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-position: 0px -1px;
    background-size: 100% ;
`;

Section1.Content = styled.section`
    width: 80%;
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
                    <Banner.Div imgUrl1={'./img/fotos/foto1-banner.svg'} imgUrl2={'./img/fotos/foto2-banner.png'}>
                        <Banner.Textos>
                            <Banner.H1>SENAI INFO</Banner.H1>
                            <Banner.H2>#dezoitou</Banner.H2>
                        </Banner.Textos>
                        <ArrowScroll />
                    </Banner.Div>
                </Banner>
                <Section1 imgUrl={'./img/svg/fundo-section1.svg'}>
                    <Section1.Content>
                        <Image
                            src='/img/fotos/foto1-section1.png'
                            alt="Foto da giovanna"
                            width="500"
                            height="500"
                        >

                        </Image>
                    </Section1.Content>
                </Section1>
                    
                <Section2></Section2>
                <Section3></Section3>
            </Container>
        </>
    )
}
