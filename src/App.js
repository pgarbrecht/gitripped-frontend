import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import NewExercise from './components/NewExercise'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseURL: 'https://wger.de/api/v2/',
            apiKey: `api_key=${process.env.REACT_APP_API_KEY}`,
            // need /exercise, /exerciseimage, /muscle
            category: [
                'exercise/',
                'exerciseimage/',
                'muscle/'
            ],
            jsonFormat: '?format=json/',
            limitQuery: '&limit=',
            // display default number of exercises
            limit: 5,
            languageQuery: '&language=2',
            searchURL: ''
        }
    }

    render() {
        console.log(this.state)
        return (
          <>
            <Home /> 
            <NewExercise />
          </>
        );
    }
}

export default App;
