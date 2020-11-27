import React, { Component } from 'react';
import ToDo from './components/ToDo';
import './App.css';

class App extends Component {
    state = {
        todo: [
            {
                id: 1,
                title: 'Learn React',
                completed: false 
            },
            {
                id: 2,
                title: 'Learn Redux',
                completed: false 
            },
            {
                id: 3,
                title: 'Learn Lifecycle Components',
                completed: false 
            }
        ]
    }

    markComplete = (id) => {
        this.setState({ todo: this.state.todo.map(todoo => {
            if(todoo.id === id) {
                todoo.completed = !todoo.completed;
            }
            return todoo;
        })});
    }
    

    render() {
  
      return (
          <div className="App">
            <h1>App</h1>
            <ToDo todo={this.state.todo} markComplete={this.markComplete} />
          </div>
      )
    }
  }

export default App;

/* Take the todo's that are in the App component's state and pass them down to the ToDo component as a prop or a property.
After bringing in markComplete from ToDo.js and ToDoItem.js before that, we now need to know which one we are marking complete.
We pass along the ID by going to ToDoItem.js and bind(this, this.props.todoo.id)
Use destructuring to pull the variables out of the todoo and the props.

*/