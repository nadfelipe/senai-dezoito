import styled from 'styled-components';


const Banner = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEF8EA;
`;
Banner.Div = styled.section`
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url(${(props)=>props.imgUrl1}), url(${(props)=>props.imgUrl2});
    background-position: 10% 95%, 85% 10%;
    background-repeat: no-repeat;
    background-size: 60%, 35%;
`;

Banner.Textos = styled.div`
    max-width: 60%;
    align-self: flex-start;
`;

Banner.H1 = styled.h1`
    font-family: Faustina, serif;
    font-weight: 500;
    font-size: 10rem;
    color: #5D3C74;
`;

Banner.H2 = styled.h2`
    font-family: Jost, sans-serif;
    font-weight: 500;
    font-size: 4rem;
    color: #E39600;
    font-style: italic;
    z-index: 100;
    &::before{
        content: '';
        width: 280px;
        height: 30px;
        background: rgba(255, 168, 0, 0.28);
        position: absolute;
        z-index: 3;
        margin-top: 2%;
        margin-left: 0.3%;
        opacity: 0.5;
    }
`;

export default Banner
