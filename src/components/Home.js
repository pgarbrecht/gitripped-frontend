import React, { Component } from 'react'
import ApiExerciseTile from './ApiExerciseTile';
import CustomExerciseTile from './CustomExerciseTile';

class Home extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         baseUrl: 'https://wger.de/api/v2/exercise/?format=json&language=2&limit=',
    //         limit: "5",
    //         searchUrl: "",
    //         exercises: [],
    //         categoriesUrl: "https://wger.de/api/v2/exercisecategory/?format=json",
    //         categories: []
    //     }
    // }


    render() {
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <h2 className='text-white text-2xl'>All Exercises:</h2>
                <div id="api-tile-container" className='grid w-3/4 grid-cols-4 h-[500px] gap-4 bg-white'>
                    {this.props.apiExercises.map((exercise, index) => {
                        // console.log("exercise:", exercise)
                        return (
                            <ApiExerciseTile
                            key={index}
                            exerciseName = {exercise.name}
                            category = {exercise.category.toString()}
                            categoryArray = {this.props.categories}
                            />
                        )
                        })}
                </div>
                <h2 className='text-white text-2xl'>My Exercises:</h2>
                <div id="custom-exercise-tile" className='grid w-3/4 grid-cols-4 h-[500px] gap-4 bg-white'>
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