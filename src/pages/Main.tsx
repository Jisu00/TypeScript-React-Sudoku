import styled from 'styled-components';
import Board from '../components/Board/Board';
import Keypad from '../components/Keypad/Keypad'

const Main = () => {
  return (
    <Layout>
      <Board />
      <Keypad />
    </Layout>
  )
};

const Layout = styled.div`    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Main;