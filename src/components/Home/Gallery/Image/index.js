import styled from "styled-components";

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 1em 0;
    height: 100%;
    transition: .4s;
    background-color: #C4C4C4;
    &:hover{
        cursor: pointer;
        transform: scale(0.97);
    }
    @media(max-width: 800px){
        height: ${props => props.type === "vertical" ? "488px" : "215px"};
        margin: 5px 0;
    }
`;

export default ImageContainer;