import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

import Container from '../src/components/Container';
import ArrowScroll from '../src/components/ArrowDown'
import styled from 'styled-components';
import ReadingProgress from '../src/components/PageProgress'

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

const DivReadingProgress = styled.div`
    progress {
        height: 20px;
        color: #5D3C74 !important;
        border: 1 !important;
    }
`;

// const ProgressBar = styled.div`
//   position: fixed;
//   height: 5px;
//   top: 0;
//   background-color: #ff0000;
// `;

// const ReadingProgress = ({target}) => {
//     const [readingProgress, setReadingProgress] = useState(0);
//     console.log(target)
//     const scrollListener = () => {
//       if (!target.current) {
//         return;
//       }
  
//       const element         = target.current;
//       const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
//       const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
//       if (windowScrollTop === 0) {
//         return setReadingProgress(0);
//       }
  
//       if (windowScrollTop > totalHeight) {
//         return setReadingProgress(100);
//       }

//       setReadingProgress((windowScrollTop / totalHeight) * 100);
//     };
    
//     useEffect(() => {
//       window.addEventListener("scroll", scrollListener);
//       return () => window.removeEventListener("scroll", scrollListener);
//     });
    
//     console.log(readingProgress)

//     return <ProgressBar style={{width: `${readingProgress}%`}} />;
//   };


export default function HomePage(){
    const ref = React.createRef();
    return(
        <>
            <ReadingProgress />
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
        </>
    )
}
