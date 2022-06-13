import Board from '../components/Board/Board';
import styled from 'styled-components';

const Main = () => {
  return (
    <Layout>
      <Board />
    </Layout>
  )
};

const Layout = styled.div`    
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Main;