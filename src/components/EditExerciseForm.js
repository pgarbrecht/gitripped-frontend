import React, { Component } from 'react'


class EditExerciseForm extends Component {
    constructor(props) {
        super(props)
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         description: '',
    //         exerciseImage: '',
    //         muscles: '',
    //         notes: '',
    //         exerciseToEdit: {},
    //     }
    // }
    // getExerciseToEdit = () => {
    //     {this.props.customExercises.forEach(exercise => {
    //         if(exercise._id == this.props.editExerciseId){
    //             // exerciseToEdit= exercise
    //             this.setState({
    //                 exerciseToEdit: exercise
    //             })
    //         }
    //     })}
    // }

    // componentDidMount() {
    //     this.getExerciseToEdit()
    // }

    handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.id)
        // need to SAVE the updated changes 
        // would we use .setState if this page doesn't have state? 
        // this.setState({
        //         // account for all inputs
        //         [e.target.id]: e.target.value
        //     })
        }

    // preventDefaultOnSubmit = (e) => {
    //     e.preventDefault()
    //     let exerciseToChange = {
    //         name: this.state.name,
    //         description: this.state.description,
    //         exerciseImage: this.state.exerciseImage,
    //         muscles: this.state.muscles,
    //         notes: this.state.notes
    //     }
    //     console.log(exerciseToChange)
    //     // this.setState({ 
    //     //     exerciseToEdit: exerciseToChange
    //     // })
    //     // console.log('lin637',this.state.exerciseToEdit)
    //     this.props.handleEditExercise(e,exerciseToChange)
    // }

    render () {
        console.log(this.props, 'line 60 of edit')
        // let exerciseToEdit=''
        // console.log(this.state)
        return (
            <>
                {/* {this.props.customExercises.forEach(exercise => {
                    if(exercise._id == this.props.editExerciseId){
                        exerciseToEdit= exercise
                    }
                })} */}
               
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
                    value={this.props.exerciseToEdit.name} 
                    onChange={this.handleChange}
                    placeholder='Exercise Name'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                    id='description'
                    type='text'
                    value={this.props.exerciseToEdit.description}
                    onChange={this.handleChange}
                    placeholder='Description'
                    className='border rounded p-1.5 my-1'>
                </input> 
                <input
                    id='exerciseImage'
                    type='text'
                    value={this.props.exerciseToEdit.exerciseImage}
                    onChange={this.handleChange}
                    placeholder='Image URL'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                    id='muscles'
                    type='text'
                    value={this.props.exerciseToEdit.muscles}
                    onChange={this.handleChange}
                    placeholder='Muscle Group'
                    className='border rounded p-1.5 my-1'>
                </input>
                <input
                    id='notes'
                    type='text'
                    value={this.props.exerciseToEdit.notes}
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