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
    render() {
     
        return (
            <>
                <h1>New Exercise</h1>
                <form>
                    {/* id = has to match key in this.state*/}
                    <input
                        id='exerciseName'
                        type='text'
                        value={this.state.name}
                        placeholder='Exercise Name'>
                    </input>
                </form>
            
            </>
        )
    }
}

export default NewExercise