 import React from 'react'
 import Picture from '../../assets/images/workoutPlaceholder.png'

 
 class Form extends React.Component{
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

                            <legend>{this.props.pageTitle}</legend>

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
         )
     }
 }

 export default Form