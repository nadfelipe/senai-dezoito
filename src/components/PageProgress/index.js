import React,  { useState, useEffect } from 'react'
import styled from 'styled-components'

const ReadingProgressWrapper = styled.div`
    position: fixed;
    height: 2px;
    top: 0;
    z-index: 999;
    width: 100%;
`;
const ReadingProgressBar = styled.div`
    width: ${props => props.width};
    background-color: #E39600;
    position: fixed;
    z-index: 999;
    height: 6px;
`;

const ReadingProgress = ({target}) => {
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = (target) => {
        var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
        setReadingProgress(`${Math.floor((window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop) / scrollMaxY * 100)}%`);
        console.log(readingProgress)
    };
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return (
        <ReadingProgressWrapper>
            <ReadingProgressBar width={readingProgress} />
        </ReadingProgressWrapper>
    );
  };
  export default ReadingProgress;