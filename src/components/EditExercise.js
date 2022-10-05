import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditExerciseForm from './EditExerciseForm'

// for now, you need to go to http://localhost:3000/edit to get to this page. once edit button is done, we will link this page to it. 

/* 

10-02-2022
1. Need to have access to exercise's id --> pass that down as prop to edit form
That way, we can access all the other details of the exercise and change it

FROM SHOW PAGE --> pass exercise id to this page
*/

class EditExercise extends Component {

    render () {
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
                <EditExerciseForm customExercises = {this.props.customExercises}/>

            </div>
        )
    }
}

export default EditExercise