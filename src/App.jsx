import { useState } from 'react'
import './app.css'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import { searchMovies } from './services/movieAPI'
import MovieModal from "./components/MovieModal";
import { getMovieDetails } from "./services/movieAPI";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);           
    const results = await searchMovies(searchQuery);
    setMovies(results);
    setIsLoading(false);           
  };

  const handleMovieClick = async (movie) => {
    const details = await getMovieDetails(movie.imdbID);
    setSelectedMovie(details);
    setIsLoading(false);
  };

  return (
    <div>
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <MovieList 
        movies={movies} 
        isLoading={isLoading} 
        onMovieClick={handleMovieClick}
      />
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  )
}

export default App
