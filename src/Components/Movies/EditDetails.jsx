import React from 'react'
import EditMovieForm from '../Forms/EditMovieForm'
import { moviesAPIS } from '../../services/apis'

function EditDetails() {
    
  return (
    <div>
        <h1 className='text-3xl font-normal text-white'>Edit your Movie details here</h1>
        <div className='divider w-[40%]'></div>

        <div>
            <EditMovieForm/>
        </div>
    </div>
  )
}

export default EditDetails