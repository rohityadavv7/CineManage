import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { userAPIS } from '../../services/apis';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const  {SIGNUP_API} = userAPIS;
    const{register, handleSubmit} = useForm();
    const navigate = useNavigate()

    async function signupData(data){
        const username = data.username
        const email = data.email
        const password = data.password
        console.log(username, email, password)
        try{
            const response = await axios.post(SIGNUP_API, {username,email,password})
            console.log("REPONSE FROM SIGNUP...", response.data);
            navigate("/login")
        }catch(error){
            console.log("ERROR IN SIGNUP...", error);
        }
    } 

  return (
     <div className="flex flex-col items-center justify-center shadow drop-shadow-lg   dark">
            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-2">
                    <h2 class="text-2xl font-bold text-gray-200 mb-4">Signup</h2>

                    <form class="flex flex-col" onSubmit={handleSubmit(signupData)}>
                        <input placeholder="username" 
                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 
                        focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        type="username"
                        {...register("username")}/>

                        <input placeholder="email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 
                            focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition 
                            ease-in-out duration-150" type="email"
                            {...register("email")}/>
                        
                        <input placeholder="password" class="bg-gray-700 text-gray-200 border-0 rounded-md 
                            p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500
                             transition ease-in-out duration-150"
                              type="password"
                              {...register("password")}/>
                        {/*<input placeholder="LinkedIn Profile URL" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/> */}
                        {/* <input placeholder="Resume" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file"/> */}
                        
                        <div className='font-normal p-2 flex gap-4'>
                            <p>Already have and account?</p>
                            <button className='rounded-md px-2 py-1 bg-NewBlue' onClick={() => navigate("/login")}>Login</button>
                        </div>
                        <button class="bg-gradient-to-r from-indigo-500 to-blue-500
                            text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600
                            hover:to-blue-600 transition ease-in-out duration-150" type="submit">
                            Signup
                        </button>
                    </form>
            </div>
        </div>

  )
}

export default SignupForm