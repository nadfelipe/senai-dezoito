import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import styled from 'styled-components';

import Image from '../src/components/Image'
import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import ReadingProgress from '../src/components/PageProgress'

import { Banner, Section1, Section2, Paragraph } from '../src/components/Home'

const Gallery = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

Gallery.Content = styled.section`
    max-width: 80%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 580px) 800px repeat(4, 580px) 800px repeat(2, 580px) 800px;
    grid-template-areas: 
    "img1 img2"
    "img1 img3"
    "img4 img5"
    "img6 img7"
    "img8 img9"
    "img10 img10"
    "img11 img12"
    "img13 img12"
    "img13 img14"
    "img15 img16"
    "img17 img17"
    "img18 img19"
    "img20 img21"
    "img22 img22";
`;

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
                    <Banner.Div imgUrl1={'./img/fotos/foto1-banner.png'} imgUrl2={'./img/fotos/foto2-banner.png'}>
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
                    <Gallery.Content>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>
                    </Gallery.Content>
                </Gallery>
            </Container>
        </>
    )
}
