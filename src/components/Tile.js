import React, { Component } from 'react'

class Tile extends Component {
    render(){
        // let muscle = this.props.categoryArray.find(category => category.id === this.props.category)
        // console.log(muscle)
        return (
            <div className="tile-container">
                {this.props.exerciseName}
                {this.props.categoryArray.forEach(
                    category => {
                        if(category.id == this.props.category) {
                            console.log(category.name)
                        }
                    } 
                )}
                {this.props.category}
                {/* {muscle} */}
                {/* {this.props.categoryArray[0]} */}
            </div>
        )
    }
}

export default Tile