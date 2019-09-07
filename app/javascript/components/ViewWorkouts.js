import React from 'react'
import Header from './Header.js'

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.postData);

    }
    render(){
        return(
            <div>

                    <div className="tile">
                        {this.props.postData.exerciseName}
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
