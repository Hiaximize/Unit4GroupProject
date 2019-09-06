import React from 'react'
import Picture from '../../assets/images/workoutPlaceholder.png'

class Splash extends React.Component{
    render(){
        return (
          <div id="splashContainer">
            <div id="mainImage">
                <img id="memeImage" src={Picture} />
            </div>
            <div id="splashButtonsContainer">
              <input className="splashButtons" id="createWorkoutButton" type="submit" value="Create Workout" />
              <input className="splashButtons" id="goToWorkoutButton" type="submit" value="Go to Workouts" />
            </div>
          </div>
        )
    }
}

export default Splash
