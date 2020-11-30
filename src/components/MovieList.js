import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function MovieList() {
  // Movie Data state
  const [movieData, setmovieData] = useState();
  // Movie Data state
  const [page, setPage] = useState(1);

  // Get the data movie with axios
  const getMovieData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=be346b1af66bf3c4dbe37288ebe7f025&language=en-US&page=${page}`
    );
    // Update the state of data movie
    setmovieData(response.data);
  };
  // Load Searched movie with component
  useEffect(() => {
    getMovieData();
  }, [page]);

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
              movie_id={result.id}
            />
          ))}
      </div>
      <div className="pagination">
        {/* First page */}
        <button className="prevNext" onClick={() =>  setPage(1)}>
          &laquo;
        </button>
        <button style={{backgroundColor:"#3bc9db"}}onClick={()=> page>1 ? setPage(page-1): page}>
          &#8249;
        </button>
        <button onClick={() =>  setPage(1)}>
          1
        </button>
        <button onClick={()=>setPage(2)}>
          2
        </button>
        <button >
          ...
        </button>
         <button onClick={()=>setPage(12)} >
          12
        </button>
        <button style={{backgroundColor:"#3bc9db"}} onClick={()=> page<500 ? setPage(page+1): page}>
          &#8250;
        </button>
            {/* Last page */}
         <button className="prevNext" onClick={() =>  setPage(500)}>
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default MovieList;
