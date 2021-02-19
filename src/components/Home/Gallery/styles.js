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
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 580px) 800px repeat(4, 580px) 800px repeat(2, 580px) 800px;
    grid-template-areas: 
    "img01 img02"
    "img01 img03"
    "img04 img05"
    "img06 img07"
    "img08 img09"
    "img10 img10"
    "img11 img12"
    "img13 img12"
    "img13 img14"
    "img15 img16"
    "img17 img17"
    "img18 img19"
    "img20 img21"
    "img22 img22";
    justify-content: center;
`;

GalleryContent.Img = styled.div`
    grid-area: ${(props) => props.imgID};
    background-color: blue;
`;


export default GalleryDiv