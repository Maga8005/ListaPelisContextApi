import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Movie from "./Movie";

function MovieList() {
  // Para usar el contexto
  const {movies} = useContext(MoviesContext) 

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Movie movie={movie}  />
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default MovieList;
