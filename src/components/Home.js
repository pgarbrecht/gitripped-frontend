import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div className='flex flex-col justify-center items-center bg-black w-full h-screen'>
                <h1 className='text-white text-5xl'>Home</h1>
                <div className='grid w-3/4 h-[500px] bg-white'>
                    {/* place tile components here */}
                </div>
            </div>
        )
    }
}

export default Home