import React, { useState } from 'react';
import { Lightbox } from "react-modal-image";
import Image from 'next/image';

import ImageContainer from "./Image";
import { GalleryDiv, GalleryContent } from "./styles";

// const srcImg1 = '/img/pictures/Img01.svg'
// const srcImg2 = '/img/pictures/Img02.svg'
// const srcImg3 = '/img/pictures/Img03.svg'
// const srcImg4 = '/img/pictures/Img04.svg'
// const srcImg5 = '/img/pictures/Img05.svg'
// const srcImg6 = '/img/pictures/Img06.svg'
// const srcImg7 = '/img/pictures/Img07.svg'
// const srcImg8 = '/img/pictures/Img08.svg'
// const srcImg9 = '/img/pictures/Img09.svg'
// const srcImg10 = '/img/pictures/Img10.svg'
// const srcImg11 = '/img/pictures/Img11.svg'
// const srcImg12 = '/img/pictures/Img12.svg'
// const srcImg13 = '/img/pictures/Img13.svg'
// const srcImg14 = '/img/pictures/Img14.svg'
// const srcImg15 = '/img/pictures/Img15.svg'
// const srcImg16 = '/img/pictures/Img16.svg'
// const srcImg17 = '/img/pictures/Img17.svg'
// const srcImg18 = '/img/pictures/Img18.svg'
// const srcImg19 = '/img/pictures/Img19.svg'
// const srcImg20 = '/img/pictures/Img20.svg'
// const srcImg21 = '/img/pictures/Img21.svg'
// const srcImg22 = '/img/pictures/Img22.svg'

export default function Gallery(){
    const Picture = (img) => {
        return (
            <ImageContainer type={img.type} onClick={() => setLightbox(img.src)}>
                <Image objectFit="cover" src={img.src} alt={img.alt} layout="fill" quality={100} />
            </ImageContainer>
        )
    }

    const [lightbox, setLightbox] = useState(null);

    let images = []
    for(let i=0; i<23; i++){
        images.push(
            <GalleryContent.Img key={i} imgID={`img${i}`}>
                <Picture 
                    src={`/img/pictures/Img${i}.svg`}
                    alt=""
                />
            </GalleryContent.Img>
        )
    }

    return(
        <div>
            {lightbox ? <Lightbox large={lightbox} onClose={() => setLightbox(false)} /> : null}
            
            <GalleryDiv>
                <GalleryContent>
                    {images}
                    {/* <GalleryContent.Img imgID='img01'>
                        <Picture 
                            src={srcImg1}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img02'>
                        <Picture 
                            src={srcImg2}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img03'>
                        <Picture 
                            src={srcImg3}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img04'>
                        <Picture 
                            src={srcImg4}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img05'>
                        <Picture 
                            src={srcImg5}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img06'>
                        <Picture 
                            src={srcImg6}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img07'>
                        <Picture 
                            src={srcImg7}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img08'>
                        <Picture 
                            src={srcImg8}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img09'>
                        <Picture 
                            src={srcImg9}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img10'>
                        <Picture 
                            src={srcImg10}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img11'>
                        <Picture 
                            src={srcImg11}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img12'>
                        <Picture 
                            src={srcImg12}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img13'>
                        <Picture 
                            src={srcImg13}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img14'>
                        <Picture 
                            src={srcImg14}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img15'>
                        <Picture 
                            src={srcImg15}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img16'>
                        <Picture 
                            src={srcImg16}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img17'>
                        <Picture 
                            src={srcImg17}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img18'>
                        <Picture 
                            src={srcImg18}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img19'>
                        <Picture 
                            src={srcImg19}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img20'>
                        <Picture 
                            src={srcImg20}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img21'>
                        <Picture 
                            src={srcImg21}
                            alt=""
                        />
                    </GalleryContent.Img>
                    <GalleryContent.Img imgID='img22'>
                        <Picture 
                            src={srcImg22}
                            alt=""
                        />
                    </GalleryContent.Img> */}
                </GalleryContent>
            </GalleryDiv>
        </div>
    )
}