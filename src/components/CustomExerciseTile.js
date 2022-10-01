import React, { Component } from 'react'

class CustomExerciseTile extends Component {
    render(){
        return (
            <>
            <div id="tile" className='border-black border-2 rounded-md '>
            <p>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p>{this.props.description}</p>
            </div>
            </>
        )
    }

}

export default CustomExerciseTile