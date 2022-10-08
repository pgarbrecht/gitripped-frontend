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
    
    render(){
        let muscle = '' 
        const getMuscleIcon = (muscle) => { 
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
                {
                    this.props.categoryArray.forEach(
                        category => {
                            if(category.id.toString() === this.props.category.toString()) {                               
                                muscle= category.name
                            }
                        } 
                    )
                }
                <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden'>

                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col w-full'>
                            <p className='font-bold'>{this.props.exerciseName}</p>
                            <p className='italic'>{muscle}</p>
                        </div>
                        
                        {/* display muscle icon */}
                        <div className='flex items-center justify-center'> 
                            {getMuscleIcon(muscle)}
                        </div>
                    </div>
                    
                    <div className='my-4'></div>

                    <p className='truncate text-sm'>
                        {this.props.exerciseDescription.replace(/<[^>]+>/g, '')}
                    </p>
                
                    <Link to ={`/showapi?id=${this.props.id}`}>
                        <p className='pr-4 underline text-[#616161] text-sm absolute bottom-2'>
                            View More
                        </p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ApiExerciseTile