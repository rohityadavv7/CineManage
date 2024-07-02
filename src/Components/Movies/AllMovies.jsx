import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { setAllMovies } from '../../Slices/movieSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function AllMovies() {
    const API_KEY = "1b04a2ae54b5373c0246dcc7c513513f"
      const {allMovies} = useSelector((state) => state.movie)
      const dispatch = useDispatch();

    async function getMovies(){
    

        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

        try{
            const response = await axios.get(url)
            console.log("movies",response.data.results);
            var fetchedMovies = response.data.results;
            var newList = [];
            for(let i = 0; i < fetchedMovies.length-10; i++){
                newList.push(fetchedMovies[i])
            }
            dispatch(setAllMovies(newList));

            console.log("movies setted ->",allMovies)
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        
        getMovies()

    },[])


  return (
    <div>
        <h1>All Movies</h1>
        <div>
            {allMovies.map((movie) => {
                return(
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Rating: {movie.vote_average}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AllMovies