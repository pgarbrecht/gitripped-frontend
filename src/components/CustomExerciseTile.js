import React, { Component } from 'react'

class CustomExerciseTile extends Component {
    render(){
        return (
            <>
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 lg:h-44 md:h-36 sm:h-32 h-32 lg:w-44 md:w-36 sm:w-32 w-32'>
            <p className='font-bold'>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p className='truncate'>{this.props.description}</p>
            <p><a href='#' className='underline'>View More</a></p>
            </div>
            </>
        )
    }

}

export default CustomExerciseTile