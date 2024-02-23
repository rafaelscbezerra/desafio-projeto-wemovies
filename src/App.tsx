import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import MovieCards from "./components/MovieCards";
import CartPage from "./CartPage";
import SuccessBuyPage from "./SuccessBuyPage";

import * as S from "./styles/pages/home";
export interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
interface AppCartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<AppCartItem[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data: Movie[] = await response.json();
        const moviesWithQuantity = data.map((movie) => ({
          ...movie,
          quantity: 0,
        }));
        setCartItems(moviesWithQuantity);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <S.StyledContainer>
        <Header cartItems={cartItems} />
      </S.StyledContainer>

      <S.StyledContainer>
        <Routes>
          <Route
            path="/"
            element={
              <MovieCards cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/meu-carrinho"
            element={
              cartItems.length > 0 ? (
                <CartPage cartItems={cartItems} setCartItems={setCartItems} />
              ) : (
                <Navigate to="/carrinho-vazio" replace />
              )
            }
          />
          <Route path="/compra-realizada" element={<SuccessBuyPage />} />
        </Routes>
      </S.StyledContainer>
    </Router>
  );
}

export default App;
