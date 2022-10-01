import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'
import NavBar from './components/NavBar'
import ShowAPIExercise from './components/ShowAPIExercise';
import EditExercise from './components/EditExercise';

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
            exercises: [
                {
                    name: "",
                    description: "",
                    exerciseImage: "",
                    muscles: "",
                    notes: "",
                }
            ]

        };
	}

  //when component is loaded we'll run getExercises
  componentDidMount() {
		this.getExercises();
    }

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
                exercises: data.allExercises
            })        
        });
    }

    handleAddExercise = (exercise) => {
        const copyExercises = [...this.state.exercises]
        copyExercises.unshift(exercise)
        this.setState({
            exercises: copyExercises,
        })
    }

    // Christina's notes:
    // handleEditExercise method here 
    // when clicked, need to get id of exercise 
    // pass that as a prop into /edit route 
    handleEditExercise = () => {
        console.log('handleEditExercises here')
    }
    
    render() {
        // console.log('App.js - line  93 --------------------', this.state.exercises)
        return (
          
          <Router>
            <NavBar />
            <Routes>
              <Route path='/'element={<Home />}/>
              <Route path='/showapi'element={<ShowAPIExercise />}/>
              <Route path='/new'element={<NewExercise/>}/>
              <Route path='/edit'element={<EditExercise exercises={this.state.exercises} handleEditExercise={this.handleEditExercise}/>}/>
              
            </Routes>
          </Router>
        );
    }
}

export default App;
