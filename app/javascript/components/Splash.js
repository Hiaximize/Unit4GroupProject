import React from 'react'
import Picture from '../../assets/images/workoutPlaceholder.png'

class Splash extends React.Component{
    render(){
        return (
            <div id="mainImage">
                <img id="memeImage" src={Picture} />
                
            </div>
        )
    }
}

export default Splash