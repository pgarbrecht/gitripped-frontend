import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom';

class ShowCustomExercise extends Component {
    render(){
        return(
            <div>
            <p>{this.props.name}</p>
            <p>{this.props.muscles}</p>
            <p>{this.props.description}</p>
            </div>
        )
    }
}

export default ShowCustomExercise