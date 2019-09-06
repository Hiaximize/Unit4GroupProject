import React from 'react'
import Splash from './Splash.js'
import CreateWorkout from './CreateWorkout'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
     handleSubmit(event) {
         event.preventDefault()
         console.log("new workout submitted")
     }

    render(){
        return(
            <main>
                {/* <Splash /> */}
                <CreateWorkout handleSubmit={this.handleSubmit} />
            </main>
        )
    }
}

export default Main