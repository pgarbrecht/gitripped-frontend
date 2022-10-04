import React, { Component } from 'react'

class ApiExerciseTile extends Component {
    render(){
        let muscle = ''
        return (
            <div id="tile" className='border-black border-2 rounded-md '>
                <p>{this.props.exerciseName}</p>
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
                <p>Muscle Group: {muscle}</p>
                </div>
        )
    }
}

export default ApiExerciseTile