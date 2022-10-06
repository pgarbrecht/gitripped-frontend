import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomExerciseTile extends Component {

    
    render(){
        return (
            <>
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 lg:h-44 md:h-40 sm:h-38 h-38 lg:w-44 md:w-40 sm:w-38 w-38'>
            <p className='font-bold'>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p className='truncate'>{this.props.description}</p>
            {/* <p><a href='/exercises/' className='underline'>View More</a></p> */}

            <Link to ={`/showcustom?id=${this.props.id}`} 
                // exercisetoshow={this.props.name}
                // exerciseid={this.props.id}
                >
                <p className='pr-4 underline'>View More</p>
            </Link>
            </div>
            </>
        )
    }

}

export default CustomExerciseTile