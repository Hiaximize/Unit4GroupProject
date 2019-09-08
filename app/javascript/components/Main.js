import React from 'react'
// import Splash from './Splash.js'
import CreateWorkout from './CreateWorkout'
import Picture from '../../assets/images/workoutPlaceholder.png'
import ViewWorkouts from './ViewWorkouts'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          exercises: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        }

      fetchExercises = () => {
        fetch('/exercise')
        .then(data => data.json())
        .then(jData => {
          this.setState({ exercises: jData })
        })
      }

///Create
      handleCreate = (createData) => {
        console.log(createData)
        fetch('/exercise', {
          body: JSON.stringify(createData),
          method: 'Post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'appication/json'
          }
        })
          .then(createdExercise => {
            return createdExercise.json()
            console.log(createdExercise.json());
          })
          .then(jsonedExercise => {
            this.props.handleView('home')
            this.setState(prevState => {
              prevState.exercises.push(jsonedExercise)
              return { exercises: prevState.exercises}
            })
          })
          .catch(err => console.log(err))
      }

///update
    handleUpdate = (updatedData) => {
      fetch(`/exercise/${updatedData.id}`, {
        body: JSON.stringify(updatedData),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(updatedExercise => {
          this.props.handleView('home')
          this.fetchExercises()
        })
        .catch(err => console.log(err))
    }

///Delete

    handleDelete = (id) => {
      fetch(`exercise/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        this.setState(prevState => {
          const exercises = prevState.exercises.filter( exercise => exercise.id !== id)
          return { exercises }
        })
      })
      .catch(err => console.log(err))
    }




     handleView(view, fileName){
         this.props.handleView(view, fileName)
     }
     handleChange(){
         this.props.handleChange()
     }
     handleSubmit(event) {
         event.preventDefault()
         // console.log(this.state.exerciseName)
         // console.log(this.state)
         // console.log('ive been submitted');
     }

///life cycle
     componentDidMount(){
       this.fetchExercises()
     }


    render(){
        return(
            <main>


              <div id="splashContainer">
                <div id="mainImage">
                    <img id="memeImage" src={Picture} />
                </div>
                <div id="splashButtonsContainer">
                  <li onClick={()=>{this.props.handleView('createWorkout')}} className="splashButtons" id="createWorkoutButton"> Create Workout </li>
                  <li onClick={()=>{this.props.handleView('home')}} className="splashButtons" id="goToWorkoutButton">View Exercises</li>
                </div>
              </div>


              <div id="tileContainer">
                {this.props.view.pageTitle === 'home'
                ? this.state.exercises.map((postData) => (
                  <ViewWorkouts
                  key={postData.exerciseId}
                  postData={postData}
                  handleView={this.props.handleView}
                  handleDelete={this.handleDelete}
                  view={this.props.view}
                  />
                    ))
                  : ''
                }

                {this.props.view.pageTitle === 'create'
                ? <CreateWorkout
                 handleCreate={this.handleCreate}
                 // handleSubmit={this.handleSubmit}
                  // handleUpdate={this.handleUpdate}
                  // formInputs={this.state.formInputs}
                  // view={this.props.view}
                  // handleView={this.props.handleView}
                  />
                : ''}
            </div>


              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </main>
        )
    }
}

export default Main
