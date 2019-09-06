import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header />
                <h2>hola</h2>
                <Footer />
            </div>
        )
    }
}
export default App

