import { useEffect } from "react";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const placeholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} >
        {/* Title clickable to IMDb */}
        <h2 className="movie-title">
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {movie.Title}
          </a>
        </h2>

        {/* Grid layout: Poster + Info + Ratings */}
        <div className="modal-grid">
          {/* Poster */}
          <div className="poster-container">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : placeholder}
              alt={movie.Title}
              onError={(e) => { e.target.src = placeholder; }}
            />
          </div>

          {/* Info */}
          <div className="info-container">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Type:</strong> {movie.Type}</p>
          </div>

          {/* Ratings */}
          <div className="ratings-container">
            <h3>Ratings</h3>
            {movie.Ratings?.length > 0 ? (
              movie.Ratings.map((r) => (
                <p key={r.Source}>
                  <strong>{r.Source}:</strong> {r.Value}
                </p>
              ))
            ) : (
              <p>No ratings available</p>
            )}
            <p><strong>IMDb Rating:</strong> {movie.imdbRating || "N/A"}</p>
          </div>
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;
