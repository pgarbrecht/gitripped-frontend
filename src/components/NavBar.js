import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AddExerciseBtn from './AddExerciseBtn'

const NavBar = () => {
    return(
    <div className='flex justify-between items-center bg-[#353535] p-8'>
        <Link to='/'>
            <h1 className='text-[#FFD056] font-bold text-3xl sm:text-4xl  '>GITRipped</h1>
        </Link>
        <div className='flex justify-center'>
            <AddExerciseBtn />
        </div>
    </div>
    )
}

export default NavBar