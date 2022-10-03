import React, { Component } from 'react'

class ShowContainerAPI extends Component {
    render(){
        let muscle = ''
        return (
            <div>
            <p>{this.props.exerciseName}</p>
            {this.props.categoryArray.forEach(
                category => {
                    if (category.id === this.props.category){
                        console.log(category.name, 'category.name, line 37')
                        muscle = category.name
                    }
                }
            )
            }
            <p> Muscle group: {muscle}</p>
        </div>
        )
    }
}

export default ShowContainerAPI