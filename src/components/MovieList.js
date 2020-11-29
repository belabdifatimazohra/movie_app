import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function MovieList() {
  // Movie Data state 
  const [movieData, setmovieData] = useState();
  

  // Get the data movie with axios
  const getMovieData = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=be346b1af66bf3c4dbe37288ebe7f025&language=en-US&page=1"
    );
    // Update the state of data movie
    setmovieData(response.data);
  };
  // Load Searched movie with component
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <div className="movieList">
        {movieData &&
          movieData.results.map((result) => (
            <MovieCard
              title={result.title}
              year={result.release_date.substring(4, 0)}
              srcImg={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
              key={result.id}
            />
          ))}
      </div>
      {console.log(movieData)}
    </div>
  );
}

export default MovieList;
