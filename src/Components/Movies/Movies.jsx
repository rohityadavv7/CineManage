import React,{useEffect} from 'react'
import Heading from '../Designs/Heading'
import { setNowPlaying } from '../../Slices/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Skeleton from '../Designs/Skeleton'
import { setLoading } from '../../Slices/authSlice'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import CategoryCard from '../Designs/CategoryCard'


function Movies() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  
  };
  const API_KEY = "1b04a2ae54b5373c0246dcc7c513513f"
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

  const dispatch = useDispatch();
  const {loading } = useSelector((state) => state.auth)
  const {NowPlaying} = useSelector((state) => state.movie)

  async function getAllMovies(){
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
  useEffect(() =>{
    getAllMovies()
  },[])
  return (
    <div>
        <h1 className=' text-3xl text-black font-normal p-2'><Heading title={"Movies"}/></h1>
        <div className='divider w-[20%]'></div>

        {/* POPULAR MOVIES */}
        <div>
          <h2 className='text-2xl font-normal'>Popular</h2>
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
                      
                              <CategoryCard title={movie.title} image={movie.poster_path}/>

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

        
        
    </div>
  )
}

export default Movies