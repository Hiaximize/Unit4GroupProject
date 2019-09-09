import React from 'react'
import Picture from '../../assets/images/workoutPlaceholder.png'



class UpdateWorkout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          exercise_name: '',
          target_weight: '',
          target_sets: '',
          target_reps: '',
          target_body_part: '',
          exercise_id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleUpdate(this.state)
    }
    handleChange = (event) => {
      this.setState({
          [event.target.id] : event.target.value
        })
    }

    componentDidMount() {
      this.setState({
        exercise_name: this.props.formInputs.exercise_name,
        target_weight: this.props.formInputs.target_weight,
        target_sets: this.props.formInputs.target_sets,
        target_reps: this.props.formInputs.target_reps,
        target_body_part: this.props.formInputs.target_body_part,
        exercise_id: this.props.formInputs.exercise_id
      })
    }
        render(){
            return(
                <div id="updateExerciseFormContainer">
                <form onSubmit={this.handleSubmit}>

                                  <fieldset>

                                      <div id="imageContainer">
                                          {/* <img id="addWorkoutImage" src={Picture}></img> */}
                                      </div>

                                      <legend>Update Exercise</legend>

                                          <label id="exercise_name" className="updateLabel" htmlFor="exercise_name">Exercise Name</label>
                                          <input className="addworkout"
                                         type="text" id="exercise_name" onChange={this.handleChange} 
                                        //  making change here from props to state
                                         value={this.state.exercise_name}></input><br/>

                                          <label className="updateLabel" htmlFor="target_sets">Target Sets</label>
                                          <input className="addworkout" placeholder="Target Sets" onChange={this.handleChange} value={this.state.target_sets} type="number" id="target_sets"></input><br />

                                          <label className="updateLabel" htmlFor="target_reps">Target Reps</label>
                                          <input className="addworkout" placeholder="Target Reps" onChange={this.handleChange} value={this.state.target_reps} type="number" id="target_reps"></input><br />

                                          <label className="updateLabel" htmlFor="target_weight">Target Weight</label>
                                          <input className="addworkout" placeholder="Target Weight" type="number" id="target_weight" onChange={this.handleChange} value={this.state.target_weight}></input><br />

                                          <label className="updateLabel" htmlFor="target_body_part">Target Body Part</label>
                                          <input  className="addworkout" placeholder="Target Body Part" type="text" id="target_body_part" onChange={this.handleChange} value={this.state.target_body_part} ></input><br/>

                                          <input className="addworkout" type="submit" id="submit" value="Update Exercise" />

                                  </fieldset>
                              </form>

                </div>
              )
            }
        }

export default UpdateWorkout
