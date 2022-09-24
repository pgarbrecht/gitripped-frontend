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
            limit: 5,
            languageQuery: '&language=2',
            searchURL: '',
            // genericApiUrl: 'https://wger.de/api/v2/exercise/?format=json&limit=5&language=2'
        }
        this.genericApiUrl = "https://wger.de/api/v2/exercise/?format=json&limit=5&language=2"
    }

    componentDidMount() {
        this.getGenericApiUrl();
        console.log("in mount:", this.state.exercises)
    };

    getGenericApiUrl = () => (
        fetch(this.genericApiUrl)
        .then(response => { return response.json() })
        .then(json => {
            const exercisesToAdd = []
            json.results.map((exercise) => {
                exercisesToAdd.push(exercise)
                console.log("line 39:", exercisesToAdd)
            }) 

            this.setState({
                exercises: exercisesToAdd
            })
            console.log("in getaPI:", json.results[0].name)
        }  //add new key to state and store array of exercises
        ), (err) => console.log(err)
    )


    render() {
        console.log("line 50:", this.state.exercises)
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <div className='grid w-3/4 h-[500px] bg-white'>
                    <a href={
                        this.state.baseURL + 
                        // this.state.apiKey + 
                        this.state.category[0] + 
                        this.state.jsonFormat + 
                        this.state.limitQuery + 
                        this.state.limit +
                        this.state.languageQuery 
                    }>SearchURL:{
                        this.state.baseURL + 
                        // this.state.apiKey + 
                        this.state.category[0] + 
                        this.state.jsonFormat + 
                        this.state.limitQuery + 
                        this.state.limit +
                        this.state.languageQuery 
                    } </a>
                    {/* <p>{this.state.exercises[0].name}</p> */}
                    {/* {this.state.exercises.map((exercise, index) => {
                        return (
                            <p
                            key={index}
                            >exercise</p>
                        )
                    })} */}
                </div>
            </div>
        )
    }
}

export default Home