import styled from 'styled-components';

export const GalleryDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 0 5rem 0;
`;

export const GalleryContent = styled.section`
    width: 80%;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 580px) 800px repeat(4, 580px) 800px 580px 800px;
    grid-template-areas: 
    "img1 img2"
    "img1 img3"
    "img4 img5"
    "img6 img7"
    "img8 img9"
    "img10 img10"
    "img11 img12"
    "img13 img12"
    "img13 img14"
    "img15 img16"
    "img17 img17"
    "img18 img19"
    "img20 img20";
    justify-content: center;
`;

GalleryContent.Img = styled.div`
    grid-area: ${(props) => props.imgID};
`;


export default GalleryDiv