import React from 'react'

class UpdateWorkout extends React.Component{
    constructor(props){
        super(props)

    }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>

                                    <fieldset>

                                        <div id="imageContainer">
                                            <img id="addWorkoutImage" src={Picture}></img>
                                        </div>

                                        <legend>Add WorkOut</legend>

                                            <label htmlFor="exercise_name"></label>
                                            <input className="addworkout" placeholder="Name of Exercise" value={this.state.exercise_name}
                                            onChange={this.handleChange} type="text" id="exercise_name"></input><br/>

                                            <label htmlFor="target_sets"></label>
                                            <input value={this.state.target_sets} onChange={this.handleChange} className="addworkout" placeholder="Target Sets" type="number" id="target_sets"></input><br/>

                                            <label htmlFor="target_reps"></label>
                                            <input value={this.state.target_reps} onChange={this.handleChange} className="addworkout" placeholder="Target Reps" type="number" id="target_reps"></input><br/>

                                            <label htmlFor="target_weight"></label>
                                            <input value={this.state.target_weight} onChange={this.handleChange} className="addworkout" placeholder="Target Weight" type="number" id="target_weight"></input><br/>

                                            <label htmlFor="target_body_part"></label>
                                            <input value={this.state.target_body_part} className="addworkout" placeholder="Target Body Part" type="text" id="target_body_part"></input><br/>

                                            <input className="addworkout" type="submit" id="submit" value="SUBMIT WORKOUT" />

                                    </fieldset>
                                </form>
                                </div>
            )
            }    

        }
    