import React from 'react';
import styled from 'styled-components';

import Link from '../Link/index';
import Image from 'next/image';
import ImgContinuar from '../../public/img/svg/continuar.svg';

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
  margin-top: 10%;
`;

const Container = styled.div`
  padding-left: 15%;
  margin-top: -5%;
  transition: 0.3s;
  &:hover{
    padding-left: 20%;
  }
`;

export default function ButtonContinue({ childrenP }) {
  return (
    <Button.NextPage>
      <Link
      href={`/home`}
      >
        <p>{childrenP}</p>
        <Container>
          <ImgContinuar />
        </Container>
      </Link>
    </Button.NextPage>
  );
}