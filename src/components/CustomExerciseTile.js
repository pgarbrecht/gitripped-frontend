import React, { Component } from 'react'

class CustomExerciseTile extends Component {
    render(){
        return (
            <>
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44'>
            <p className='font-bold'>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p className='truncate'>{this.props.description}</p>
            </div>
            </>
        )
    }

}

export default CustomExerciseTile