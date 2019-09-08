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
                fileName: 'home'
            },
            formInputs: {
              excerciseName: null,
              targetWeight: null,
              targetSets: null,
              targetReps: null,
              exerciseId: null
            }
        }
    }
    handleView = (view) => {
       let pageTitle= ''
       let formInputs = {
         exerciseName: '',
         targetWeight: '',
         targetSets: '',
         targetReps: '',
         targetBodyPart: '',
         exerciseId: null

       }
        switch (view) {

            case 'home':

                pageTitle = 'home'
                break

            case 'createWorkout':
                pageTitle = 'create'
                console.log("inside workout switch")
                break

            case 'updateWorkout':
                pageTitle = 'update'
                // formInputs = {
                //   exerciseName: postData.exerciseName,
                //   targetWeight: postData.targetWeight,
                //   targetSets: postData.targetSets,
                //   targetReps: postData.targetReps,
                //   targetBodyPart: postData.targetBodyPart,
                //   exerciseId: postData.exerciseId
                // }
                break

            default:
              break
        }
        this.setState({
          view: {
            page: view,
            pageTitle: pageTitle
          },
          formInputs: formInputs
        })
    }

    // handleChange(event){
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    render(){
        return(
            <div id="app">
                <Header />
                <Main
                handleChange={this.handleChange}
                handleView={this.handleView}
                view={this.state.view}
                formInputs={this.props.formInputs}
                />
                <Footer />
            </div>
        )
    }
}
export default App
