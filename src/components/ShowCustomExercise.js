import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom';

class ShowCustomExercise extends Component {
    render(){
        return(
            <div>
            {this.props.customExercises.map((exercise, index) => {
                return(
                    <ShowContainerCustom
                    key={index}
                    exerciseName={exercise.name}
                    exerciseDescription = {exercise.description}
                    category = {exercise.category}
                    categoryArray = {this.props.categories}
                    />)}
                )}
        </div>
        )
    }
}

export default ShowCustomExercise