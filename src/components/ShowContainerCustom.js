import React, { Component } from 'react'

class ShowContainerCustom extends Component {
    render(){
        let muscle = ''
        console.log(this.props.category, 'line 6 of showcontainercustom')
        console.log(this.props.exerciseName, 'line 7 of showcontainercustom')
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
             <a href={`/edit?id=${this.props.id}`}>Edit</a>
                <h1 className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>{this.props.exerciseName}
                </h1>
            <div>
                <h2>Description: {this.props.exerciseDescription}
                </h2>
                    {this.props.categoryArray.forEach(category => {
                            if(category.name == this.props.category.toString()){
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

export default ShowContainerCustom