import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'


class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <p>
                <Home /> 
              </p>
            </header>
          </div>
        );
    }
}

export default App;
