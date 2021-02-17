import React from 'react';
import styled from 'styled-components';

import Link from '../Link/index';
import Image from 'next/image';


const Button = styled.div`
`;

Button.NextPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Jost, sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: #5D3C74;
  width: 40%;
  height: 25%;
  margin-top: 30%;
`;

const Container = styled.div`
  padding-left: 15%;
  margin-top: -5%;
`;

const ImgButton = styled.div`
  background-image: url(${(props)=>props.imgUrl});
`;

export default function ButtonContinue({ childrenP, imgUrl }) {
  return (
    <Button.NextPage>
      <Link
      href={`/home`}
      >
        <p>{childrenP}</p>
        <Container>
          <ImgButton imgUrl={imgUrl}/>
        </Container>
      </Link>
    </Button.NextPage>
  );
}