import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { setMoviesByGenre } from '../../Slices/movieSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function MoviesbyGenre() {
    // const [Genre, setGenre] = useState('Action');
    // const dispatch = useDispatch();

    // const {MoviesbyGenre} = useSelector((state) => state.movie)

    // async function getMoviesByGenre(Genre){
    //     const options = {
    //     method: 'GET',
    //     url: 'https://moviedatabase8.p.rapidapi.com/Filter',
    //     params: {
    //         MinRating: '6.1',
    //         MaxRating: '6.9',
    //         MinYear: '2020',
    //         MaxYear: '2023',
    //         MinRevenue: '1000000',
    //         MaxRevenue: '100000000',
    //         Genre: `${Genre}`,
    //         MinRuntime: '110',
    //         MaxRuntime: '180',
    //         OriginalLanguage: 'en',
    //         SpokenLanguage: 'English',
    //         Limit: '30'
    //     },
    //     headers: {
    //         'x-rapidapi-key': 'a211301ae5msh5bd025961a8e47dp119d16jsn301392564ce5',
    //         'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
    //     }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         console.log("Genre-> ",response.data);
    //         dispatch(setMoviesByGenre(response.data));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getMoviesByGenre(Genre)
    // },[Genre,setGenre])
  return (
    <div>
        MoviesbyGenre
        <button onClick={() => {
            setGenre("Action")
            console.log("Genre setted-> ",Genre)
            getMoviesByGenre(Genre)
        }}>
            Action
        </button>

        <button onClick={() => {
            setGenre("Drama")
            console.log("Genre setted-> ",Genre)
            getMoviesByGenre(Genre)
        }}>
            Drama
        </button>

        <button onClick={() => {
            setGenre("Comedy")
            console.log("Genre setted-> ",Genre)
        }}>
            Comedy
        </button>
        
    </div>
  )
}

export default MoviesbyGenre