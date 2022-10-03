import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditExerciseForm from './EditExerciseForm'

// for now, you need to go to http://localhost:3000/edit to get to this page. once edit button is done, we will link this page to it. 


// 10-02-2022
// 1. Need to have access to exercise's id
// That way, we can access all the other details of the exercise and change it
// this.props.exerciseToUpdate --> object of exercise we want to edit passed down from App.js

class EditExercise extends Component {

    handleChange = () => {
        console.log('in handleChange function')
    }
    handleEditExercise = (e) => {
        e.preventDefault()
        console.log('in handleEditExercise function', e.target.id, ':' , e.target.value)
    }

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
                <EditExerciseForm handleEditExercise={this.handleEditExercise} handleChange = {this.handleChange}/>
            </div>
        )
    }
}

export default EditExercise