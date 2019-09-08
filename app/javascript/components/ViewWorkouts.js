import React from 'react'
import Header from './Header.js'

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>

                    <div className="tile">
                    <ul>
                        <li>{this.props.postData.exerciseName}</li>
                        <li>Sets: {this.props.postData.targetSets}</li>
                        <li>Reps: {this.props.postData.targetReps}</li>
                        <li>Weight: {this.props.postData.targetWeight}lbs </li>

                      </ul>

                        <ul>
                          <li onClick={() => {this.props.handleView('updateWorkout')}}>Edit</li>
                          <li>Delete</li>
                        </ul>
                    </div>
            </div>

        )
    }
}

export default ViewWorkouts
// <div id="viewWorkoutContainer">
// <div id="tileContainer">
// </div>
// </div>
