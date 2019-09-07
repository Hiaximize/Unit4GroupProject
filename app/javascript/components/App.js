import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            view : {
                page: 'home',
                fileName: ''
            }
        }
    }
    handleView = (view) => {
       let fileName= ''
        switch (view, fileName) {
            
            case 'home':
                console.log("inside home")
                fileName= 'Splash.js'
                break
            
            case 'createWorkout':
                filename= 'CreateWorkout.js'
                console.log("inside workout switch")
                break

            case 'updateWorkout':
                fileName= 'UpdateWorkout.js'
                break
            
            case 'viewWorkouts':
                fileName= 'ViewWorkouts.js'
                break

            default:
                break
        }
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
                <Main 
                handleChange={this.handleChange}
                handleView= {this.handleView}
                view ={this.state.view}/>
                <Footer />
            </div>
        )
    }
}
export default App
