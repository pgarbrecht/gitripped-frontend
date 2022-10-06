import React from 'react'
import { Link } from "react-router-dom"
import LeftArrow from '../assets/left.png'

const BackBtn = () => {
  return (
    <Link 
        to='/' 
        className=''>
        <div className='flex items-center bg-[#ABC8CA] p-2 rounded cursor-pointer mx-8 mt-8 text-sm sm:text-base w-[160px]'>
            <img src={LeftArrow} alt='arrow icon'/>
            <p className='pr-2'>Back to Home</p>
        </div>
    </Link>
  )
}

export default BackBtn