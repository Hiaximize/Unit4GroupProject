import React from 'react'
// import Main from './Main'
import Picture from '../../assets/images/workoutPlaceholder.png'


class CreateWorkout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          exerciseName: '',
          targetWeight: '',
          targetSets: '',
          targetReps: '',
          exerciseId: null
        }
    }

    handleChange = (event) => {
      this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        if(this.props.view.page === 'createWorkout') {
          this.props.handleCreate(this.state)
        } else if(this.props.view.page === 'updateWorkout') {
          this.props.handleUpdate(this.state)
        }
        console.log(this.state.exerciseName);
        console.log(this.state.targetWeight);
        console.log(this.state.targetSets);
        console.log(this.state.targetReps);
    }

    componentDidMount(){
      this.setState({
        //formInputs
        exerciseName: this.props.exerciseName,
        targetWeight: this.props.targetWeight,
        targetSets: this.props.targetSets,
        targetReps: this.props.targetReps,
        // exerciseId: this.props.exerciseId
      })
    }
    render(){
        return(
            <div id="addWorkoutContainer">

                <div id="addWorkout">
                    <form onSubmit={this.props.handleSubmit}>

                        <fieldset>

                             <div id="imageContainer">
                                <img id="addWorkoutImage" src={Picture}></img>
                            </div>

                            <legend>Add WorkOut</legend>

                                <label htmlFor="exerciseName"></label>
                                <input className="addworkout" placeholder="Name of Exercise" value={this.props.exerciseName}
                                onChange={this.handleChange} type="text" id="exerciseName"></input><br/>

                                <label htmlFor="targetSets"></label>
                                <input value={this.state.targetSets} onChange={this.handleChange} className="addworkout" placeholder="Target Sets" type="number" id="targetSets"></input><br/>

                                <label htmlFor="targetReps"></label>
                                <input value={this.state.targetReps} onChange={this.handleChange} className="addworkout" placeholder="Target Reps" type="number" id="targetReps"></input><br/>

                                <label htmlFor="targetWeight"></label>
                                <input value={this.state.targetWeight} onChange={this.handleChange} className="addworkout" placeholder="Target Weight" type="number" id="targetWeight"></input><br/>

                                {/*<label htmlFor="targetBodyPart"></label>
                                <input className="addworkout" placeholder="Target Body Part" type="text" id="targetBodyPart"></input><br/>*/}

                                <input className="addworkout" type="submit" id="submit" value="SUBMIT WORKOUT" />

                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }

}

export default CreateWorkout
