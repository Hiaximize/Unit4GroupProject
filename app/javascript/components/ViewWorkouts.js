import React from 'react'
import Header from './Header.js'
import CreateWorkout from './CreateWorkout.js'
import weight from '../../assets/images/weight.png'

// const weightHeightWidth = {"height": "40px", "width": "40px"}

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            weightHeightWidth: {
                "height": "40px",
                "width": "40px",
            }
        }
    }
    render(){
        return(
            <div>
                    < div className = "swing-in-top-fwd tile" >
                        <ul>
                            <li className="info">{this.props.postData.exercise_name}</li>
                            <li className="info">Sets: {this.props.postData.target_sets}</li>
                            <li className="info">Reps: {this.props.postData.target_reps}</li>
                           <img style={this.state.weightHeightWidth} src={weight}></img> <li className="info">Weight: {this.props.postData.target_weight} lbs </li>
                            <li className="info">Target Body Part: {this.props.postData.target_body_part} </li>
                        </ul>

                        <ul>
                          <li className="editDelete options" onClick={() => {this.props.handleView('updateWorkout', this.props.postData)}}>Edit</li>
                          <li className="editDelete options" id="delete" onClick={()=> {this.props.handleDelete(this.props.postData.exercise_id)}}>Delete</li>
                        </ul>
                    </div>

                    {this.props.view.pageTitle === 'updateWorkout'
                ? <UpdateWorkout
                /> : ''}
            </div>

        )
    }
}


export default ViewWorkouts
// <div id="viewWorkoutContainer">
// <div id="tileContainer">
// </div>
// </div>
