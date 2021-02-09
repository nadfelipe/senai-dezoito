import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Titles = styled.div`
  font-family: Faustina, serif;
  height: 60%;
`;

Container.Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 700px;
  margin-top: 10%;
  position: fixed;
  left: 17%;
`;

export default Container;