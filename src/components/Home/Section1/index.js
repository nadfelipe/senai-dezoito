import styled from 'styled-components';

const Section1 = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-position: 0px -1px;
    background-size: 100% ;
`;

Section1.Content = styled.section`
    width: 80%;
    min-height: 100vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

export default Section1