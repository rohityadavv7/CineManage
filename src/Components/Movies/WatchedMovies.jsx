import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { moviesAPIS } from '../../services/apis';
import { setWatchedMovies } from '../../Slices/movieSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddButton from '../Designs/AddButton';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import WatchlistCard from '../Designs/WatchlistCard';
function WatchedMovies() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    
    };

    const {token} = useSelector((state) => state.auth)
    const {GET_WATCHEDMOVIES_API} = moviesAPIS
    const {watchedMovies} = useSelector((state)=> state.movie)
    const dispatch = useDispatch();

    async function getWatchedMovies(){
        try{
            console.log("token in watchlist-> ",token)
            const response = await axios.get(GET_WATCHEDMOVIES_API, {
                                headers: {
                                    'Authorization': `Bearer ${token}` // Send the token in the Authorization header
                            }})
            console.log("WATCHLIST RESPONSE...", response.data.moviesWatched);
            const movies = response.data.moviesWatched;
            console.log("length-> ", movies.length)
            // if(movies.length === 0){
            //     dispatch(setWatchedMovies([]))
            // }
            // else{
            //     dispatch(setWatchedMovies(movies))
            // }

            dispatch(setWatchedMovies(response.data.moviesWatched));

            console.log("watched movies-> ", watchedMovies)
            
        }catch(error){
            console.log("ERROR IN GETTING WATCHLIST...", error)
        }
    }

    useEffect(() => {

        getWatchedMovies()

    },[])
  return (
    <div className='w-11/12 flex mx-auto flex-col space-y-4'>
        <h1 className='font-normal text-3xl p-2'>Your Watched Movies</h1>
        <div className='divider'></div>
        

        <div>
            {
               watchedMovies.length > 0 ?
               (<div className='grid grid-cols-1 grid-rows-1 mx-auto w-11/12'>
                  <Slider {...settings}>
                      {
                        watchedMovies.map((movie,index) => {
                          return(
                            <div className='w-full ' key={index}>
                      
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
                <h1 className='text-2xl text-[#B60000]'>No Movies completed/watched yet!</h1>
                <div className='text-2xl'>
                    Click here to watch now!
                    
                </div>
                <div>
                    <Link to="/watchlist">
                        <AddButton/>
                    </Link>
                </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default WatchedMovies