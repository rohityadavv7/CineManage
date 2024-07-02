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

function App() {


  return (
    <div className='w-11/12 flex flex-col mx-auto'>
      <Navbar/>
      <Carousel/>
      <Movies/>
      <Routes>
        <Route path='/Movies' element={<Movies/>}/>
      </Routes>
    </div>
  )
}

export default App
