import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Heading from '../Designs/Heading';
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

function MovieDetailsPage() {
    // const {movieDetails} = useSelector((state) => state.movie);
    const getInitialState = () => {
        const saved = localStorage.getItem('movieDetails');
        const navigate = useNavigate();
        return saved ? JSON.parse(saved) : {}; // or your default value
    };
    const [movieDetail, setMovieDetails] = useState(getInitialState)
  return (
    <div className='flex gap-4 w-11/12 mx-auto relative'>
        {/* LEFT-SECTION */}
        <div className='absolute z-[100] bg-NewBlue rounded-full -top-2 -left-2 text-4xl p-2 text-black'>
            <button>
               <Link to="/editdetails">
                    <CiEdit />
               </Link>
            </button>
        </div>
        <div className='w-[40%] relative'>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.imageUrl}`} className='ob object-cover rounded-lg'/>
            
        </div>

        {/* RIGHT-SECTION */}
        <div className='w-[60%] p-6'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-normal font-semibold'>{movieDetail.title}</h1>
                    <div className='text-2xl font-normal italic text-NewBlue'>{movieDetail.rating}</div>
                </div>
                <div className='divider'></div>
            </div>

            <div>
                <h1 className=' text-3xl text-black font-normal p-2'><Heading title={"Overview"}/></h1>
                <div className='divider'></div>
                <div className='font-normal text-2xl italic bg-richblack-100 rounded-lg p-8 text-black'>{movieDetail.description}</div>
                <div className='divider'></div>
            </div>

            <div>
                <div className='flex items-center gap-8'>
                    <p className='font-normal text-3xl'>Released Year:</p>
                    <p className='bg-richblack-100 rounded-lg p-2 italic text-black font-normal text-2xl'>{movieDetail.releasedYear}</p>
                </div>
                <div className='divider'></div>
            </div>
            <div className='font-normal italic text-NewBlue text-xl'>
                {
                    movieDetail.watched === true ?
                        (<div>You have Watched this movie</div>)
                        :
                        (<div>You have not watched this movie yet!</div>)
                }
            </div>

        </div>

    </div>
  )
}

export default MovieDetailsPage