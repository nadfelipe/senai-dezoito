import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

import Container from '../src/components/Container';
import Paragraph from '../src/components/Paragraph';
import WrapperHome from '../src/components/Wrapper';
import Button from '../src/components/Button';
import Glitch from '../src/components/Glitch';



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
        <link rel="icon" href='../src/public/favicon.ico' />
        <meta charset="utf-8"></meta>
      </Head>
      <WrapperHome>
        <Container.Fixed>
          <Container.Titles>
            <Glitch>
              SENAI
            </Glitch>
            <InitialH2>18 Anos</InitialH2>
          </Container.Titles>
          <Button 
              childrenP='continuar'
          >
          </Button>
        </Container.Fixed>
        <Paragraph 
          childrenH3='A Escola SENAI De Informática está completando 18 anos!'
          childrenP='Em comemoração à tragetória dos alunos e funcionários nessa unidade, o pessoal da primeira turma do Técnico em Multimídia elaborou projetos de fotografia com essa temática. Com essa seleção de fotos, buscamos mostrar a relação entre as pessoas e o ambiente que formam essa escola.'
        />
      </WrapperHome>
    </Container>
  )
}
