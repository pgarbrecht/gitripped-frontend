import React, { Component } from 'react'

class ApiExerciseTile extends Component {
    render(){
        let muscle = ''
        return (
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44'>
                <p className='font-bold'>{this.props.exerciseName}</p>
                {
                    this.props.categoryArray.forEach(
                        category => {
                            if(category.id.toString() === this.props.category.toString()) {
                                console.log(category.name)
                                muscle = category.name
                            }
                        } 
                    )
                }
                <p>{muscle}</p>
                <p className='truncate' >{this.props.exerciseDescription.replace(/<[^>]+>/g, '')}</p>
            </div>
        )
    }
}

export default ApiExerciseTile