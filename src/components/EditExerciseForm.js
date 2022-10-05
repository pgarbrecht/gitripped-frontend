import React, { Component } from 'react'


class EditExerciseForm extends Component {

    
    // detect changes to input fields
    handleChange = (e) => {
        console.log('in handleChange function')
        
        // need to SAVE the updated changes 
        // would we use .setState if this page doesn't have state? 
        // this.setState({
            //     // account for all inputs
            //     [e.target.id]: e.target.value
            // })
        }
        
    handleEditExercise = (e) => {
        e.preventDefault()
        console.log('in handleEditExercise function')
        // fetch exercise data 
        // will be very similar to handleSubmit for adding a new exercise   
        // fetch('localhost:3003/edit/9210471923')
        //START HERE TOMORROW!
    }

    render () {
        let exerciseToEdit=''
        return (
            <>
            {this.props.customExercises.forEach(exercise => {
                if(exercise._id == this.props.editExerciseId){
                    exerciseToEdit= exercise
                }
            })}
                    <form onSubmit={this.handleEditExercise} className='
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
                    value={exerciseToEdit.name} 
                    onChange={this.handleChange}
                    placeholder='Exercise Name'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                        id='description'
                        type='text'
                        value={exerciseToEdit.description}
                        onChange={this.handleChange}
                        placeholder='Description'
                        className='border rounded p-1.5 my-1'>
                    </input> 
                    <input
                        id='exerciseImage'
                        type='text'
                        value={exerciseToEdit.exerciseImage}
                        onChange={this.handleChange}
                        placeholder='Image URL'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='muscles'
                        type='text'
                        value={exerciseToEdit.muscles}
                        onChange={this.handleChange}
                        placeholder='Muscle Group'
                        className='border rounded p-1.5 my-1'>
                    </input>
                    <input
                        id='notes'
                        type='text'
                        value={exerciseToEdit.notes}
                        onChange={this.handleChange}
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
            </>
        )
    }
}

export default EditExerciseForm