# README

# Group project by: Derek Barker and Colton Kayser
### Hosted on Heroku: zen-tor-60140.herokuapp.com

## Gainz Tracker

Inspiration for project

I use to be an avid weight lifter and one thing I could never get into, was bringing a pen and notebook with me to the gym and write the notes inside during my workout. This topped with our love handles growing ever more, we decided we needed a solution to get us when we get back in the gym.

### Userstores
1. As a user I want to be able to come to Gainz Tracker and create a workout routine to use while in the gym.

2. As a user I want to be able to save exercises.

3. As a user I want to be able to add new exercises to use in workout plan.

4. As a user I want to be able to edit/remove existing exercises.



# Wireframes

![index page](https://raw.githubusercontent.com/Hiaximize/Unit4GroupProject/master/app/assets/images/view_workouts.png)

![create workout](https://raw.githubusercontent.com/Hiaximize/Unit4GroupProject/master/app/assets/images/create_a_workout.png)


![edit/delete workout](https://raw.githubusercontent.com/Hiaximize/Unit4GroupProject/master/app/assets/images/edit_workout.png)

## If we had some more time we would add a start workout feature


![start working out](https://raw.githubusercontent.com/Hiaximize/Unit4GroupProject/master/app/assets/images/start_workout.png)

## Technologies Used
Our app is built using Rails, PostgreSQL, React, HTML, JavaScript, CSS, and Ruby. It is deployed on Heroku.
The live link is to the app is [here](https://frozen-tor-60140.herokuapp.com/#).

# Front-end
## Switching Views
Gainz Tracker is a single page app that uses React to populate our api and manipulate the DOM. We used ternary operators in our JSX and a switch state in our main component to switch views depending on which button the user clicks on.
Here is the switch statement:
```JavaScript
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
          exercise_name: postData.exercise_name,
          target_weight: postData.target_weight,
          target_sets: postData.target_sets,
          target_reps: postData.target_reps,
          target_body_part: postData.target_body_part,
          exercise_id: postData.exercise_id
        }
        break

    default:
      break
}
```
Here is the ternary operators:
```JavaScript
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
    // handleUpdate={this.handleUpdate}
    view={this.props.view}
    />
  : ''}

  {this.props.view.pageTitle === 'update'
  ? <UpdateWorkout
  handleView={this.state.view}
  formInputs={this.props.formInputs}
  handleUpdate={this.handleUpdate}
  view={this.props.view}
  /> :  ''}
```

# Back-end

Ruby on Rails handles our controllers and routes, and our api is being implemented using PostegreSQL. We thought about using multiple models, but since we had only four days to make this build, we decided to simplify our approach and use only one.

Here is an example of a JSON object that is stored in our api.

```JSON
{
  "exercise_id": 2,
  "exercise_name": "Free Lift",
  "target_weight": 50,
  "target_sets": 10,
  "target_reps": 5,
  "target_body_part": "Biceps"
}
```

We used postman to test the backend routes

## challenge

We had some troubles getting the front end to work properly with the backend in the beginning. 

# Thoughts on building

Once we were able to get a fresh set of eyes to help us get past a typo, the process went much more smoothly. We were taught how to repurpose the same form for both editing and creating workouts, but we decided to make individual forms for each since our ternary operators where still being funky at the time.

Overall a great learning experience and a confidence builder to approach another React build.


