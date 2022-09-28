import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'
import NavBar from './components/NavBar'

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
              <Route path='/new'element={<NewExercise />}/>
            </Routes>
          </Router>
        );
    }
}

export default App;
