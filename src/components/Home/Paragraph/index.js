import styled from 'styled-components';

const Paragraph = styled.div`
    width: 40%;
    height: 20rem;
    text-align: ${(props) => props.toLeft ? 'left' : 'right'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${(props) => props.toLeft ? 'flex-start' : 'flex-end'};
`;

Paragraph.H3 = styled.h3`
    font-family: Faustina, serif;
    font-weight: 600;
    color: #5D3C74;
    font-size: 4rem;
    text-transform: uppercase;
    width: 90%;
`;

Paragraph.P = styled.p`
    font-family: Jost, sans-serif;
    font-weight: 500;
    color: #5D3C74;
    font-size: 1.6rem;
    width: 80%;
`;

export default Paragraph
