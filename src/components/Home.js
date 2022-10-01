import React, { Component } from 'react'
import ApiExerciseTile from './ApiExerciseTile';
import CustomExerciseTile from './CustomExerciseTile';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseUrl: 'https://wger.de/api/v2/exercise/?format=json&language=2&limit=',
            limit: "5",
            searchUrl: "",
            exercises: [],
            categoriesUrl: "https://wger.de/api/v2/exercisecategory/?format=json",
            categories: []
        }
    }

    componentDidMount() {
        this.getSearchUrl();
        this.getMuscleCategories();
    };

    getSearchUrl = () => {
        this.setState({
            searchUrl: this.state.baseUrl + this.state.limit
        }, () => (
        fetch(this.state.searchUrl)
        .then(response => { return response.json() })
        .then(json => {
            const exercisesToAdd = []
            json.results.map((exercise) => {
                exercisesToAdd.push(exercise)
            }) 
            this.setState({
                exercises: exercisesToAdd
            })
        }  //add new key to state and store array of exercises
        ), (err) => console.log(err)
        ))
    }

    getMuscleCategories = () => (
        fetch(this.state.categoriesUrl)
        .then(response => { return response.json() })
        .then(json => {
            const categoriesToAdd = []
            json.results.map((category) => {
                categoriesToAdd.push(category)
            }) 
            this.setState({
                categories: categoriesToAdd
            })
        }  //add new key to state and store array of categories
        ), (err) => console.log(err)
    )

    render() {
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <h2 className='text-white text-2xl'>All Exercises:</h2>
                <div id="api-exercise-tile" className='grid w-3/4 h-[500px] bg-white'>
                    {this.state.exercises.map((exercise, index) => {
                        return (
                            <ApiExerciseTile
                            key={index}
                            exerciseName = {exercise.name}
                            category = {exercise.category.toString()}
                            categoryArray = {this.state.categories}
                            />
                        )
                        })}
                </div>
                <h2 className='text-white text-2xl'>My Exercises:</h2>
                <div id="custom-exercise-tile" className='grid w-3/4 h-[500px] bg-white'>
                    {this.state.exercises.map((exercise, index) => {
                        return (
                            <CustomExerciseTile
                             key={index}
                            //  name={exercise.name}
                            //  description={exercise.description}
                            //  exerciseImage={exercise.exerciseImage}
                            //  muscles={exercise.muscles}
                            //  notes={exercise.notes}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home