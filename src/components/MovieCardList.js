import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import "./MovieCardList.css";
import { Link } from "react-router-dom";

function MovieCardList(props) {
  return (
      <div className="MovieCardList">
        {props.movies.map((movie) => (
          <Link to={`trailer/${movie.id}`}>
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
          />
          </Link> 
        ))}
    </div>
  );
}

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  )
}

export default MovieCardList