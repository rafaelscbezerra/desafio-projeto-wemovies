// import React from "react";
import Header from "./components/Header";
import MovieCards from "./components/MovieCards";

import * as S from "./styles/pages/home";

function App() {
  return (
    <>
      <S.StyledContainer>
        <S.StyledHeader>
          <Header></Header>
        </S.StyledHeader>
      </S.StyledContainer>

      <S.StyledContainer>
        <S.StyledMovieCardsGrid>
          <MovieCards></MovieCards>
        </S.StyledMovieCardsGrid>
      </S.StyledContainer>
    </>
  );
}

export default App;
