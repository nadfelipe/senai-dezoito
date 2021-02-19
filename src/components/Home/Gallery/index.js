import React, { useState, useEffect } from 'react';
import { Lightbox } from "react-modal-image";
import Image from 'next/image';

import ImageContainer from "./Image";
import { GalleryDiv, GalleryContent } from "./styles";

export default function Gallery(){
    const Picture = (img) => {
        return (
            <ImageContainer onClick={() => setLightbox(img.src)}>
                <Image objectFit="cover" src={img.src} alt={img.alt} layout="fill" quality={1} priority={img.priority || false}/>
            </ImageContainer>
        )
    }

    const [lightbox, setLightbox] = useState(null);

    let images = []
    for(let i=0; i<21; i++){
        images.push(
            <GalleryContent.Img key={i} imgID={`img${i}`}>
                <Picture 
                    src={`/img/pictures/Img${i}.svg`}
                    alt={`Imagem ${i}`}
                />
            </GalleryContent.Img>
        )
    }


    return(
        <div>
            {lightbox ? <Lightbox hideZoom={true} large={lightbox} onClose={() => setLightbox(false)} /> : null}
            
            <GalleryDiv>
                <GalleryContent>
                    {images}
                    {/* <GalleryContent.Img imgID="img1">
                        <Picture 
                            src="/img/pictures/Img1.svg"
                            alt=""
                        />
                    </GalleryContent.Img>
                    
                    <GalleryContent.Img imgID="img2">
                        <Picture 
                            src="/img/pictures/Img2.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img3">
                        <Picture 
                            src="/img/pictures/Img3.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img4">
                        <Picture 
                            src="/img/pictures/Img4.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img5">
                        <Picture 
                            src="/img/pictures/Img5.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img6">
                        <Picture 
                            src="/img/pictures/Img6.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img7">
                        <Picture 
                            src="/img/pictures/Img7.svg"
                            alt=""
                        />
                    </GalleryContent.Img>
                    
                    <GalleryContent.Img imgID="img8">
                        <Picture 
                            src="/img/pictures/Img8.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img9">
                        <Picture 
                            src="/img/pictures/Img9.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img10">
                        <Picture 
                            src="/img/pictures/Img10.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img11">
                        <Picture 
                            src="/img/pictures/Img11.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img12">
                        <Picture 
                            src="/img/pictures/Img12.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img13">
                        <Picture 
                            src="/img/pictures/Img13.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img14">
                        <Picture 
                            src="/img/pictures/Img14.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img15">
                        <Picture 
                            src="/img/pictures/Img15.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img16">
                        <Picture 
                            src="/img/pictures/Img16.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img17">
                        <Picture 
                            src="/img/pictures/Img17.svg"
                            alt=""
                        />
                    </GalleryContent.Img>
                    
                    <GalleryContent.Img imgID="img18">
                        <Picture 
                            src="/img/pictures/Img18.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img19">
                        <Picture 
                            src="/img/pictures/Img19.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img20">
                        <Picture 
                            src="/img/pictures/Img20.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img21">
                        <Picture 
                            src="/img/pictures/Img21.svg"
                            alt=""
                        />
                    </GalleryContent.Img>

                    <GalleryContent.Img imgID="img22">
                        <Picture 
                            src="/img/pictures/Img22.svg"
                            alt=""
                        />
                    </GalleryContent.Img> */}
                </GalleryContent>
            </GalleryDiv>
        </div>
    )
}