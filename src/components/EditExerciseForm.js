import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditExerciseForm extends Component {
    // need to add state to this component 
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.exerciseToEdit.name,
            description: this.props.exerciseToEdit.description,
            exerciseImage: this.props.exerciseToEdit.exerciseImage,
            muscles: this.props.exerciseToEdit.muscles, 
            notes: this.props.exerciseToEdit.notes
        }
    }

    handleChange = (e) => {
        // need to SAVE the updated changes 
        this.setState({
            // account for all inputs
            [e.target.id]: e.target.value
            // e.target.defaultValue
        })
    }
    
    handleEditExercise = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${this.props.exerciseToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                exerciseImage: this.state.exerciseImage,
                muscles: this.state.muscles,
                notes: this.state.notes
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error(res)
        })
        .then(resJson => {
            window.location.href=`http://localhost:3000/showcustom?id=${this.props.exerciseToEdit.id}`;
        })
        .catch(err => (console.log(err))) 
    }

    handleMuscleDropdown = () => {
        let options = []
        this.props.categories.forEach(category => {
            if(category.name === this.props.exerciseToEdit.muscles) {
                options.push(
                    <option value={this.props.exerciseToEdit.muscles} selected>{this.props.exerciseToEdit.muscles}</option>
                )
            } else {
                options.push(
                    <option value={category.name}>{category.name}</option>                    
                )                
            }
        })
        return options
    }

    render () {
        return (
            <>
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
                    defaultValue={this.props.exerciseToEdit.name}
                    onChange={this.handleChange}
                    placeholder='Exercise Name'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                    id='description'
                    type='text'
                    defaultValue={this.props.exerciseToEdit.description}
                    onChange={this.handleChange}
                    placeholder='Description'
                    className='border rounded p-1.5 my-1'>
                </input> 
                <input
                    id='exerciseImage'
                    type='text'
                    defaultValue={this.props.exerciseToEdit.exerciseImage}
                    onChange={this.handleChange}
                    placeholder='Image URL'
                    className='border rounded p-1.5 my-1'>
                </input>
                <select
                    id='muscles'
                    type='text'
                    onChange={this.handleChange}
                    placeholder='Muscle Group'
                    className='border rounded p-1.5 my-1'>
                    
                    {this.handleMuscleDropdown()}

                </select>
                <input
                    id='notes'
                    type='text'
                    defaultValue={this.props.exerciseToEdit.notes}
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