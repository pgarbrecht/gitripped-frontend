import React, { Component } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <div>
        <Link to='/'>
            <p>Home</p>
        </Link>
    </div>
    )
}

export default NavBar