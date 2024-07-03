import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { moviesAPIS } from '../../services/apis';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';


function AddMovieForm() {
    const {register, handleSubmit} = useForm();
    const {ADD_MOVIE_API} = moviesAPIS;
    const {token} = useSelector((state) => state.auth)

    async function addMovieData(data){
        const title = data.title
        const description = data.description
        const rating = data.rating
        const releaseYear = data.releaseYear
        console.log("data-> ",data)
        try{

            console.log("Printing-> ",title,description,rating,releaseYear)
            const response = await axios.post(ADD_MOVIE_API, {title,description,rating,imageUrl:"abcd",releaseYear},{headers: {
                                    'Authorization': `Bearer ${token}` // Send the token in the Authorization header
                            }})

            console.log("RESPONSE IN ADD...", response.data);
            toast.success("Movie Added!")

        }catch(error){
            console.log("ERROR IN ADDING MOVIE...", error);
        }
    }

  return (
          <div className="flex flex-col items-center justify-center shadow drop-shadow-lg   dark">
            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-2">
                    <h2 class="text-2xl font-bold text-gray-200 mb-4">Add your Movie</h2>

                    <form class="flex flex-col" onSubmit={handleSubmit(addMovieData)}>
                        

                        <input placeholder="Title" 
                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 
                        focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        type="title"
                        {...register("title")}/>
                        
                        <input placeholder="rating" class="bg-gray-700 text-gray-200 border-0 rounded-md 
                            p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                             transition ease-in-out duration-150"
                              type="rating"
                              {...register("rating")}/>

                        <textarea placeholder="description" class="bg-gray-700 text-gray-200 border-0 rounded-md
                            p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                            transition ease-in-out duration-150" 
                            typeof="description"
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
                            Add Movie
                        </button>
                    </form>
            </div>
        </div>

  )
}

export default AddMovieForm