import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { moviesAPIS } from '../../services/apis'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setWatchlist } from '../../Slices/movieSlice';
import AddButton from '../Designs/AddButton';
import { Link } from 'react-router-dom';

function WatchList() {

    const {GET_WATCHLIST_API} = moviesAPIS;
    const {user} = useSelector((state) => state.auth)
    const {token} = useSelector((state) => state.auth);
    const {watchlist} = useSelector((state) => state.movie)

    const dispatch = useDispatch();

    async function getWatchlist(){
        try{
            console.log("token in watchlist-> ",token)
            const response = await axios.get(GET_WATCHLIST_API, {
                                headers: {
                                    'Authorization': `Bearer ${token}` // Send the token in the Authorization header
                            }})
            console.log("WATCHLIST RESPONSE...", response.data.userWatchlist);
            const movies = response.data.userWatchlist;
            console.log("length-> ", movies.length)
            if(movies.length === 0){
                dispatch(setWatchlist([]))
            }
            else{
                dispatch(setWatchlist(movies))
            }

            console.log("watchlist-> ", watchlist)
            
        }catch(error){
            console.log("ERROR IN GETTING WATCHLIST...", error)
        }
    }

    useEffect(() => {

        getWatchlist()

    },[])
  return (
    <div className='w-11/12 flex mx-auto flex-col space-y-4'>
        <h1 className='font-normal text-3xl p-2'>Your Watchlist</h1>
        <div className='divider'></div>
        {WatchList.length !== 0? (
            WatchList.map(movie => (
                <div key={movie._id} className='flex justify-between items-center p-2'></div>)))
            :
            (<div className='font-normal flex justify-center pt-8 mx-auto items-center flex-col space-y-4 h-full w-[50%] bg-richblack-600 rounded-md 
            bg-clip-padding backdrop-filter backdrop-blur-sm p-6 bg-opacity-50 border border-richblack-100'>
                <h1 className='text-2xl text-[#B60000]'>No Movies in your watchlist yet!</h1>
                <div className='text-2xl'>
                    Click here to add movies right now
                    
                </div>
                <div>
                    <Link to="/allmovies">
                        <AddButton/>
                    </Link>
                </div>
            </div>)
        }
    </div>
  )
}

export default WatchList