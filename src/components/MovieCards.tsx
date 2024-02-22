import React, { useState, useEffect } from "react";
import Button from "./Button";
import { StyledButtonPrimary } from "../styles/pages/home";

interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
}

const MovieCards: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data: Movie[] = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
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
          <StyledButtonPrimary>
            <Button></Button>
          </StyledButtonPrimary>
        </li>
      ))}
    </>
  );
};

export default MovieCards;
