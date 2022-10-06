import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AddExerciseBtn from './AddExerciseBtn'

const NavBar = () => {
    return(
    <div className='flex justify-between items-center bg-[#353535] '>
        <Link to='/'>
            <h1 className='text-[#FFD056] font-bold text-4xl  pl-4'>GITRipped</h1>
        </Link>
        <div className='flex justify-center'>
        <AddExerciseBtn />
        {/* <Link to ='/showapi'>
                <p className='pr-4'>See Exercise</p>
        </Link> */}

        </div>
    </div>
    )
}

export default NavBar