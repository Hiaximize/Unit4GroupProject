import React from 'react'
import Splash from './Splash.js'
import CreateWorkout from './CreateWorkout'


class Main extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
     handleView(view, fileName){
         this.props.handleView(view, fileName)
     }
     handleChange(){
         this.props.handleChange()
     }
     handleSubmit(event) {
         event.preventDefault()
         console.log("new workout submitted")
     }

    render(){
        return(
            <main>
                <Splash
                handleView={this.props.handleView}
                view={this.props.view}/>
                <CreateWorkout handleSubmit={this.handleSubmit}
                handleView={this.props.handleView} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </main>
        )
    }
}

export default Main
