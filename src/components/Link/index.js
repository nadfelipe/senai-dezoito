import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';


export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}