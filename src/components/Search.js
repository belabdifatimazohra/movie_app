import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios';
import { useLocation} from "react-router-dom";
function Search() {
    // Movie search state 
    const [movieFilter, setmovieFilter] = useState([]);
 
    const location = useLocation();
    const {search} = location.state;

    // Use Axios to get movie data with get
    const getMovieSearch = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=be346b1af66bf3c4dbe37288ebe7f025&query=${search}`
        );
        // Update the state of Search movie
        const movie = response.data.results.filter(result => result.title.toLowerCase() === search.toLowerCase());
        movie.length === 0 ? setmovieFilter(response.data.results) : setmovieFilter(movie);     
    };
    // Load Search movie with component
    useEffect(() => {
        getMovieSearch();
    }, []);

 
    return (

        <div>
            <div className="movieList">
                {movieFilter &&
                movieFilter.map(movie =>
                    <MovieCard
                            movie_id = {movie.id}
                            title={movie.title}
                            year={movie.release_date.substring(4, 0)}
                            srcImg={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            key={movie.id}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Search
