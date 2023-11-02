import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import data, { categories } from '../data';

import Typehead from "./Typehead";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
      <Typehead 
        suggestions={data.books}
        handleSelect={(suggestion)=>{
          window.alert(suggestion);}}
          categories={categories}/>
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  height: 100vh;
`

