import React, { Component } from 'react'

class Tile extends Component {
    render(){
        let muscle = ''
        return (
            <div className="tile-container">
                <p>{this.props.exerciseName}</p>
                {
                    this.props.categoryArray.forEach(
                        category => {
                            if(category.id === this.props.category) {
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

export default Tile