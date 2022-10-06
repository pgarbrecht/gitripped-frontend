import React from 'react'
import { Link } from "react-router-dom"

const AddExerciseBtn = () => {
  return (
    <Link to='/new'>
        <p className='flex justify-center pt-2 pr-4 bg-[#ABC8CA] p-2 m-2 rounded cursor-pointer'>
            <span class="material-symbols-outlined">
            add
            </span>    
        Add Custom Exercise</p>
    </Link>
  )
}

export default AddExerciseBtn