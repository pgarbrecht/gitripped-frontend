import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'

class App extends Component {
    

    render() {
        return (
          <>
            <Home /> 
            <NewExercise />
          </>
        );
    }
}

export default App;
