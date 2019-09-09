import React from 'react'
import Picture from '../../assets/images/workoutPlaceholder.png'


class UpdateExercise extends React.Component{
    constructor(props){
        super(props)


    }
    componentDidMount() {
      this.setState({
        name: this.props.formInputs.name,
        image: this.props.formInputs.image,
        body: this.props.formInputs.body,
        id: this.props.formInputs.id
      })
    }
        render(){
            return(
                <div>
                <form onSubmit={this.handleSubmit}>

                                  <fieldset>

                                    <div id="updateExerciseFormContainer">
                                      
                                          
                                      
                                      
                                      <legend>Update Exercise</legend>
                                        <img id="addWorkoutImage" src={Picture}></img>
                                          <label htmlFor="exercise_name"></label>
                                          <input className="addworkout" value={this.props.exercise_name} placeholder="Name of Exercise"
                                         type="text" id="exercise_name"></input><br/>

                                          <label htmlFor="target_sets"></label>
                                          <input value={this.props.target_sets}className="addworkout" placeholder="Target Sets" type="number" id="target_sets"></input><br/>

                                          <label htmlFor="target_reps"></label>
                                          <input value={this.props.target_reps} className="addworkout" placeholder="Target Reps" type="number" id="target_reps"></input><br/>

                                          <label htmlFor="target_weight"></label>
                                          <input value={this.props.target_weight} className="addworkout" placeholder="Target Weight" type="number" id="target_weight"></input><br/>

                                          <label htmlFor="target_body_part"></label>
                                          <input  value={this.props.target_body_part} className="addworkout" placeholder="Target Body Part" type="text" id="target_body_part"></input><br/>

                                          <input className="addworkout" type="submit" id="submit" value="SUBMIT WORKOUT" />
                                      
                                    </div>
                                  </fieldset>
                              </form>

                </div>
              )
            }
        }

export default UpdateExercise
