import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <p>
                <Home /> 
                <NewExercise />
              </p>
            </header>
          </div>
        );
    }
}

export default App;
