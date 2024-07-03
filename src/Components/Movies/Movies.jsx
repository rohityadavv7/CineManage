import React,{useEffect} from 'react'
import Heading from '../Designs/Heading'
import { setNowPlaying, setAllMovies, setUpcomingMovies } from '../../Slices/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Skeleton from '../Designs/Skeleton'
import { setLoading } from '../../Slices/authSlice'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import CategoryCard from '../Designs/CategoryCard'
import { useNavigate } from 'react-router-dom'


function Movies() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  
  };
  const navigate = useNavigate()
  const API_KEY = "1b04a2ae54b5373c0246dcc7c513513f"
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

  const dispatch = useDispatch();
  const {loading } = useSelector((state) => state.auth)
  const {NowPlaying} = useSelector((state) => state.movie)
  const{allMovies} = useSelector((state) => state.movie)
  const {UpcomingMovies} = useSelector((state) => state.movie)

  async function getPopularMovies(){
      try{
        dispatch(setLoading(true))
        const response = await axios.get(url);
        console.log("RESPONSE...", response.data.results)
        const fetchedMovies = response.data.results;        
        dispatch(setNowPlaying(fetchedMovies));
        dispatch(setLoading(false))
      }catch(error){
        console.log("ERROR IN GETTING ALL MOVIES...", error)
      }
  }

   async function getActionMovies(){
    

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

  async function getUpcomingMovies(){
    

        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

        try{
            const response = await axios.get(url)
            console.log("movies",response.data.results);
            var fetchedMovies = response.data.results;
            
            dispatch(setUpcomingMovies(fetchedMovies));

            console.log("upcoming movies setted ->",UpcomingMovies)
        }catch(error){
            console.log(error);
        }
    }
  useEffect(() =>{
    getPopularMovies()
    getActionMovies()
    getUpcomingMovies()
  },[])
  return (
    <div>
        <div className='flex justify-between'>
          <h1 className=' text-3xl text-black font-normal p-2'><Heading title={"Movies"}/></h1>
          <div className='font-normal text-xl'>Want to add a movie yourself? <span><button  onClick={() => navigate("/addMovie")} className='bg-NewBlue px-4 py-2 rounded-md font-normal font-semibold items-center'>Add here!</button></span></div>
        </div>
        <div className='divider w-[20%]'></div>

        {/* POPULAR MOVIES */}
        <div className='pt-6'>
          <h2 className='text-3xl font-normal'>Popular</h2>
          <div className='divider w-[20%]'></div>
          <div>
            {
              loading? 
              (<div className='bg-white'><Skeleton/></div>)
              :
              (<div className='grid grid-cols-1 grid-rows-1 mx-auto w-11/12'>
                  <Slider {...settings}>
                      {
                        NowPlaying.map((movie,index) => {
                          return(
                            <div className='w-full '>
                      
                              <CategoryCard title={movie.title} description={movie.overview} category={"Add to Watchlist"}
                                    rating={movie.vote_average} imageUrl={movie.poster_path} releaseYear={movie.release_date}/>

                            </div>
                          )
                        })

                      }
                  </Slider>
              </div>)
            }
          </div>

        </div>

        {/* ACTION MOVIES */}

        <div className='pt-6'>
          <div className='divider'></div>
          <h2 className='text-3xl font-normal'>Action</h2>
          <div className='divider w-[20%]'></div>
          <div>
            {
              loading? 
              (<div className='bg-white'><Skeleton/></div>)
              :
              (<div className='grid grid-cols-1 grid-rows-1 mx-auto w-11/12'>
                  <Slider {...settings}>
                      {
                        allMovies.map((movie,index) => {
                          return(
                            <div className='w-full '>
                      
                              <CategoryCard title={movie.title} description={movie.overview} category={"Add to Watchlist"}
                                    rating={movie.vote_average} imageUrl={movie.poster_path} releaseYear={movie.release_date}/>

                            </div>
                          )
                        })

                      }
                  </Slider>
              </div>)
            }
          </div>

        </div>


        {/* UPCOMING MOVIES */}
        {/* <div className='pt-6'>
          <div className='divider'></div>
          <h2 className='text-3xl font-normal'>Upcoming</h2>
          <div className='divider w-[20%]'></div>
          <div>
            {
              loading? 
              (<div className='bg-white'><Skeleton/></div>)
              :
              (<div className='grid grid-cols-1 grid-rows-1 mx-auto w-11/12'>
                  <Slider {...settings}>
                      {
                        UpcomingMovies.map((movie,index) => {
                          return(
                            <div className='w-full '>
                      
                              <CategoryCard title={movie.title} image={movie.poster_path}/>

                            </div>
                          )
                        })

                      }
                  </Slider>
              </div>)
            }
          </div>

        </div> */}

        
        
    </div>
  )
}

export default Movies