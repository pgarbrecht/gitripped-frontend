import React, { Component } from 'react'
// import { Link } from "react-router-dom";

class ShowAPIExercise extends Component {
    render() {
    return(
        <div>
        {this.props.apiExercises.map((exercise) => {
        return(
        <div key = {exercise.id}
            description={exercise.description}>
        <h1>name: {exercise.name} </h1>
        <h2>categories: {exercise.categories}</h2>
        </div>
                        )
                     })}         
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