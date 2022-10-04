import React, { Component } from 'react'

class ApiExerciseTile extends Component {
    render(){
        let muscle = ''
        return (
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 lg:h-44 md:h-36 sm:h-32 h-32 lg:w-44 md:w-36 sm:w-32 w-32'>
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
                <p><a href='#' className='underline'>View More</a></p>
            </div>
        )
    }
}

export default ApiExerciseTile