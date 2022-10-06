import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom';

class ShowCustomExercise extends Component {

    constructor(props) {
        super(props)
    }
    
    render(){
        // console.log(this.props)
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
                            exerciseImage = {exercise.exerciseImage}
                            category = {exercise.muscles}
                            categoryArray = {this.props.categories}
                            notes = {this.props.notes}
                            handleDeleteExercise = {this.props.handleDeleteExercise}
                            exerciseToEdit={this.props.exerciseToEdit}
                            passExerciseData={this.props.passExerciseData}
                            />)
                            
                    }
                }        
            )}
            </div>
        )
    }
}

export default ShowCustomExercise