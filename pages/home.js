import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import styled from 'styled-components';

import Image from '../src/components/Image'
import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import ReadingProgress from '../src/components/PageProgress'

import { Banner, Section1, Section2, Paragraph } from '../src/components/Home'
import Gallery from '../src/components/Home/Gallery'

export default function HomePage(){
    return(
        <>
            <ReadingProgress />
            <Head>
                <title>SENAI 18</title>
                <link rel="icon" href='../src/public/favicon.ico' />
            </Head>
            <Container className={styles.homepage}>
                <Banner>
                    <Banner.Div imgUrl1={'./img/pictures/foto1-banner.png'} imgUrl2={'./img/pictures/foto2-banner.png'}>
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
                            src='/img/pictures/foto1-section1.png'
                            alt="Foto da giovanna"
                            width="676"
                            height="451"
                            style={{pointerEvents: "none"}}
                        />
                        <Paragraph>
                            <Paragraph.H3 >Lorem ipsum dolor sit</Paragraph.H3>
                            <Paragraph.P>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque laoreet, erat eu vestibulum</Paragraph.P>
                        </Paragraph>
                    </Section1.Content>
                </Section1>
                <Section2 imgUrl={'./img/svg/fundo-section2.svg'}>
                    <Section2.Content imgBgUrl={'./img/svg/fundo-section2-content.svg'}>
                        <Paragraph toLeft={true}>
                            <Paragraph.H3 >Lorem ipsum dolor sit</Paragraph.H3>
                            <Paragraph.P>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque laoreet, erat eu vestibulum</Paragraph.P>
                        </Paragraph>
                    </Section2.Content>
                </Section2>
                <Gallery>
                </Gallery>
            </Container>
        </>
    )
}
