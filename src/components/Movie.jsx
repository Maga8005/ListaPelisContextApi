import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Movie({ movie }) {
  const {user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavorite = user?.favoriteMovie?.includes(movie.id)

  return (
    <div className="card">
      <img src={movie.imageUrl} alt={movie.title} style={imgStyles} />
      <div className="card-body">
        <h4>{movie.title}</h4>
        { user?.id &&
        <button className={`btn ${
            isFavorite ? "btn-success" : "btn btn-outline-primary"
          }`}
          onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
          Favorito
        </button>
        }
      </div>
    </div>
  );
}

export default Movie;
