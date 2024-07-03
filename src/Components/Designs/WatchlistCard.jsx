import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieDetails } from '../../Slices/movieSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { moviesAPIS } from '../../services/apis';
import { useState } from 'react';
import toast from 'react-hot-toast';

function WatchlistCard({imageUrl, title, description, rating, watched, releasedYear,id}) {
    console.log(title+"->"+watched);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const{token} = useSelector((state) => state.auth)
    const[watchedmovie,setWatchedMovie] = useState(false)
    const {UPDATE_WATCHED_API,DELETE_WATCHED_API} = moviesAPIS;
    const {user} = useSelector((state)=>state.auth)

    function editMovieDetails(){
        console.log("in")
        console.log(title,description,imageUrl,rating,watched,releasedYear)
        const movie = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            rating: rating,
            watched: watched,
            releasedYear: releasedYear
        }

        localStorage.setItem("movieDetails", JSON.stringify(movie));

        dispatch(setMovieDetails(movie));
        // toast.success("movie edited successfully");
        navigate("/moviedetails")
    }

    async function setWatched(){
        const email = user.email
        console.log("email-> ",email);
        try{
            const response =  await axios.post(UPDATE_WATCHED_API,{title,email})
            console.log("REPONSE FROM UPDATE WATCHED...", response.data);
            toast.success("set watched")
            setWatchedMovie(true)
    
        }catch(error){
            console.log("ERROR IN SETTING WATCHED...",error);
            toast.error("error setting watched")
        }
    }

    async function deleteMovie(){
        
        try{
            console.log("user in delete-> ", user)
            console.log("title in delete-> ", id )
            const email = user.email
            console.log(email)
           const response = await axios.delete(`http://localhost:4000/movies/deletefromwatchlist/${email}/${id}`)
            console.log("RESPONSE FROM DELETE...", response.data);
            toast.success("deleted successfully!")
        }catch(error){
            console.log("ERROR IN DELETING MOVIE...",error);
            toast.error("error deleting movie")
        }
    }

    useEffect(()=> {

    },[setWatched])

  return (
    <div>
        <div
                className="relative drop-shadow-xl 
                w-[250px] h-[350px] overflow-hidden rounded-xl bg-[#3d3c3d]"
                >
                <div className="absolute object-cover top-0 left-0 h-full w-full bg-[#fff8dc] hover:gradient-to-t from-black to-white transition-all duration-300">
                        <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} className='object-cover text-2xl font-normal text-NewBlue '/> 
                </div>
                <div
                    class="absolute flex items-center opacity-0  hover:opacity-60 transition-all duration-500 justify-center text-white z-[1] rounded-xl inset-0.5 bg-[#323132]"
                >
                </div>
                
                <button>
                    <div className='flex z-[100] rounded-lg text-white absolute bottom-0 space-x-4 mx-auto w-full p-2 font-normal font-semibold bg-NewBlue'>
                        <div className='p-1 hover:bg-blue-400  rounded-lg'>
                            <button onClick={() => {
                                setWatched(),
                                setWatchedMovie((prev)=> !prev)
                            }}>
                                {watchedmovie === true?"Watched":"Not watched"}
                            </button>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className='p-1 hover:bg-blue-400 rounded-lg'>
                            <button onClick={editMovieDetails}>
                                Edit
                            </button>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className='p-1 hover:bg-blue-400 rounded-lg '>
                            <button onClick={deleteMovie}>
                                Delete    
                            </button>
                        </div>
                    </div>
                </button>


            </div>
    </div>
  )
}

export default WatchlistCard