function MovieCard({ movie, onClick  }) {
  const placeholder = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png";

  return (
    <div className="movie-card" onClick={() => onClick(movie)}> 
      <img
        src={movie.Poster}
        alt={movie.Title}
        onError={(e) => { e.target.src = placeholder; }} // replace if image fails
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
