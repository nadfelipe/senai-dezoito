import styled from 'styled-components';
import React from  'react';

const WrapperIndex = styled.div`
    width: 90vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;


export default function Wrapper({ children }){
    return(
        <WrapperIndex>
            {children}
        </WrapperIndex>
    )
};