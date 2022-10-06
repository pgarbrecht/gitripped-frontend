import React, { Component } from 'react'
import { Link } from "react-router-dom";

class ApiExerciseTile extends Component {
    render(){
        let muscle = ''
        return (
            <div id="tile" className='border-black border-2 rounded-md bg-white p-2 lg:h-44 md:h-40 sm:h-38 h-38 lg:w-44 md:w-40 sm:w-38 w-38'>
                <p className='font-bold'>{this.props.exerciseName}</p>
                {
                    this.props.categoryArray.forEach(
                        category => {
                            if(category.id.toString() === this.props.category.toString()) {
                                // console.log(category.name)
                                muscle = category.name
                            }
                        } 
                    )
                }
                <p>{muscle}</p>
                <p className='truncate' >{this.props.exerciseDescription.replace(/<[^>]+>/g, '')}</p>
                {/* <p><a href={`/showapi/${this.props.id}`} className='underline'>View More</a></p> */}
                <Link to ={`/showapi?id=${this.props.id}`} 
                // exercisetoshow={this.props.exercise}
                // exerciseid={this.props.id}
                >
                <p className='pr-4'>View More</p>
                </Link>
            </div>
        )
    }
}

export default ApiExerciseTile