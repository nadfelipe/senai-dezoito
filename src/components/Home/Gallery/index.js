import React, { useState } from 'react';
import { Lightbox } from "react-modal-image";
import Image from 'next/image';

import ImageContainer from "./Image";
import { GalleryDiv, GalleryContent } from "./styles";
const srcImg1 = '/img/pictures/Img01.svg'

export default function Gallery(){
    const Picture = (img) => {
        return (
            <ImageContainer type={img.type} onClick={() => setLightbox(img.src)}>
                <Image objectFit="cover" src={img.src} alt={img.alt} layout="fill" quality={100} />
            </ImageContainer>
        )
    }

    const [lightbox, setLightbox] = useState(null);

    return(
        <div>
            {lightbox ? <Lightbox large={lightbox} onClose={() => setLightbox(false)} /> : null}
            
            <GalleryDiv>
                <GalleryContent>
                    <GalleryContent.Img imgID='img01'>
                        <Picture 
                            src={srcImg1}
                            alt="Foto da giovanna"
                            width="676"
                            height="451" 
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img02'>2</GalleryContent.Img>
                    <GalleryContent.Img imgID='img03'>3</GalleryContent.Img>
                    <GalleryContent.Img imgID='img04'>4</GalleryContent.Img>
                    <GalleryContent.Img imgID='img05'>5</GalleryContent.Img>
                    <GalleryContent.Img imgID='img06'>6</GalleryContent.Img>
                    <GalleryContent.Img imgID='img07'>7</GalleryContent.Img>
                    <GalleryContent.Img imgID='img08'>8</GalleryContent.Img>
                    <GalleryContent.Img imgID='img09'>9</GalleryContent.Img>
                    <GalleryContent.Img imgID='img10'>10</GalleryContent.Img>
                    <GalleryContent.Img imgID='img11'>11</GalleryContent.Img>
                    <GalleryContent.Img imgID='img12'>12</GalleryContent.Img>
                    <GalleryContent.Img imgID='img13'>13</GalleryContent.Img>
                    <GalleryContent.Img imgID='img14'>14</GalleryContent.Img>
                    <GalleryContent.Img imgID='img15'>15</GalleryContent.Img>
                    <GalleryContent.Img imgID='img16'>16</GalleryContent.Img>
                    <GalleryContent.Img imgID='img17'>17</GalleryContent.Img>
                    <GalleryContent.Img imgID='img18'>18</GalleryContent.Img>
                    <GalleryContent.Img imgID='img19'>19</GalleryContent.Img>
                    <GalleryContent.Img imgID='img20'>20</GalleryContent.Img>
                    <GalleryContent.Img imgID='img21'>21</GalleryContent.Img>
                    <GalleryContent.Img imgID='img22'>22</GalleryContent.Img>
                </GalleryContent>
            </GalleryDiv>
        </div>
    )
}