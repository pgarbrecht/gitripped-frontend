import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'
import NavBar from './components/NavBar'
import ShowAPIExercise from './components/ShowAPIExercise';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003/exercises';
} else {
  baseURL = `${process.env.REACT_APP_BACKEND_URL}`;
}

class App extends Component {
	constructor(props) {
		super(props);
        //we will hold the custom exercises here
		this.state = {
            exercises: []
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
       console.log('got to fetch base url');
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      console.log('data:', data);
      this.setState({ 
        name: data.name, 
        description: data.description,
        exerciseImage: data.exerciseImage,
        muscles: data.muscles,
        notes: data.notes
    });
     });
   }

   //define handleAddExercise method here
   // Here, 'exercise' will look like:
        // exercise = {
            // name: "",
            // description: "",
            // exerciseImage: "",
            // muscles: "",
            // notes: "",
        // }
   handleAddExercise = (exercise) => {
    const copyExercises = [...this.state.exercises]
    copyExercises.unshift(exercise)
    console.log(exercise, 'logging exercise, line 71')
    this.setState({
        exercises: copyExercises,
        // set form back to blank so user can add more exercises
        // name: "",
        // description: "",
        // exerciseImage: "",
        // muscles: "",
        // notes: "",
    })
    console.log(exercise, 'in app.js, line 59')
   }

    render() {
      console.log(this.state)
        return (
          // <>
          //   <Home /> 
          //   <NewExercise />
          // </>
          
          <Router>
            <NavBar />
            <Routes>
              <Route path='/'element={<Home />}/>
              <Route path='/ShowAPIExercise'element={<ShowAPIExercise />}/>
              <Route path='/new'element={<NewExercise handleAddExercise={this.handleAddExercise}/>}/>
            </Routes>
          </Router>
        );
    }
}

export default App;
