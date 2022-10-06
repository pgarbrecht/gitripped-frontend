import React from 'react'
import { Link } from "react-router-dom"

const AddExerciseBtn = () => {
  return (
    <Link to='/new'>
        
        <p className='flex items-center pr-2 bg-[#ABC8CA] p-2 m-2 rounded cursor-pointe text-sm sm:text-base'>
            <span className="material-symbols-outlined">add</span>New Exercise</p>
    </Link>
  )
}

export default AddExerciseBtn