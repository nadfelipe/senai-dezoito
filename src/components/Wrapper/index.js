import styled from 'styled-components';
import React from  'react';

const WrapperIndex = styled.div`
    width: 90vw;
    min-height: 160vh;
    background-color: yellowgreen;
`;


export default function Wrapper({ children }){
    return(
        <WrapperIndex>
            {children}
        </WrapperIndex>
    )
};