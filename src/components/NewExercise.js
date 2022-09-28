import React, { Component } from 'react'

// WHAT I DID:
// 1. Add 'New' link to nav (temporarily for easier access)


class NewExercise extends Component {
    // need to add state to this component 
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            exerciseImage: '',
            muscles: '', // do we want to allow user to add more than 1?
            notes: ''
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

        fetch('http://localhost:3000/', {
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
        console.log('line 55: ', this.state)
        return (
            <>
                <h1>New Exercise</h1>
                <form onSubmit={this.handleSubmit} className='flex flex-col items-center'>
                    {/* id = has to match key in this.state*/}
                    <input
                        id='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Exercise Name'
                        className='border-2'>
                    </input>
                    <input
                        id='description'
                        type='text'
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder='Description'
                        className='border-2'>
                    </input>
                    <input
                        id='exerciseImage'
                        type='text'
                        value={this.state.exerciseImage}
                        onChange={this.handleChange}
                        placeholder='Image URL'
                        className='border-2'>
                    </input>
                    <input
                        id='muscles'
                        type='text'
                        value={this.state.muscles}
                        onChange={this.handleChange}
                        placeholder='Muscle Group'
                        className='border-2'>
                    </input>
                    <input
                        id='notes'
                        type='text'
                        value={this.state.notes}
                        onChange={this.handleChange}
                        placeholder='Notes'
                        className='border-2'>
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