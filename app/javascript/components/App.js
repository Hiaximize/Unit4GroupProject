import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

class App extends React.Component{
    
    constructor(props){
        super(props)
    
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }   

    render(){
        return(
            <div id="app">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
export default App

