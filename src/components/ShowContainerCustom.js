import React, { Component } from 'react'
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
            items-center
            box-border
            pb-16
            '>
                <div className='w-full max-w-[1000px]'>

                    <h1 className='
                        text-[#FFD056] 
                        font-bold 
                        text-4xl 
                        my-8 
                        mx-8
                        '>{this.props.exerciseName}
                    </h1>

                    {/* white container */}
                    <div className="
                        flex
                        flex-col
                        items-start
                        bg-white
                        mx-8
                        rounded
                        p-4
                        w-4/5
                        max-w-[400px]
                        ">
                    
                        <div className='
                            flex 
                            justify-between
                            w-full
                            '>

                            <h2 className='
                                font-bold
                                text-xl
                                '>
                                Description: 
                            </h2>

                            {/* pass id down to edit btn component */}
                            <EditBtn id = {this.props.id}/>
                        </div>

                        {/* spacer =============================================== */}
                        <div className='h-4'></div>

                        <p>
                            {this.props.exerciseDescription}
                        </p>

                        {/* spacer =============================================== */}
                        <div className='h-4'></div>

                        <div>
                            <img src={this.props.exerciseImage} alt={this.props.exerciseImage}/>
                        </div>
                        {/* determine which muscle category */}
                        {this.props.categoryArray.forEach(category => {
                            if(category.name == this.props.category.toString()){
                                muscle = category.name
                            }})
                        }

                        {/* spacer =============================================== */}
                        <div className='h-4'></div>
                        
                        <h2 className='
                            font-bold
                            text-xl
                            '>
                            Muscle Groups: 
                        </h2>
                        <p> {muscle}</p>


                        {/* spacer =============================================== */}
                        <div className='h-4'></div>
                        <button onClick={()=>this.props.handleDeleteExercise(this.props.id)}>
                            <span className="material-symbols-outlined">
                            delete
                            </span>
                        </button>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default ShowContainerCustom