import styled from 'styled-components';

const Section2 = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;

Section2.Content = styled.section`
    width: 90%;
    min-height: 100vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-image: url(${(props)=>props.imgBgUrl});
    background-repeat: no-repeat;
    background-position: right center;
`;


export default Section2