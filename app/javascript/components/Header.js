import React from 'react'
import Picture from '../../assets/images/gainTrackersMainImage.jpg'

const mainImageStyling = {"height":"500px","width":"900px", "margin":"25px"}

class Header extends React.Component{
    render(){
        return(
                <div id="header">
                    <img id="memeImage" style={mainImageStyling} src={Picture} />   
                    <h1>Gainz <br /> Tracker</h1>
                </div>

        )
    }
}

export default Header