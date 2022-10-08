import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ShowContainerAPI from './ShowContainerAPI';

class ShowAPIExercise extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const apiExerciseId = parseInt(window.location.search.slice(4));

    return(
        <div>
        {this.props.apiExercises.map((exercise, index) => {
        if(exercise.id === apiExerciseId){
            return(
                <ShowContainerAPI
                    key={index}
                    id={apiExerciseId}
                    exerciseName = {exercise.name}
                    exerciseDescription = {exercise.description}
                    category = {exercise.category}
                    categoryArray = {this.props.categories}
                    exerciseBase = {exercise.exercise_base}
                    apiExerciseImages = {this.props.apiExerciseImages}
                />)}
        }
        )}
        </div>
        )
    }
}


export default ShowAPIExercise














// const ShowAPIExercise = () => {
//     return(
//         <div>
//         {this.props.apiExercises.map((exercise) => {
//         return(
//         <div key = {exercise.id}
//             description={exercise.description}>
//         <h1>description: {exercise.description} </h1>
//         </div>
//                         )
//                      })}         
//         </div>
//     )
// }

// class ShowAPIExercise extends Component{
//     render(){
//         return(
//             <>
            // {this.props.apiExercise.allExercises.map((allExercises) => {
//                 return(
                    // <div key = {allExercises.id}>
//                         <h1>Name: {allExercises.name} </h1>
//                     </div>
//                 )
//             })}
//             </>
//         )
//     }
// }

