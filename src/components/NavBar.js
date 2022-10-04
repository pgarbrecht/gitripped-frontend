import React, { Component } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <div className='flex justify-between'>
        <Link to='/'>
        <h1 className='text-yellow text-2xl pl-4'>GITRipped</h1>
        </Link>
        <div className='flex justify-evenly'>
        <Link to='/new'>
            {/* this will become a button later */}
            <p className='pr-4'>Add New Exercise</p>
        </Link>
        <Link to ='/showapi'>
                <p className='pr-4'>See Exercise</p>
        </Link>
        </div>
    </div>
    )
}

export default NavBar