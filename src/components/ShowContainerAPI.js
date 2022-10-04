import React, { Component } from 'react'

class ShowContainerAPI extends Component {
    render(){
        let muscle = ''
        return (
            <div>
                {/* {console.log('test 9')} */}
                <h1>{this.props.exerciseName}
                {/* {console.log(this.props.exerciseName, 'line 11, showcontainerapi')} */}
                {/* c-log displays the exercise name */}
                </h1>
            <div>
                <h2>Description: {this.props.exerciseDescription}</h2>
                    {/* {console.log(this.props.categoryArray, 'line 14, categoryarray')} */}
                        {/* this logs an array of objects. The objects are muscle groups. */}
                    {this.props.categoryArray.forEach(category => {
                        // {console.log(this.props.category, 'line 20')}
                        //     console.log(category.name, 'log: category.name, line 21')
                        //     //19 is logging every muscle group.
                        //     console.log(category.id, 'log: id, line 23')
                            if(category.id.toString() === this.props.category.toString()){
                                // console.log(category.id, 'log: category.id from forEach, line 25')
                                muscle = category.name
                            }
                        } 
                    )
                    }
                <p> Muscle Groups: {muscle}</p>
            </div>
        </div>
        )
    }
}

export default ShowContainerAPI