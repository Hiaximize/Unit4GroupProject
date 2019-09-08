import React from 'react'
import Picture from '../../assets/images/workoutPlaceholder.png'

class Splash extends React.Component{
    constructor(props){
        super(props)
        // this.handleView = this.handleView.bind(this)
    }


    handleView(view){
        console.log("handling view")
         this.props.handleView(view)
            //  let fileName = ''
            //  switch (view, fileName) {

            //      case 'home':
            //          fileName = 'Splash.js'
            //          break

            //      case 'createWorkout':
            //          filename = 'CreateWorkout.js'
            //          console.log("inside workout switch")
            //          break

            //      case 'updateWorkout':
            //          fileName = 'UpdateWorkout.js'
            //          break

            //      case 'viewWorkouts':
            //          fileName = 'ViewWorkouts.js'
            //          break

            //      default:
            //          console.log("we are in default")
            //          break
            //  }
          }

    render(){
        return (
          <div id="splashContainer">
            <div id="mainImage">
                <img id="memeImage" src={Picture} />
            </div>
            <div id="splashButtonsContainer">
              <li onClick={()=>{this.props.handleView('createWorkout')}} className="splashButtons" id="createWorkoutButton"> Create Workout </li>
              <li onClick={()=>{this.props.handleView('viewWorkouts')}} className="splashButtons" id="goToWorkoutButton">Go to Workouts </li>
            </div>
          </div>
        )
    }
}

export default Splash
