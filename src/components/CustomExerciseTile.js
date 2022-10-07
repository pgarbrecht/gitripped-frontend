import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomExerciseTile extends Component {

    
    render(){
        return (
            <>

            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 lg:h-44 md:h-36 sm:h-32 h-32 lg:w-44 md:w-36 sm:w-32 w-32 overflow-hidden'>

            <p className='font-bold'>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p className='truncate text-sm'>{this.props.description}</p>
            {/* <p><a href='/exercises/' className='underline'>View More</a></p> */}

            <Link to ={`/showcustom?id=${this.props.id}`}
                // exercisetoshow={this.props.name}
                // exerciseid={this.props.id}
                >

            <p className='pr-4 underline text-[#616161] text-sm'>View More</p>

            </Link>
            </div>
            </>
        )
    }

}

export default CustomExerciseTile