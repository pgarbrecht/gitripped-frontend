import React, { Component } from 'react'


class EditExerciseForm extends Component {
    
    render () {
        return (
            <form className='
                flex 
                flex-col 
                w-4/5 
                p-4 
                max-w-[400px] 
                bg-[#ffffff] 
                rounded 
                mx-8
            '>

                {/* NAME INPUT FIELD */}
                <input
                    id='name'
                    type='text'
                    // value={this.state.name} need to change this to the current value. passed down as a prop?
                    onChange={this.handleChange}
                    placeholder='Exercise Name'
                    className='border rounded p-1.5 my-1'>
                </input>
            </form>
        )
    }
}

export default EditExerciseForm