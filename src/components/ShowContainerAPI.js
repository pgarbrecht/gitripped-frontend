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
                //Our analysis:
                    //we're using the above regular expression to replace our HTML tags with nothing using an empty string.
                        //Source for understanding: https://stackoverflow.com/questions/9444876/what-is-replace-ig-doing
                    //the parentheses surround what we're looking for with the replace method:
                        //< = replaces the left tags with nothing.
                        // [^>]=replaces the tag letter (p, h1, etc.) immediately after the opening left tag
                        // + = the '+' symbol is a repetition operator which executes the method multiple times
                            //"repetition operator" source: https://stackoverflow.com/questions/3850217/what-is-the-meaning-of-in-a-regex
                        // > = replaces the right tag with nothing
                        // /ig = 'i' makes the regular expression case insensitive and 'g' means that all occurrences of tags that the method finds on the rendered page should be replaced.
        }
        // SOURCE for stripping HTML tags with regex: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/#:~:text=To%20strip%20out%20all%20the,innerText%20property%20from%20HTML%20DOM
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
                        <h2 className='
                            font-bold
                            text-xl
                            mb-2
                            '>
                            Description: 
                        </h2>

                        <p>{description}</p>
                            {this.props.categoryArray.forEach(category => {
                                    if(category.id.toString() === this.props.category.toString()){
                                        muscle = category.name
                                    }}
                                ) 
                            }

                        {/* spacer =============================================== */}
                        <div className='h-4'></div>

                        <h2 className='
                            font-bold
                            text-xl
                            mb-2
                            '>
                            Muscle Groups: 
                        </h2>
 
                        <p>{muscle}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowContainerAPI