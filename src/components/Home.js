import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseUrl: 'https://wger.de/api/v2/exercise/?format=json&language=2&limit=',
            limit: "5",
            searchUrl: "",
            exercises: []
        }
    }

    componentDidMount() {
        this.getGenericApiUrl();
    };

    getGenericApiUrl = () => {
        this.setState({
            searchUrl: this.state.baseUrl + this.state.limit
        }, () => {
        fetch(this.state.searchUrl)
        .then(response => { return response.json() })
        .then(json => {
            const exercisesToAdd = []
            json.results.map((exercise) => {
                exercisesToAdd.push(exercise)
            }) 
            this.setState({
                exercises: exercisesToAdd
            })
        }  //add new key to state and store array of exercises
        ), (err) => console.log(err)
        })
    }


    render() {
        console.log(this.state.searchUrl)
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <div className='grid w-3/4 h-[500px] bg-white'>
                    {this.state.exercises.map((exercise, index) => {
                        return (
                            <p
                            key={index}
                            >{exercise.name}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home