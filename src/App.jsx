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

function App() {


  return (
    <div className='w-11/12 flex flex-col mx-auto overflow-hidden'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/allmovies' element={<Movies/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
      </Routes>
    </div>
  )
}

export default App
