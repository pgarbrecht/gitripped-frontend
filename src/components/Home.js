import React, { Component } from 'react'
import ApiExerciseTile from './ApiExerciseTile';
import CustomExerciseTile from './CustomExerciseTile';

class Home extends Component {

    render() {
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen pt-4 pb-4'>
                <h2 className='text-white text-2xl'>All Exercises:</h2>
                <div id="api-tile-container" className='grid w-3/5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-1 bg-black overflow-scroll'>
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
                <h2 className='text-white text-2xl'>My Exercises:</h2>
                <div id="custom-exercise-tile" className='grid w-3/5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 h-[370px] gap-4 bg-black overflow-scroll'>
                    {this.props.customExercises.map((exercise, index) => {
                        return (
                            <CustomExerciseTile 
                             key={index}
                             name={exercise.name}
                             description={exercise.description}
                             exerciseImage={exercise.exerciseImage}
                             muscles={exercise.muscles}
                             notes={exercise.notes}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home