import React from 'react'
import Header from './Header.js'

class ViewWorkouts extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>

                    <div className="tile">
                        {this.props.postData.name}
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
