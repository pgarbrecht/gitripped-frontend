import React, { Component } from 'react'


class EditExerciseForm extends Component {

    render () {
        return (
            <form onSubmit={this.props.handleEditExercise} className='
                flex 
                flex-col 
                w-4/5 
                p-4 
                max-w-[400px] 
                bg-[#ffffff] 
                rounded 
                mx-8
            '>
                <input
                    id='name'
                    type='text'
                    // value={this.props.exercises} // need to change this to the current value. passed down as a prop?
                    onChange={this.props.handleChange}
                    placeholder='Exercise Name'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                        id='description'
                        type='text'
                        // value={this.state.description}
                        onChange={this.props.handleChange}
                        placeholder='Description'
                        className='border rounded p-1.5 my-1'>
                    </input> 
                    <input
                        id='exerciseImage'
                        type='text'
                        // value={this.state.exerciseImage}
                        onChange={this.props.handleChange}
                        placeholder='Image URL'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='muscles'
                        type='text'
                        // value={this.state.muscles}
                        onChange={this.props.handleChange}
                        placeholder='Muscle Group'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='notes'
                        type='text'
                        // value={this.state.notes}
                        onChange={this.props.handleChange}
                        placeholder='Notes'
                        className='border rounded p-1.5 my-1'>
                    </input>

                    {/* submit button */}
                    <input 
                        type='submit'
                        value='Update Exercise'
                        className='bg-[#ABC8CA] p-2 m-2 rounded cursor-pointer'
                    />
            </form>
        )
    }
}

export default EditExerciseForm