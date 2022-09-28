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
    // handleSubmit = (e) 
    render() {
     
        return (
            <>
                <h1>New Exercise</h1>
                <form>
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
                </form>
            
            </>
        )
    }
}

export default NewExercise