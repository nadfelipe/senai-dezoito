import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const LinkStyle = styled.a`
  transition:  0.4s;
  &:hover{
    padding-left: 10%;
  }
`;


export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkStyle {...props}>
        {children}
      </LinkStyle>
    </NextLink>
  );
}