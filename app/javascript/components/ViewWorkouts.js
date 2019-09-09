import React from 'react'
import Header from './Header.js'
import CreateWorkout from './CreateWorkout.js'
import weight from '../../assets/images/weight.png'

const weightHeightWidth = {"height": "40px", "width": "40px"}

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                    <div className = "tile swing-in-top-fwd">
                        <ul>
                            <li id="exercise_name_info" className="info">{this.props.postData.exercise_name}</li>
                            <li id="target_sets_info" className="info">Sets: {this.props.postData.target_sets}</li>
                            <li id="target_reps_info" className="info">Reps: {this.props.postData.target_reps}</li>
                          
                            <li id="target_weight_info" className="info">Weight: {this.props.postData.target_weight} lbs </li>
                            <li id="target_body_part_info" className="info">Target Body Part: {this.props.postData.target_body_part} </li>
                        </ul>

                    <div id="buttonContainer">
                        <div id="editButtonContainer">
                          <li id="editButton" className="editDelete options" onClick={() => {this.props.handleView('updateWorkout', this.props.postData)}}>Edit</li>
                        </div>

                        <div id="deleteButtonContainer">
                          <li id="deleteButton" className="editDelete options" onClick={()=> {this.props.handleDelete(this.props.postData.exercise_id)}}>Delete</li>
                        </div>
                        </div>
                    </div>

                    {this.props.view.pageTitle === 'updateWorkout'
                ? <UpdateWorkout
                /> : ''}
            </div>

        )
    }
}


export default ViewWorkouts
