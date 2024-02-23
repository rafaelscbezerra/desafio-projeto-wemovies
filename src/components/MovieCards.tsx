import React, { useState, useEffect } from "react";
import { StyledMovieCardsGrid } from "../styles/components/MovieCards";
import Button from "./Button";

interface Movie {
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
interface MovieCardsProps {
  cartItems: AppCartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<AppCartItem[]>>;
}

const MovieCards: React.FC<MovieCardsProps> = ({ setCartItems }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data: Movie[] = await response.json();
        const moviesWithQuantity = data.map((movie) => ({
          ...movie,
          quantity: 0,
        }));
        setMovies(moviesWithQuantity);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleAddToCart = (id: string) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, quantity: movie.quantity + 1 } : movie
    );
    setMovies(updatedMovies);
    setCartItems(updatedMovies);
  };

  return (
    <>
      <StyledMovieCardsGrid>
        {movies.map((movie) => (
          <li className="movie--list--item" key={movie.id}>
            <img
              className="movie--list--item__image"
              src={movie.image}
              alt={movie.title}
            />
            <div className="movie--list--item__texts">
              <p className="movie--list--item__texts__title">{movie.title}</p>
              <span className="movie--list--item__texts__value">
                Preço: R$ {movie.price.toFixed(2)}
              </span>
            </div>

            <Button
              onClick={() => handleAddToCart(movie.id)}
              cartQuantity={movie.quantity}
            />
          </li>
        ))}
      </StyledMovieCardsGrid>
    </>
  );
};

export default MovieCards;
