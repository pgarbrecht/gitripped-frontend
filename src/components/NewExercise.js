import React, { Component } from 'react'
import BackBtn from './BackBtn'

class NewExercise extends Component {
    // need to add state to this component 
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            exerciseImage: '',
            muscles: '', // convert to drop down
            notes: ''
        }
    }

    // handleChange method
    handleChange = (e) => {
        // capture what user is typing in the input field
        // console.log(this.state, baseURL) // confirms that values are being set to state
        this.setState({
            // account for all inputs
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state) 
        fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                exerciseImage: this.state.exerciseImage,
                muscles: this.state.muscles,
                notes: this.state.notes
            }),
        })

        // if we can fetch the data from this route, then proceed
        .then (res => { 
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })

        .then (resJson => {
            // see what data we're getting back
            // console.log('New Exercise Form: ', resJson)

            // call the handleAddExercise method created in app.js
            // resJson is also what we're passing in as exercise in app.js
            // this.props.handleAddExercise(resJson)

            this.setState({
                // set the input fields back to empty string
                name: '',
                description: '',
                exerciseImage: '',
                muscles: '',
                notes: '',
            }) 
        })
        .catch(err => (console.log(err)))
    }

    render() {
        // console.log(this.state)
        return (
            <div className='
                bg-[#353535]
                min-h-screen
                flex
                flex-col
                justify-start
                items-start
                box-border
            '>
                {/* PAGE CONTENT BELOW THIS ============================================================ */}
                <BackBtn />

                <h1 className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>
                    Add Custom Exercise
                </h1>

                {/* moving <form> to NewExerciseForm.js?? would require lots of refactoring and using props to pass data back up */}
                <form 
                    onSubmit={this.handleSubmit} 
                    className='
                        flex 
                        flex-col 
                        w-4/5 
                        p-4 
                        max-w-[400px] 
                        bg-[#ffffff] 
                        rounded 
                        mx-8
                    '>
                    {/* id = has to match key in this.state*/}
                    <input
                        id='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Exercise Name'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='description'
                        type='text'
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder='Description'
                        className='border rounded p-1.5 my-1'>
                    </input> 
                    <input
                        id='exerciseImage'
                        type='text'
                        value={this.state.exerciseImage}
                        onChange={this.handleChange}
                        placeholder='Image URL'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='muscles'
                        type='text'
                        value={this.state.muscles}
                        onChange={this.handleChange}
                        placeholder='Muscle Group'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='notes'
                        type='text'
                        value={this.state.notes}
                        onChange={this.handleChange}
                        placeholder='Notes'
                        className='border rounded p-1.5 my-1'>
                    </input>

                    {/* submit button */}
                    <input 
                        type='submit'
                        value='Add New Exercise'
                        className='bg-[#ABC8CA] p-2 m-2 rounded cursor-pointer'
                    />
                </form>
            
            </div>
        )
    }
}

export default NewExercise