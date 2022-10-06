import React, { Component } from 'react'

class ShowContainerAPI extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        let apiExerciseToShow = {
            id: this.props.id,
            name: this.props.exerciseName,
            description: this.props.exerciseDescription,
            exerciseImage: this.props.exerciseImage,
            muscles: this.props.category,
        }
        this.props.passApiData(apiExerciseToShow)
    }

    render(){
        let muscle = ''
        // const queryString = window.location.search.slice(4);
        // console.log("queryString", queryString);
        return (
            <div className='
            bg-[#353535]
            min-h-screen
            flex
            flex-col
            justify-start
            items-start
            box-border
            pb-16
            '>
                {/* {console.log('test 9')} */}
                <h1 className='
                    text-[#FFD056] 
                    font-bold 
                    text-4xl 
                    my-8 
                    mx-8
                '>{this.props.exerciseName}
                {/* {console.log(this.props.exerciseName, 'line 11, showcontainerapi')} */}
                {/* c-log displays the exercise name */}
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

                        {/* {console.log(this.props.categoryArray, 'line 14, categoryarray')} */}
                            {/* this logs an array of objects. The objects are muscle groups. */}
                        {this.props.categoryArray.forEach(category => {
                            // {console.log(this.props.category, 'line 20')}
                            //     console.log(category.name, 'log: category.name, line 21')
                            //     //19 is logging every muscle group.
                            //     console.log(category.id, 'log: id, line 23')
                                if(category.id.toString() === this.props.category.toString()){
                                    // console.log(category.id, 'log: category.id from forEach, line 25')
                                    muscle = category.name
                                }
                            } 
                        )
                        }
                    <h2 className='
                        font-bold
                        text-xl
                        '> 
                        Muscle Groups: </h2>
                    <p>{muscle}</p>

                    {/* spacer =============================================== */}
                    <div className='h-4'></div>

                </div>
            </div>
        )
    }
}

export default ShowContainerAPI