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

class App extends Component {
    

    render() {
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
            </Routes>
          </Router>
        );
    }
}

export default App;
