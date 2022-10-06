import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AddExerciseBtn from './AddExerciseBtn'
import Dumbbell from '../assets/dumbbell.png'

const NavBar = () => {
    return(
    <div className='flex justify-center w-screen bg-[#1f1f1f]'>
        <div className='flex justify-between items-center w-full max-w-[1000px] p-8'>

            <div className='flex p-2'>
                <img src={Dumbbell} alt='dumbbell icon' className='w-[32px] sm:w-[40px] mr-4'/>
                <Link to='/'>
                    <h1 className='text-[#FFD056] font-bold text-3xl sm:text-4xl  '>GITRipped</h1>
                </Link>

            </div>
            <div className='flex justify-center'>
                <AddExerciseBtn />
            </div>
        </div>
    </div>
    )
}

export default NavBar