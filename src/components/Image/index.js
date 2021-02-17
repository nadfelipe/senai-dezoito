import React from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'

const ImageStyle = styled.div`
    pointer-events: none;
    z-index: 1;
`;


export default function Link({ src, alt, width, height }) {
  return (
    <ImageStyle>
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    </ImageStyle>
  );
}