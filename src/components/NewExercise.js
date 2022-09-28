import React, { Component } from 'react'

// WHAT I DID:
// 1. Add 'New' link to nav (temporarily for easier access)


class NewExercise extends Component {
    // need to add state to this component 
    constructor(props) {
        super(props)
        this.state = {
            exerciseName: '',
            exerciseDescription: '',
            muscleGroup: '', // do we want to allow user to add more than 1?
            exerciseImageURL: ''
        }
    }

    // handleChange method
    handleChange = (e) => {
        // capture what user is typing in the input field
        console.log(e.target.id, e.target.value)
        this.setState({
            // account for all inputs
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
        // in holidays app, this was: 
        // fetch('http://localhost:3003/holidays', {

        fetch('http://localhost:3000/new', {
            method: 'POST',
            body: JSON.stringify({[e.target.id]: e.target.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // if we can fetch the data from this route 
        .then (res => res.json())
        .then (resJson => {
            // see what data we're getting back
            console.log('New Exercise Form: ', resJson)
            this.setState({
                // set the input fields back to empty string
                [e.target.id]: ''
            }) 
        })
    }
    render() {
     
        return (
            <>
                <h1>New Exercise</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* id = has to match key in this.state*/}
                    <input
                        id='exerciseName'
                        type='text'
                        value={this.state.exerciseName}
                        onChange={this.handleChange}
                        placeholder='Exercise Name'>
                    </input>
                    <input
                        id='exerciseDescription'
                        type='text'
                        value={this.state.exerciseDescription}
                        onChange={this.handleChange}
                        placeholder='Description'>
                    </input>
                    <input
                        id='muscleGroup'
                        type='text'
                        value={this.state.muscleGroup}
                        onChange={this.handleChange}
                        placeholder='Muscle Group'>
                    </input>
                    <input
                        id='exerciseImageURL'
                        type='text'
                        value={this.state.exerciseImageURL}
                        onChange={this.handleChange}
                        placeholder='Image URL'>
                    </input>

                    {/* submit button */}
                    <input 
                        type='submit'
                        value='Add New Exercise'
                    />
                </form>
            
            </>
        )
    }
}

export default NewExercise