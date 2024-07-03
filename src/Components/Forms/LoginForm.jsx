import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { userAPIS } from '../../services/apis';
import { setToken, setUser } from '../../Slices/authSlice';
import { setWatchlist } from '../../Slices/movieSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginForm() {

    const{register, handleSubmit} = useForm();
    const {LOGIN_API} = userAPIS;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function signinData(data){
        const email = data.email;
        const password = data.password;
        console.log(email,password);

        try{

            const response = await axios.post(LOGIN_API, {email,password});

            console.log("LOGIN RESPONSE... ", response.data);

            dispatch(setToken(response.data.token))
            dispatch(setUser(response.data.user));
            dispatch(setWatchlist(response.data.user.moviesWatching));

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/");

        }catch(error){
            console.log("ERROR IN LOGIN...", error);
        }
    }

  return (
      <div className="flex flex-col items-center justify-center shadow drop-shadow-lg   dark">
            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-2">
                    <h2 class="text-2xl font-bold text-gray-200 mb-4">Welcome, Login to your account</h2>

                    <form class="flex flex-col" onSubmit={handleSubmit(signinData)}>
                        

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
                            <p>Don't have and account?</p>
                            <button className='rounded-md px-2 py-1 bg-NewBlue' onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                        <button class="bg-gradient-to-r from-indigo-500 to-blue-500
                            text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600
                            hover:to-blue-600 transition ease-in-out duration-150" type="submit">
                            Login
                        </button>
                    </form>
            </div>
        </div>

  )
}

export default LoginForm

{/* 
<div class="w-80 rounded-2xl bg-slate-900">
  <div class="flex flex-col gap-2 p-8">
    <p class="text-center text-3xl text-gray-300 mb-4">Register</p>
    <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email">
    <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password">
    <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Confirm password">
    <label class="flex cursor-pointer items-center justify-between p-1 text-slate-400">
      Accept terms of use
      <div class="relative inline-block">
        <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox">
        <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
      </div>
    </label>
    <button class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
  </div>
</div> */}