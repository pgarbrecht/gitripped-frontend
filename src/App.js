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

let baseURL = process.env.REACT_APP_BACKEND_URL

class App extends Component {
	constructor(props) {
		super(props);
    //we will hold the custom exercises here
		this.state = {
			name: "",
      description: "",
      exerciseImage: "",
      muscles: "",
      notes: "",
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
      // this.setState({ name: data.name });
     });
   }

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
              <Route path='/new'element={<NewExercise />}/>
            </Routes>
          </Router>
        );
    }
}

export default App;
