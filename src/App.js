import { useEffect, useState } from "react";

import "./App.css";

import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=3ba9c23d";



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };
  useEffect(() => {
    searchmovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={searchIcon} alt="Search" onClick={() => searchmovies()} />
      </div>
      {
        movies.length > 0 
        ? (
            <div className="container">
                {
                    movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
        ):(
            <div className="empty">
                <h2>No Movie Found</h2>
            </div>
        )
      }
    </div>
  );
};

export default App;
