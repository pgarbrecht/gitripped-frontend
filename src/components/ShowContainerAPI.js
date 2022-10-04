import React, { Component } from 'react'

class ShowContainerAPI extends Component {
    render(){
        let muscle = ''
        return (
            <div>
                {console.log('test 9')}
            <p>Exercise name: {this.props.exerciseName}
            {console.log(this.props.exerciseName, 'line 11, showcontainerapi')}
            {/* c-log displays the exercise name */}
            </p>
                
            {console.log(this.props.categoryArray, 'line 14, categoryarray')}
                {/* this logs an array of objects. The objects are muscle groups. */}
            
               

            {this.props.categoryArray.forEach(category => {
                 {console.log(this.props.category, 'line 20')}
                    console.log(category.name, 'log: category.name, line 21')
                    //19 is logging every muscle group.
                    console.log(category.id, 'log: id, line 23')
                    if(category.id.toString() === this.props.category.toString()){
                        // console.log(category.id, 'log: category.id from forEach, line 25')
                        // line 21 is not logging at all. when I set the conditional statement equal to category.id, it returns shoulders for the muscle group for every exercise, even the ones not involving shoulders.
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