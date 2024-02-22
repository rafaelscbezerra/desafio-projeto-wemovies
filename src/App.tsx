// import React from "react";
import Header from "./components/Header";
import MovieCards from "./components/MovieCards";

//Styles
import * as S from "./styles/pages/home";

function App() {
  return (
    <>
      <S.StyledContainer>
        <Header></Header>
      </S.StyledContainer>

      <S.StyledContainer>
        <MovieCards></MovieCards>
      </S.StyledContainer>
    </>
  );
}

export default App;
