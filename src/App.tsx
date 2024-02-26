import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

//Pages
import Cart from "./pages/Cart";
import SuccessBuy from "./pages/SuccessBuy";

//Components
import Header from "./components/Header";
import MovieCards from "./components/MovieCards";
import BackButton from "./components/BackButton";
import Loader from "./components/Loader";

//Types
import { Movie } from "./types";
import { CartItem } from "./types";

//Styles
import { StyledContainer } from "./styles/container";
import {
  StyledBuyConditions,
  StyledBuyConditionsContent,
  StyledBuyConditionsContentTitle,
} from "./styles/pages/BuyConditions";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data: Movie[] = await response.json();
        const moviesQuantity = data.map((movie) => ({
          ...movie,
          quantity: 0,
        }));
        setCartItems(moviesQuantity);
        setLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os filmes:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <StyledContainer>
        <Header cartItems={cartItems} />
      </StyledContainer>

      <StyledContainer>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Loader />
              ) : (
                <MovieCards cartItems={cartItems} setCartItems={setCartItems} />
              )
            }
          />
          <Route
            path="/meu-carrinho"
            element={
              cartItems.length > 0 ? (
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              ) : (
                <Navigate to="/carrinho-vazio" replace={true} />
              )
            }
          />
          <Route path="/compra-realizada" element={<SuccessBuy />} />
          <Route path="/carrinho-vazio" element={<EmptyCart />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

const EmptyCart = () => {
  return (
    <StyledBuyConditions>
      <StyledBuyConditionsContent>
        <StyledBuyConditionsContentTitle>
          Parece que não há nada por aqui :(
        </StyledBuyConditionsContentTitle>
        <img
          className="empty--cart--image"
          src="/src/assets/empty-cart-image.svg"
          alt="imagem de carrinho vazio!"
        />
        <Link to="/" className="back--button">
          <BackButton />
        </Link>
      </StyledBuyConditionsContent>
    </StyledBuyConditions>
  );
};

export default App;
