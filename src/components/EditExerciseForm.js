import React, { Component } from 'react'


class EditExerciseForm extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        console.log(e.target.defaultValue)
        console.log(e.target.id)
        // need to SAVE the updated changes 
        // would we use .setState if this page doesn't have state? 
        // this.exerciseToEdit.setState({
        //         // account for all inputs
        //         [e.target.id]: e.target.defaultValue
        //     })
        }

    render () {
        console.log(this.props, 'line 60 of edit')
        // let exerciseToEdit=''
        // console.log(this.state)
        // const temp = {...this.props.exerciseToEdit};
        // console.log('this is temp:', temp)
        return (
            <>

               
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
                <input
                    id='muscles'
                    type='text'
                    defaultValue={this.props.exerciseToEdit.muscles}
                    onChange={this.handleChange}
                    placeholder='Muscle Group'
                    className='border rounded p-1.5 my-1'>
                </input>
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
                    defaultValue='Update Exercise'
                    className='bg-[#ABC8CA] p-2 m-2 rounded cursor-pointer'
                />
            </form>
            </>
        )
    }
}

export default EditExerciseForm