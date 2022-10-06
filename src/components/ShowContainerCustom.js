import React, { Component } from 'react'
import { Link } from "react-router-dom"
import BackBtn from './BackBtn'
// importing edit component here
import EditBtn from './EditBtn'

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
                <BackBtn />

                <h1 className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>{this.props.exerciseName}
                </h1>

                <div className="
                    bg-white
                    mx-8
                    rounded
                    p-4
                ">
                    {/* <Link to={`/edit?id=${this.props.id}`}>
                        <p>
                            <span class="material-symbols-outlined">
                            edit_square
                            </span>
                        </p>
                    </Link> */}

                    {/* this is where we would use edit component instead -- but crashes page when you comment out */}
                    <EditBtn id = {this.props.id}/>

                    <button onClick={()=>this.props.handleDeleteExercise(this.props.id)}>
                    <span class="material-symbols-outlined">
                    delete
                    </span>
                    </button>

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