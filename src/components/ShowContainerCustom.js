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
                <h1 className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>{this.props.exerciseName}
                </h1>
            </div>
        )
    }
}

export default ShowContainerCustom