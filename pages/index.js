import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ImgContinuar from '../src/public/continuar';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

import Container from '../src/components/Container';
import Paragraph from '../src/components/Paragraph';
import WrapperHome from '../src/components/Wrapper';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

const InitialH1 = styled.h1`
  color: #5D3C74;
  font-weight: 600;
  font-size: 19rem;
  line-height: 100%;
`;

const InitialH2 = styled.h2`
  font-style: italic;
  font-weight: 500;
  font-size: 4rem;
  color: #C4AED4;
  line-height: 100%;
`;

export default function Home() {
  return (
    <Container className={styles.home}>
      <Head>
        <title>SENAI 18</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"></meta>
      </Head>
      <WrapperHome>
        <Container.Right>
          <Container.Titles>
            <InitialH1>SENAI</InitialH1>
            <InitialH2>18 Anos</InitialH2>
          </Container.Titles>
          <Button.NextPage>
            <Link
              href={`/home`}
            >
              continuar
              <ImgContinuar/>
            </Link>
          </Button.NextPage>
        </Container.Right>
        <Paragraph 
          childrenH3='A Escola SENAI De Informática está completando 18 anos!'
          childrenP='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque laoreet, erat eu vestibulum rutrum, metus nunc porttitor est, id ullamcorper ipsum mi in nisi. Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque laoreet, erat eu vestibulum rutrum, metus nunc porttitor est, id ullamcorper ipsum mi in nisi. Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.'
        />
      </WrapperHome>
    </Container>
  )
}
