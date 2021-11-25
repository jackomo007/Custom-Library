import {Login, Button, GlobalStyles} from 'ponga-demo';
import styled from 'styled-components';
import './App.css';

const CustomDiv = styled.div`
  & button{
    border-radius: 20px;
  }
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
      <CustomDiv>
      <Button type="danger">My Button</Button>
      </CustomDiv>
    </>
  );
}

export default App;
