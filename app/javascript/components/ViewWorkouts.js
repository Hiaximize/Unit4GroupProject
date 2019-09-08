import React from 'react'
import Header from './Header.js'
import CreateWorkout from './CreateWorkout.js'

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>

                    <div className="tile">
                    <ul>
                        <li>{this.props.postData.exercise_name}</li>
                        <li>Sets: {this.props.postData.target_sets}</li>
                        <li>Reps: {this.props.postData.target_reps}</li>
                        <li>Weight: {this.props.postData.target_weight}lbs </li>

                      </ul>

                        <ul>
                          <li onClick={() => {this.props.handleView('updateWorkout', this.props.postData)}}>Edit</li>
                          <li onClick={()=> {this.props.handleDelete(this.props.postData.exercise_id)}}>Delete</li>
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
