import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import ImgContinuar from '../src/public/continuar'
import styles from '../styles/Home.module.css'

import Container from '../src/components/Container'
import Paragraph from '../src/components/Paragraph'



export default function Home() {
  return (
    <Container className={styles.home}>
      <Head>
        <title>SENAI 18</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <div>
            <h1>SENAI</h1>
            <h2>18 Anos</h2>
          </div>
          <div>
            <a>continuar</a>
            <ImgContinuar/>
          </div>
        </div>
        <Paragraph 
          childrenH3='A Escola SENAI De Informática está completando 18 anos!'
          childrenP='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque laoreet, erat eu vestibulum rutrum, metus nunc porttitor est, id ullamcorper ipsum mi in nisi. Vivamus cursus lacus ut sem tristique tristique. Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.Duis at aliquam orci. Nullam consectetur condimentum leo sed convallis.'
        />
      </div>
    </Container>
  )
}
