import styled, { keyframes } from 'styled-components';
import React from  'react';

const glitch = keyframes`
    2%,64%{
    transform: translate(2px,0) skew(0deg);
    }
    4%,60%{
    transform: translate(-2px,0) skew(0deg);
    }
    62%{
    transform: translate(0,0) skew(5deg); 
    }
`;

const glitchTop = keyframes`
    2%,64%{
        transform: translate(2px,0px);
    }
    4%,60%{
        transform: translate(0px,2px);
    }
    62%{
        transform: translate(10px,-5px) skew(-10deg); 
    }
`;

const glitchBottom = keyframes`
    2%,64%{
        transform: translate(-2px,0);
    }
    4%,60%{
        transform: translate(-2px,0);
    }
    62%{
        transform: translate(-22px,5px) skew(21deg); 
    }
`;

const GlitchWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${glitch} 0.8s linear infinite;
    &:before, &:after{
        content: 'SENAI';
        position: absolute;
        left: 0;
        color: #5D3C74;
        font-weight: 600;
        font-size: 14rem;
        line-height: 100%;
    };
    &:before{
        animation: ${glitchTop}  1s linear infinite;
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    };
    &:after{
        animation: ${glitchBottom} 1.2s linear infinite;
        clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    };
`;

const Glitch = styled.h1`
    color: #5D3C74;
    font-weight: 600;
    font-size: 14rem;
    line-height: 100%;
`;

export default function GlitchAnim({ children }){
    return(
        <GlitchWrapper>
            <Glitch title={children}>
                {children}
            </Glitch>
        </GlitchWrapper>
    )
};