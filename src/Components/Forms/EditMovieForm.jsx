import React from 'react'
import { moviesAPIS } from '../../services/apis'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function EditMovieForm() {
    const {EDIT_MOVIE_API} = moviesAPIS
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();

    async function editMovie(data) {

        try{
            const title = data.title;
            const description = data.description;;
            const rating = data.rating;
            const releaseYear = data.releaseYear;
            const response = await axios.post(EDIT_MOVIE_API, {title,description,rating, releaseYear})

            console.log("RESPONSE FROM EDIT MOVIE...", response.data);
            toast.success("Movie edited!")
            navigate("/watchlist")


        }catch(error){
            console.log("ERROR IN EDITING MOVIE...",error);
        }
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center shadow drop-shadow-lg   dark">
            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-2">
                    <h2 class="text-2xl font-bold text-gray-200 mb-4">Edit Movie</h2>

                    <form class="flex flex-col" onSubmit={handleSubmit(editMovie)}>
                        <input placeholder="Title" 
                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 
                        focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        type="title"
                        {...register("title")}/>

                        <input placeholder="Rating" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 
                            focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition 
                            ease-in-out duration-150" type="rating"
                            {...register("rating")}/>
                        <textarea placeholder="Description" class="bg-gray-700 text-gray-200 border-0 rounded-md
                            p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                            transition ease-in-out duration-150" 
                            name="description"
                            {...register("description")}></textarea>
                        <input placeholder="releaseYear" class="bg-gray-700 text-gray-200 border-0 rounded-md 
                            p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                             transition ease-in-out duration-150"
                              type="text"
                              {...register("releaseYear")}/>
                        {/*<input placeholder="LinkedIn Profile URL" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/> */}
                        {/* <input placeholder="Resume" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file"/> */}

                        <button class="bg-gradient-to-r from-indigo-500 to-blue-500
                            text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600
                            hover:to-blue-600 transition ease-in-out duration-150" type="submit">
                            Edit
                        </button>
                    </form>
            </div>
        </div>

    </div>
  )
}

export default EditMovieForm