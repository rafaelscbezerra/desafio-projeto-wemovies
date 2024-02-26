import React, { useState, useEffect } from "react";

//Components
import AddCartButton from "./AddCartButton";

//Types
import { Movie } from "../types";
import { CartProps } from "../types";

//Styles
import {
  StyledMovieCards,
  StyledMovieListItem,
  StyledMovieListItemTitle,
  StyledMovieListItemValue,
} from "../styles/components/MovieCards";

const MovieCards: React.FC<CartProps> = ({ setCartItems }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data: Movie[] = await response.json();
        const moviesQuantity = data.map((movie) => ({
          ...movie,
          quantity: 0,
        }));
        setMovies(moviesQuantity);
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
    <StyledMovieCards>
      {movies.map((movie) => (
        <StyledMovieListItem key={movie.id}>
          <img
            className="movie--list--item__image"
            src={movie.image}
            alt={movie.title}
          />
          <div className="movie--list--item__texts">
            <StyledMovieListItemTitle>{movie.title}</StyledMovieListItemTitle>
            <StyledMovieListItemValue>
              Preço: R$ {movie.price.toFixed(2)}
            </StyledMovieListItemValue>
          </div>
          <AddCartButton
            onClick={() => handleAddToCart(movie.id)}
            cartQuantity={movie.quantity}
          />
        </StyledMovieListItem>
      ))}
    </StyledMovieCards>
  );
};

export default MovieCards;
