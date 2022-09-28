import React, { Component } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <div>
        <Link to='/'>
            <p>Home</p>
        </Link>
        <Link to='/new'>
            {/* this will become a button later */}
            <p>Add New Exercise</p>
        </Link>
    </div>
    )
}

export default NavBar