import React, { Component } from 'react'
import BackBtn from './BackBtn';

class ShowContainerAPI extends Component {
    constructor(props) {
        super(props)
    }
    
    render(){
        let muscle = ''
        const removeTags = (str) => {
            if ((str===null) || (str===''))
                return false;
            else
                str = str.toString();
                
            // Regular expression to identify HTML tags in 
            // the input string. Replacing the identified 
            // HTML tag with a null string.
            
            return str.replace( /(<([^>]+)>)/ig, '');
        }
        // SOURCE: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/#:~:text=To%20strip%20out%20all%20the,innerText%20property%20from%20HTML%20DOM
            //We used this method to remove html tags from strings and adapted it to our own needs.

        let description = removeTags(this.props.exerciseDescription)
        
        return (
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
                <div className="
                w-full
                max-w-[1000px]
                ">
                    <BackBtn />
                    <h1
                    className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>{this.props.exerciseName}
                    </h1>
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
                         
                        <h2>Description: {description}</h2>
                            {this.props.categoryArray.forEach(category => {
                                    if(category.id.toString() === this.props.category.toString()){
                                        muscle = category.name
                                    }
                                } 
                            )
                            }
                        <p> Muscle Groups: {muscle}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowContainerAPI