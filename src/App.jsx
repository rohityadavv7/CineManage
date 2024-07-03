import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import AllMovies from './Components/Movies/AllMovies'
import Movies from './Components/Movies/Movies'
import Carousel from './Components/Designs/Carousel'
import LoginForm from './Components/Forms/LoginForm'
import Home from './Components/Home'
import WatchList from './Components/Movies/WatchList'
import MovieDetailsPage from './Components/Movies/MovieDetailsPage'
import EditDetails from './Components/Movies/EditDetails'
import SignupForm from './Components/Forms/SignupForm'
import AddMovieForm from './Components/Forms/AddMovieForm'
import WatchedMovies from './Components/Movies/WatchedMovies'

function App() {


  return (
    <div className='w-11/12 flex flex-col mx-auto overflow-hidden'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/allmovies' element={<Movies/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path='/moviedetails' element={<MovieDetailsPage/>}/>
        <Route path='/editdetails' element={<EditDetails/>}/>
        <Route path='/addMovie' element={<AddMovieForm/>}/>
        <Route path='/watchedmovies' element={<WatchedMovies/>}/>
      </Routes>
    </div>
  )
}

export default App
