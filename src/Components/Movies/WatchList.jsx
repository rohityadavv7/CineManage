import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { moviesAPIS } from '../../services/apis'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setWatchlist } from '../../Slices/movieSlice';
import AddButton from '../Designs/AddButton';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CategoryCard from '../Designs/CategoryCard';
import Dock from '../Designs/Dock';
import WatchlistCard from '../Designs/WatchlistCard';

function WatchList() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    
    };

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
            // if(movies.length === 0){
            //     dispatch(setWatchlist([]))
            // }
            // else{
            //     dispatch(setWatchlist(movies))
            // }

            dispatch(setWatchlist(response.data.userWatchlist));

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
        

        <div>
            {
               watchlist.length > 0 ?
               (<div className='grid grid-cols-1 grid-rows-1 mx-auto w-11/12'>
                  <Slider {...settings}>
                      {
                        watchlist.map((movie,index) => {
                          return(
                            <div className='w-full '>
                      
                                <WatchlistCard title={movie.title} id={movie._id} imageUrl={movie.imageUrl} watched={movie.watched}
                                description={movie.description} rating={movie.rating} releasedYear={movie.releaseYear}/>  

                            </div>
                          )
                        })

                      }
                  </Slider>
              </div>)
               :
               (<div className='font-normal flex justify-center pt-8 mx-auto items-center flex-col space-y-4 h-full w-[50%] bg-richblack-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm p-6 bg-opacity-50 border border-richblack-100'>
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
    </div>
  )
}

export default WatchList