import React from 'react'
import { useSelector } from 'react-redux';
import { moviesAPIS } from '../../services/apis';
import toast from 'react-hot-toast';

function MovieCard({description,title,rating, image,releaseYear}) {

    const{ADD_TO_WATCHLIST_API} = moviesAPIS

    const {token} = useSelector((state) => state.auth);

    async function addToWatchlist(){
        console.log("in")
        try{
            const response = await axios.post(ADD_TO_WATCHLIST_API, {title, description,releaseYear,imageUrl, rating}, {headers: {
                                    'Authorization': `Bearer ${token}` // Send the token in the Authorization header
                            }})

            console.log("RESPONSE FROM ADD_TO_WATCHLIST_API...", response.data);
            toast.success("Movie added to watchlist!")

        }catch(error){
            console.log("ERROR IN ADDING TO WATCHLIST...",error )
            toast.error("error adding to watchlist")
        }
    }

  return (
    <div
            className="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] 
            relative flex justify-end flex-col p-[1.5em] z-[1] hover:bg-gradient-to-t from-black 
             overflow-hidden hover:filter  hover:scale-105 hover:shadow-bl
            transition-all duration-200"
            
            >
                <div class="absolute inset-0 bg-gradient-to-t from-transparent to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 h-full w-full bg-[#fff8dc]">
                <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} /> 
            </div>

            <div
                className="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em] font-normal"
            >
                <div className="h-fit w-full">
                <h1
                    
                    className="card_heading text-[1.5em] tracking-[.2em] font-normals text-white font-semibold"
                >
                    {title}
                </h1>
                
                </div>

                <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
                

                <div className="w-fit h-fit text-NewBlue font-nunito text-[1.2em] font-light">
                    <p>{rating}/10 stars</p>
                </div>
                </div>

                <button className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
                                    
                    <div role="alert" class="max-w-[300px] p-2 bg-indigo-400 rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
                        <span class="flex rounded-full bg-richblue-500 text-white font-normal uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                        <button onClick={addToWatchlist}><span class="font-semibold mr-2 text-left flex-auto">Add to Watchlist?</span></button>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
                    </div>

                </button>
            </div>
            <p
                class="font-nunito block text-blackfont-light relative h-[0em] bg-
                 group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden"
            >
                {description}
            </p>
    </div>

  )
}

export default MovieCard