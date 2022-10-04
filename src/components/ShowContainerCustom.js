import React, { Component } from 'react'

class ShowContainerCustom extends Component {
    render(){
        return(
            <div className='
            bg-[#353535]
            min-h-screen
            flex
            flex-col
            justify-start
            items-start
            box-border
        '>
                {this.props.exerciseName}
            </div>
        )
    }
}

export default ShowContainerCustom