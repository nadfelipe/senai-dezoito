import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Content = styled(Container)`
  background-color: ${(props) => props.bgColor}
`;


Container.Titles = styled.div`
  font-family: Faustina, serif;
  height: 35%;
  @media(max-width: 1600px) {
    height: 25%;
  }
`;

Container.Fixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5%;
  padding: 5%;
  @media(max-width: 1600px) {
    margin-bottom: 10%;
    padding: 0 5% 0 0;
  }
`;


export default Container;