import styled from "styled-components";

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: .4s;
    background-color: #C4C4C4;
    &:hover{
        cursor: pointer;
        transform: scale(0.97);
    }
`;

export default ImageContainer;