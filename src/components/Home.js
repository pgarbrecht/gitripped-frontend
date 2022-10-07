import React, { Component } from 'react'
import ApiExerciseTile from './ApiExerciseTile'
import CustomExerciseTile from './CustomExerciseTile'
import '../index.css'

class Home extends Component {

    render() {
        return (

            // add background-image to class
            <div className=' flex flex-col justify-center items-center bg-[#353535] w-full h-screen pt-4 pb-4'>
                <h2 className='text-[#ffd056] font-bold text-2xl my-4'>API Exercises</h2>
                <div id="api-tile-container" className='grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit'>

                    {this.props.apiExercises.map((exercise, index) => {
                        return (
                            <ApiExerciseTile
                            key={index}
                            id = {exercise.id}
                            exerciseName = {exercise.name}
                            exerciseDescription = {exercise.description}
                            category = {exercise.category.toString()}
                            categoryArray = {this.props.categories}
                            />
                        )
                        })}
                </div>

                <h2 className='text-[#ffd056] font-bold text-2xl my-4'>Community Exercises</h2>
                <div id="custom-exercise-tile" className='grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit '>

                    {this.props.customExercises.map((exercise, index) => {
                        return (
                            <CustomExerciseTile 
                             key={index}
                             id = {exercise._id}
                             name={exercise.name}
                             description={exercise.description}
                             exerciseImage={exercise.exerciseImage}
                             muscles={exercise.muscles}
                             notes={exercise.notes}
                             exerciseToEdit = {this.props.exerciseToEdit}
                             passExerciseData = {this.props.passExerciseData}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home