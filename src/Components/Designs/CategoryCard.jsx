import React, { useState } from 'react'
import { moviesAPIS } from '../../services/apis'
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

function CategoryCard({title, imageUrl,description, releaseYear,rating,category}) {
    const {ADD_TO_WATCHLIST_API} = moviesAPIS;
    const [added, setAdded] = useState("Add to Watchlist")
    const {token} = useSelector((state) => state.auth);

    async function addToWatchlist(){
        console.log("in")
        try{
            const response = await axios.post(ADD_TO_WATCHLIST_API, {title, description,releaseYear,imageUrl, rating}, {headers: {
                                    'Authorization': `Bearer ${token}` // Send the token in the Authorization header
                            }})

            console.log("RESPONSE FROM ADD_TO_WATCHLIST_API...", response.data);
            toast.success("Added to watchlist")

        }catch(error){
            console.log("ERROR IN ADDING TO WATCHLIST...",error )
            toast.error("Failed to add to watchlist")
        }
    }
  return (
    <div
        className="relative drop-shadow-xl 
         w-[250px] h-[350px] overflow-hidden rounded-xl bg-[#3d3c3d]"
        >
         <div className="absolute top-0 left-0 h-full w-full bg-[#fff8dc] hover:gradient-to-t from-black to-white transition-all duration-300">
                <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} alt={title} className='object-cover'/> 
        </div>
        <div
            class="absolute flex items-center opacity-0  hover:opacity-60 transition-all duration-500 justify-center text-white z-[1] rounded-xl inset-0.5 bg-[#323132]"
        >
        </div>
        <button
            onClick={addToWatchlist}
            class="inline-flex absolute z-[100] bottom-0 text-black cursor-pointer items-center gap-1 rounded border border-richblack-300 bg-gradient-to-b from-richblack-50 to-richblack-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-richblack-300 focus-visible:ring-offset-2 active:opacity-100"
            >
            Add to watchlist
        </button>


    </div>

  )
}

export default CategoryCard