import React, { Component } from 'react'
import { Link } from "react-router-dom";

// import all muscle group icons
import Abs from "../assets/Abs.png"
import Arms from "../assets/Arms.png"
import Back from "../assets/Back.png"
import Calves from "../assets/Calves.png"
import Chest from "../assets/Chest.png"
import Legs from "../assets/Legs.png"
import Shoulders from "../assets/Shoulders.png"

class ApiExerciseTile extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         muscle: ''
    //     }
    // }

   
    
    render(){
        let muscle = '' 
    const getMuscleIcon = (muscle) => { 
        console.log(muscle)
        if (muscle === 'Abs') {
            return(
                <img src={Abs} alt='abs' className='w-[44px] my-2 mr-2'/>
            )
        } else if (muscle === 'Arms') {
            return(
                <img src={Arms} alt='arms' className='w-[48px] my-2 mr-2'/>
            )
        } else if (muscle === 'Back') {
            return(
                <img src={Back} alt='back' className='w-[48px] my-2 mr-2'/>
            )
        } else if (muscle === 'Calves') {
            return(
                <img src={Calves} alt='calves' className='w-[48px] my-2 mr-2'/>
            )
        } else if (muscle === 'Chest') {
            return(
                <img src={Chest} alt='chest' className='w-[56px] my-2 mr-2'/>
            )
        } else if (muscle === 'Legs') {
            return(
                <img src={Legs} alt='legs' className='w-[48px] my-2 mr-2'/>
            )
        } else if (muscle === 'Shoulders') {
            return(
                <img src={Shoulders} alt='shoulders' className='w-[48px] my-2 mr-2 ml-2'/>
            )
        }
    }
        return (
            <div className='flex flex-col relative'>
                <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden'>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='md:whitespace-normal truncate font-bold'>{this.props.exerciseName}</p>
                            <p>{muscle}</p>

                        </div>
                        {
                            this.props.categoryArray.forEach(
                                category => {
                                    if(category.id.toString() === this.props.category.toString()) {
                                        // console.log(category.name)
                                        // this.setState({
                                            muscle= category.name
                                        // })
                                    }
                                } 
                            )
                        }
                        {/* display muscle icon */}
                        <div className='flex items-center justify-center'> 
                            {getMuscleIcon(muscle)}
                        </div>
                    </div>
                    
                    <p className='truncate text-sm' >{this.props.exerciseDescription.replace(/<[^>]+>/g, '')}</p>
                    {/* <p><a href={`/showapi/${this.props.id}`} className='underline'>View More</a></p> */}
                    
                    <Link to ={`/showapi?id=${this.props.id}`} 
                    // exercisetoshow={this.props.exercise}
                    // exerciseid={this.props.id}
                    >

                    <p className='pr-4 underline text-[#616161] text-sm absolute bottom-2'>View More</p>

                    </Link>
                </div>
            </div>
        )
    }
}

export default ApiExerciseTile