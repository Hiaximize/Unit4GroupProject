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
                pageTitle: 'home'
            },
            formInputs: {
              excercise_name: null,
              target_weight: null,
              target_sets: null,
              target_reps: null,
              target_body_part: null,
              exercise_id: null
            }
        }
    }
    handleView = (view, postData) => {
       let pageTitle= ''
       let formInputs = {
         exercise_name: '',
         target_weight: '',
         target_wets: '',
         target_reps: '',
         target_body_part: '',
         exercise_id: null

       }
        switch (view) {

            case 'home':

                pageTitle = 'home'
                break

            case 'createWorkout':
                pageTitle = 'create'
                break

            case 'updateWorkout':
                pageTitle = 'update'
                formInputs = {
                  exerciseName: postData.exercise_name,
                  targetWeight: postData.target_weight,
                  targetSets: postData.target_sets,
                  targetReps: postData.target_Reps,
                  targetBodyPart: postData.target_body_part,
                  exerciseId: postData.exercise_id
                }
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
                handleView={this.handleView}
                view={this.state.view}
                formInputs={this.state.formInputs}
                />
                <Footer />
            </div>
        )
    }
}
export default App
