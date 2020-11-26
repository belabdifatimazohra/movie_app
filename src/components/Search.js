import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios'

function Search({ search }) {
    // Movie search state 
    const [movieSearch, setmovieSearch] = useState();
    const [movieFilter, setmovieFilter] = useState([]);

    // console.log(`https://api.themoviedb.org/3/search/movie?api_key=be346b1af66bf3c4dbe37288ebe7f025&query=${search}&language=en-US&page=1&include_adult=false`);
    const getMovieSearch = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=be346b1af66bf3c4dbe37288ebe7f025&query=${search}`
        );
        // Update the state of Search movie
        setmovieSearch(response.data);
        console.log(movieSearch);
    };
    // Load Search movie with component
    useEffect(() => {
        getMovieSearch();
    }, []);

    const filterSearch = () => {
        const movie = movieSearch.results.filter(result => result.title.toLowerCase() === search.toLowerCase());
         movie.length === 0 ? setmovieFilter(movieSearch) : setmovieFilter(movie);
    }

    return (

        <div>
            <div className="movieList">
                {movieSearch &&
                movieFilter.map(movie =>
                        <MovieCard
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
