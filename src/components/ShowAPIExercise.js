import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import ShowContainerAPI from './ShowContainerAPI';

class ShowAPIExercise extends Component {
    render() {
    return(
        <div>
        {this.props.apiExercises.map((exercise) => {
        return(
            <ShowContainerAPI
            key={exercise.id}
            exerciseName = {exercise.name}
            />
        // <div 
        //     key = {exercise.id}
        //     category = {exercise.category.toString()}
        //     categoryArray = {this.props.categories}
        //     >
        // <div>
        //     <h2>muscles begin {muscle = exercise.category.name} muscles end</h2>
        // </div>
        // <h1>name: {exercise.name} </h1>
        
        // <h2>description: {exercise.description}</h2>
        // <div> Image:
        //     <img src = {exercise.exerciseImage}/>
        // </div>
        // <h2>muscles: {exercise.muscles}</h2>
        // <h2>notes: {exercise.notes}</h2>
        // <h2>url: {exercise.searchUrl}</h2>
            
        // </div>
            )}
        )}
        </div>
        )
    }
}

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

export default ShowAPIExercise