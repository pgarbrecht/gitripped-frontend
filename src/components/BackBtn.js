import React from 'react'
import { Link } from "react-router-dom"
import LeftArrow from '../assets/left.png'

const BackBtn = () => {
  return (
    <Link 
        to='/' 
        className='bg-[#ABC8CA] p-2 m-2 rounded cursor-pointer mx-8 mt-8'>
        <div className='flex items-center justify-center'>
            <img src={LeftArrow} alt='arrow icon'/>
            <p className='pr-2'>Back to Home</p>
        </div>
    </Link>
  )
}

export default BackBtn