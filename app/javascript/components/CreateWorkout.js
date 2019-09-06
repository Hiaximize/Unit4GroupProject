import React from 'react'
import Main from './Main'


class CreateWorkout extends React.Component{
    constructor(props){
        super(props)
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.handleSubmit()
    }

    render(){
        return(
            <div id="addWorkoutContainer">

                <div id="addWorkout">
                    <form onClick={this.props.handleSubmit}>

                        <fieldset>

                             <div id="addWorkoutImage">
                                    <img src="#"></img>
                            </div>

                            <legend>Add WorkOut</legend>

                                <label htmlFor="exerciseName"></label>
                                <input className="addworkout" placeholder="Name of Exercise" type="text" id="exerciseName"></input><br/>

                                <label htmlFor="targetSets"></label>
                                <input className="addworkout" placeholder="Target Sets" type="number" id="targetSets"></input><br/>

                                <label htmlFor="targetReps"></label>
                                <input className="addworkout" placeholder="Target Reps" type="number" id="targetReps"></input><br/>

                                <label htmlFor="targetWeight"></label>
                                <input className="addworkout" placeholder="Target Weight" type="number" id="targetWeight"></input><br/>

                                <label htmlFor="targetBodyPart"></label>
                                <input className="addworkout" placeholder="Target Body Part" type="text" id="targetBodyPart"></input><br/>

                                <input className="addworkout" type="submit" id="submit" value="SUBMIT WORKOUT" />

                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }

}

export default CreateWorkout