import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ShowContainerCustom extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let exerciseToEdit = {
            id: this.props.id,
            name: this.props.exerciseName, 
            description: this.props.exerciseDescription,
            exerciseImage: this.props.exerciseImage,
            muscles: this.props.category, 
            notes: this.props.notes
        }
        this.props.passExerciseData(exerciseToEdit)
    }
    render(){
        let muscle = ''
        let baseURL = process.env.REACT_APP_BACKEND_URL
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
            {/* {`${baseURL}/${this.props.id}`} */}
            <Link to={`/edit?id=${this.props.id}`}>
                <p>Edit</p>
            </Link>

             <button onClick={()=>this.props.handleDeleteExercise(this.props.id)}>Delete</button>

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