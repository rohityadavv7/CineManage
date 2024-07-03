import React from 'react'
import Carousel from './Designs/Carousel'
import AllMovies from './Movies/AllMovies'
import Movies from './Movies/Movies'
import Footer from './Footer'
import Questions from './Questions'

function Home() {
  return (
    <div>
        <Carousel/>
        <div className='divider'></div>
        <AllMovies/>
        <div className='divider'></div>
        <Movies/>
        <div className='divider'></div>
        <Questions/>
        <div className='divider'></div>

        <Footer/>
    </div>
  )
}

export default Home