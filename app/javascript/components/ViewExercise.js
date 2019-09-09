import React from 'react'
import Header from './Header.js'
import CreateExercise from './CreateExercise.js'
import Picture from '../../assets/images/workoutPlaceholder.png'
import Weight from '../../assets/images/dumbbell.png'

class ViewExercise extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                    <img src={Picture}></img>
                    <div className = "tile">
                        <ul>
                            <li>{this.props.postData.exercise_name}</li>
                            <li className="info">Sets: {this.props.postData.target_sets}</li>
                            <li className="info">Reps: {this.props.postData.target_reps}</li>
                            <li className="info">Weight: {this.props.postData.target_weight} lbs </li>
                        </ul>

                        <ul>
                          <li className="editDelete options" onClick={() => {this.props.handleView('updateExercise', this.props.postData)}}>Edit</li>
                          <li className="editDelete options" id="delete" onClick={()=> {this.props.handleDelete(this.props.postData.exercise_id)}}>Delete</li>
                        </ul>
                    </div>

                    {this.props.view.pageTitle === 'updateExercise'
                ? <UpdateExercise 
                /> : ''}
            </div>

        )
    }
}


export default ViewExercise
// <div id="viewWorkoutContainer">
// <div id="tileContainer">
// </div>
// </div>
