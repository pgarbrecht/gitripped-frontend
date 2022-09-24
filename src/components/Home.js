import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseURL: 'https://wger.de/api/v2/',
            // apiKey: `api_key=${process.env.REACT_APP_API_KEY}/?`,
            // need /exercise, /exerciseimage, /muscle
            category: [
                'exercise/?',
                'exerciseimage/?',
                'muscle/?'
            ],
            jsonFormat: 'format=json',
            limitQuery: '&limit=',
            // display default number of exercises
            limit: 10,
            languageQuery: '&language=2',
            searchURL: '',
            // genericApiUrl: 'https://wger.de/api/v2/exercise/?format=json&limit=5&language=2'
            exercises: []
        }
        this.genericApiUrl = "https://wger.de/api/v2/exercise/?format=json&limit=10&language=2"
    }

    componentDidMount() {
        this.getGenericApiUrl();
    };

    getGenericApiUrl = () => (
        fetch(this.genericApiUrl)
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
    )


    render() {
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