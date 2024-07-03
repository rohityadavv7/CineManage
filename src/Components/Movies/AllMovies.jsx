import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { setAllMovies } from '../../Slices/movieSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MovieCard from '../Designs/MovieCard';
import Marquee from "react-fast-marquee"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function AllMovies() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    const API_KEY = "1b04a2ae54b5373c0246dcc7c513513f"
      const {allMovies} = useSelector((state) => state.movie)
      const dispatch = useDispatch();

    async function getMovies(){
    

        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

        try{
            const response = await axios.get(url)
            console.log("movies",response.data.results);
            var fetchedMovies = response.data.results;
            
            dispatch(setAllMovies(fetchedMovies));

            console.log("movies setted ->",allMovies)
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        
        getMovies()

    },[])


  return (
    <div className='mt-10 p-4 '>
        <div className='divider'></div>
        <h1 className='text-4xl font-normal font-semibold p-4'>Trending Movies</h1>
        <div className='divider'></div>
        <div className=' bg-gradient-to-r from-NewBlue to-black p-4 rounded-md'>
            <div className='flex w-11/12 mx-auto gap-12 mt-8'>
                {allMovies.map((movie) => {
                    return(
                        <div className='flex w-11/12 '>
                            
                                <div>
                                    <MovieCard title={movie.title} description={movie.overview} 
                                    rating={movie.vote_average} image={movie.poster_path} releaseYear={movie.release_date}/>
                                </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default AllMovies