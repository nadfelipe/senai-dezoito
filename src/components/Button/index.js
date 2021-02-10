import React from 'react';
import styled from 'styled-components';

import Link from '../Link/index';
import Image from 'next/image';

const ImgContinuarPath = '/../../public/img/continuar.png'

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

export default function ButtonContinue({ childrenP, urlImg }) {
  return (
    <Button.NextPage>
      <Link
      href={`/home`}
      >
        <p>{childrenP}</p>
      </Link>
    </Button.NextPage>
  );
}