import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'
import NavBar from './components/NavBar'
import ShowAPIExercise from './components/ShowAPIExercise';
import ShowCustomExercise from './components/ShowCustomExercise'
import EditExercise from './components/EditExercise';
import EditBtn from './components/EditBtn';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

class App extends Component {
	constructor(props) {
		super(props);
        //we will hold the custom exercises here
		this.state = {
            // exercises is an array of exercise objects (model)
            customExercises: [{
              name: "",
              description: "",
              exerciseImage: "",
              muscles: "",
              notes: "",
            }],
              baseUrl: 'https://wger.de/api/v2/exercise/?format=json&language=2&limit=',
              limit: "5",
              searchUrl: "",
              exercises: [],
              categories: [],
            // intitialize empty object
              exerciseToEdit: {
                id: '',
                name: '',
                description: '',
                exerciseImage: '',
                muscles: '',
                notes: '',
              }
        };
	}

  //CUSTOM EXERCISES HANDLERS

    //accessing our custom exercises from the database
    getExercises = () => {
        fetch(baseURL)

        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return [];
            }
        })

        .then((data) => {    
            this.setState({
                // grabbing data from db and updating state when components mount
                customExercises: data.allExercises
            })        
        });
    }

    handleAddExercise = (exercise) => {
        const copyExercises = [...this.state.customExercises.exercises]
        copyExercises.unshift(exercise)
        this.customExercises.setState({
          customExercises: copyExercises,
        })
    }

    handleEditExercise = (e, exercise) => {
        e.preventDefault()
        // console.log('hitting handleEditExercise in App.js!')
        // console.log(exercise)
    }

    passExerciseData = (exerciseToEdit) => {
        this.setState({ exerciseToEdit: {
            id: exerciseToEdit.id,
            name: exerciseToEdit.name,
            description: exerciseToEdit.description,
            exerciseImage: exerciseToEdit.exerciseImage,
            muscles: exerciseToEdit.muscles,
            notes: exerciseToEdit.notes,
        }
        })
    }

    handleDeleteExercise = (id) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
        method: 'DELETE'
        }).then( response => {
        const findIndex = this.state.customExercises.findIndex(exercise => exercise._id === id)
        const copyCustomExercises = [...this.state.customExercises]
        copyCustomExercises.splice(findIndex, 1)
        this.setState({customExercises: copyCustomExercises})
        console.log('got to bottom of handle delete');
        })
    }

    //API EXERCISES HANDLERS
    getSearchUrl = () => {
        this.setState({
            searchUrl: this.state.baseUrl + this.state.limit
            // searchUrl: 'https://wger.de/api/v2/exercise/?format=json&language=2&limit=5'
        }, () => (
        fetch(this.state.searchUrl)
        .then(response => { return response.json() })
        .then(json => {
            const exercisesToAdd = []
            json.results.forEach((exercise) => {
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
        fetch('https://wger.de/api/v2/exercisecategory/?format=json')
        .then(response => { return response.json() })
        .then(json => {
            const categoriesToAdd = []
            json.results.forEach((category) => {
                categoriesToAdd.push(category)
            }) 
            this.setState({
                categories: categoriesToAdd
            })
        }  //add new key to state and store array of categories
        ), (err) => console.log(err)
    )

  //run these methods when components mount
    componentDidMount() {
		this.getExercises();
        this.getSearchUrl();
        this.getMuscleCategories();
    }

    render() {
        
        return (
        
        <Router>
            <NavBar />
            <Routes>
                <Route 
                    path='/'
                    element={<Home 
                        customExercises={this.state.customExercises} 
                        apiExercises={this.state.exercises} 
                        categories={this.state.categories}
                        passExerciseData={this.passExerciseData}
                        />}
                />
                <Route 
                    path='/showapi' 
                    element={<ShowAPIExercise 
                        apiExercises={this.state.exercises} 
                        categories={this.state.categories}/>}
                />
                <Route 
                    path='/showcustom'
                    element={<ShowCustomExercise
                        customExercises={this.state.customExercises} 
                        categories={this.state.categories} 
                        handleDeleteExercise={this.handleDeleteExercise} 
                        exerciseToEdit={this.state.exerciseToEdit}
                        passExerciseData={this.passExerciseData}/>}
                />
                <Route 
                    path='/new'
                    element={<NewExercise/>}
                />
                <Route 
                    path='/edit'
                    element={<EditExercise 
                        customExercises={this.state.customExercises} 
                        handleEditExercise={this.handleEditExercise} 
                        exerciseToEdit={this.state.exerciseToEdit}
                        categories={this.state.categories}/>}
                />
                <Route
                    element={<EditBtn 
                      customExercises={this.state.customExercises} 
                      categories={this.state.categories} 
                      handleDeleteExercise={this.handleDeleteExercise} 
                      exerciseToEdit={this.state.exerciseToEdit}
                      passExerciseData={this.passExerciseData}/>}
                />
            </Routes>
        </Router>
        );
    }
}

export default App;
