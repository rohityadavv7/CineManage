import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { userAPIS } from '../../services/apis';
import { setToken, setUser } from '../../Slices/authSlice';
import { setWatchlist } from '../../Slices/movieSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <div
        
        class="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
        >
        <h2
            class="text-center text-4xl font-extrabold text-white animation: appear 2s ease-out;"
        >
            Welcome
        </h2>
        <p class="text-center text-gray-200 animation: appear 3s ease-out">
            Sign in to your account
        </p>
        <form onSubmit={handleSubmit(signinData)} class="space-y-6">
            <div class="relative">
            <input
                placeholder="john@example.com"
                class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required=""
                {...register("email")}
                name="email"
                type="email"
            />
            <label
                class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                for="email"
                >Email address
            </label>
            </div>
            <div class="relative">
            <input
                placeholder="Password"
                class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required=""
                {...register("password")}
                name="password"
                type="password"
            />
            <label
                class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                for="password"
                >Password</label
            >
            </div>
            <div class="flex items-center justify-between">
            <label class="flex items-center text-sm text-gray-200">
                <input
                class="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
                />
                <span class="ml-2">Remember me</span>
            </label>
            <a class="text-sm text-purple-200 hover:underline" href="#"
                >Forgot your password?</a
            >
            </div>
            <button 
                class="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                type="submit"
                >
                Sign In
            </button>
        </form>
        <div class="text-center text-gray-300">
            Don't have an account?
            <a class="text-purple-300 hover:underline" href="#">Sign up</a>
        </div>
    </div>

  )
}

export default LoginForm