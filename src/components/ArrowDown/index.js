import React from 'react';
import styled, {keyframes} from 'styled-components';

const elasticus = keyframes`
    0% {
        transform-origin: 0% 0%;
        transform: scale(1, 0);
    }
    50% {
        transform-origin: 0% 0%;
        transform: scale(1, 1);
    }
    50.1% {
        transform-origin: 0% 100%;
        transform: scale(1, 1);
    }
    100% {
        transform-origin: 0% 100%;
        transform: scale(1, 0);
    }
`;

const Arrow = styled.div`
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 38px;
    &::after{
        content: '';
        display: block;
        margin: 0;
        padding: 0;
        width: 20px;
        height: 20px;
        border-top: 4px solid #5D3C74;
        border-right: 4px solid #5D3C74;
        transform: rotate(135deg);
    }
`;

const Div = styled.div`
    display: block;
    position: relative;
    padding-top: 130px;
    text-align:center;
    align-self: flex-end;
    margin-bottom: 6%;
    margin-right: 3%;
    &::before{
        content: ' ';
        animation: ${elasticus} 1.2s cubic-bezier(1, 0, 0, 1) infinite;
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: 5px;
        width: 4px;
        height: 154px;
        background: #5D3C74;
    }
`;


export default function ArrowScroll() {
  return (
    <Div >
        <Arrow></Arrow>
    </Div>
  );
}