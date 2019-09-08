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
        // this.handleSubmit = this.handleSubmit.bind(this)
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

    handleDelete = (exercise_id) => {
     
      
      // console.log(this.state)
      // console.log(this.props)
      // console.log(this.props.postData)
      fetch(`/exercise/${exercise_id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        
        this.setState(prevState => {
          const exercises = prevState.exercises.filter( exercise => exercise.exercise_id !== exercise_id)
          return { exercises }
        })
        
      })
      .catch(err => console.log(err))

      //  setTimeout(() => {
      //    location.reload()
      //  }, 3000);
    }

    //  handleSubmit(event) {
    //      event.preventDefault()

    //  }

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
                  key={postData.exercise_id}
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
                 formInputs={this.props.formInputs}
                  handleUpdate={this.handleUpdate}
                  view={this.props.view}
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
