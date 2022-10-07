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

class CustomExerciseTile extends Component {

    getMuscleIcon = () => { 
        if (this.props.muscles === 'Abs') {
            return(
                <img src={Abs} alt='abs' className='w-[44px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Arms') {
            return(
                <img src={Arms} alt='arms' className='w-[48px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Back') {
            return(
                <img src={Back} alt='back' className='w-[48px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Calves') {
            return(
                <img src={Calves} alt='calves' className='w-[48px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Chest') {
            return(
                <img src={Chest} alt='chest' className='w-[56px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Legs') {
            return(
                <img src={Legs} alt='legs' className='w-[48px] my-2 mr-2'/>
            )
        } else if (this.props.muscles === 'Shoulders') {
            return(
                <img src={Shoulders} alt='shoulders' className='w-[48px] my-2 mr-2'/>
            )
        }
    }
    
    render(){

        return (
            <div className='flex flex-col relative'>
                {/* lg:h-44 md:h-36 sm:h-32 h-32 lg:w-44 md:w-36 sm:w-32 */}
                <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden'>

                <div className='flex justify-between items-start'>
                    <div className='flex flex-col'>
                         <p className='font-bold'>{this.props.name}</p>
                         <p className='italic text-sm'>{this.props.muscles}</p>
                    </div>
                   
                    {/* display muscle icon */}
                    <div className='flex items-center justify-center'> 
                        {this.getMuscleIcon()}
                    </div>
                </div>

                <div className='my-4'></div>
                <p className='truncate text-sm'>{this.props.description}</p>
                {/* <p><a href='/exercises/' className='underline'>View More</a></p> */}

                <Link to ={`/showcustom?id=${this.props.id}`}>
                    <p className='pr-4 underline text-[#616161] text-sm absolute bottom-2'>
                        View More
                    </p>
                </Link>
                </div>
            </div>
        )
    }

}

export default CustomExerciseTile