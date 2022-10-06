import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditExerciseForm from './EditExerciseForm'

class EditExercise extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        // const editExerciseId = window.location.search.slice(4)
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
                <BackBtn />

                <h1 className='text-[#FFD056] font-bold text-4xl my-8 mx-8'>
                    Edit Exercise
                </h1>

                {/* EditExerciseForm.js component */}
                <EditExerciseForm 
                // editExerciseId={editExerciseId} 
                customExercises={this.props.customExercises} handleEditExercise={this.props.handleEditExercise} exerciseToEdit={this.props.exerciseToEdit}/>
            </div>
        )
    }
}

export default EditExercise