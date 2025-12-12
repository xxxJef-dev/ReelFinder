import MovieCard from "./MovieCard";

function MovieList({ movies, isLoading, onMovieClick }) {
  return (
    <div className="movie-list">
      {isLoading && <div className="spinner"></div>}
      {!isLoading && movies.length === 0 && <p>No movies found.</p>}
      {!isLoading && movies.length > 0 && (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick}/>
        ))
      )}
    </div>
  );
}

export default MovieList;
