import React, { Component } from 'react'

class Home extends Component {
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
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <div className='grid w-3/4 h-[500px] bg-white'>
                    {/* place tile components here */}
                </div>
            </div>
        )
    }
}

export default Home