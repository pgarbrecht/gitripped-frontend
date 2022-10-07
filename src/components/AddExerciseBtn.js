import React from 'react'
import { Link } from "react-router-dom"

const AddExerciseBtn = () => {
  return (
    <Link to='/new'>

        <div className='flex items-center pr-2 bg-[#ABC8CA] p-2 m-2 rounded cursor-pointe text-sm sm:text-base'> 
            <div className="material-symbols-outlined">add</div>

            <p className='hidden sm:flex'>
                New Exercise</p>
        </div>

    </Link>
  )
}

export default AddExerciseBtn