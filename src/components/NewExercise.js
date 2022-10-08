import React, { Component } from 'react'
import BackBtn from './BackBtn'

class NewExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            exerciseImage: '',
            muscles: '', 
            notes: '',
        }
    }

    // handleChange method
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
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
            this.setState({
                name: '',
                description: '',
                exerciseImage: '',
                muscles: '',
                notes: '',
            }) 
            // this isn't working either
            window.location.href=`http://localhost:3000`
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return (
            <div className='
                bg-[#353535]
                min-h-screen
                flex
                flex-col
                justify-start
                items-center
                box-border
            '>
                {/* PAGE CONTENT BELOW THIS ============================================================ */}
                <div className='w-full max-w-[1000px]'>

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
                        <select
                            id='muscles'
                            type='text'
                            // value={this.state.muscles}
                            onChange={this.handleChange}
                            placeholder='Muscle Group'
                            className='border rounded p-1.5 my-1'>
                                <option value="none" selected disabled hidden>Select a Category</option>
                                <option value='Abs'>Abs</option>
                                <option value='Arms'>Arms</option>
                                <option value='Back'>Back</option>
                                <option value='Calves'>Calves</option>
                                <option value='Chest'>Chest</option>
                                <option value='Legs'>Legs</option>
                                <option value='Shoulders'>Shoulders</option>
                        </select>
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
            </div>
        )
    }
}

export default NewExercise