import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom';

class ShowCustomExercise extends Component {
    render(){
        console.log(this.props)
        const customExerciseId = window.location.search.slice(4);

        return(
            <div>
                {this.props.customExercises.map((exercise, index) => {
                    // console.log(exercise.category, 'line 9 of showcustomexercise')
                    // console.log(this.props.customExercises, 'line 10 of customExercises')
                    if(exercise._id === customExerciseId) {
                        return(
                            <ShowContainerCustom
                            key={index}
                            id={customExerciseId}
                            exerciseName={exercise.name}
                            exerciseDescription = {exercise.description}
                            category = {exercise.muscles}
                            categoryArray = {this.props.categories}
                            handleDeleteExercise = {this.props.handleDeleteExercise}
                            />)
                    }
                }        
            )}
            </div>
        )
    }
}

export default ShowCustomExercise