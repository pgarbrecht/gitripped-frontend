import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom';

class ShowCustomExercise extends Component {
    render(){
        return(
            <div>
            {this.props.customExercises.map((exercise, index) => {
                // console.log(exercise.category, 'line 9 of showcustomexercise')
                // console.log(this.props.customExercises, 'line 10 of customExercises')
                return(
                    <ShowContainerCustom
                    key={index}
                    exerciseName={exercise.name}
                    exerciseDescription = {exercise.description}
                    category = {exercise.muscles}
                    categoryArray = {this.props.categories}
                    />)}
                    
                )}
        </div>
        )
    }
}

export default ShowCustomExercise