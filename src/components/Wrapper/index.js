import styled from 'styled-components';
import React from  'react';

const WrapperIndex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90vw;
    min-height: 160vh;
    flex-wrap: wrap;
`;


export default function Wrapper({ children }){
    return(
        <WrapperIndex>
            {children}
        </WrapperIndex>
    )
};