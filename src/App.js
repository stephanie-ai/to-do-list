import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToDo from './components/ToDo';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import About from './components/pages/About';
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
    
    delToDo = (id) => {
        this.setState({ todo: [...this.state.todo.filter(todoo => todoo.id !== id)]});
    }

    AddToDo = (title) => {
        const newToDo = {
            id: 4,
            title: title,
            completed: false
        }
        this.setState({ todo: [...this.state.todo, newToDo]})
    }


    render() {
      return (
          <Router>
          <div className="App">
            <div className="container">
                <Header />
                <Route exact path="/" render={props => (
                    <>
                    <AddToDo AddToDo={this.AddToDo} />
                    <ToDo className="input" todo={this.state.todo}  markComplete={this.markComplete} delToDo={this.delToDo} />
                    </>
                )} />
                <Route path='/about' component={About} />
            </div>
          </div>
          </Router>
      )
    }
  }

export default App;

/* Take the todo's that are in the App component's state and pass them down to the ToDo component as a prop or a property.
After bringing in markComplete from ToDo.js and ToDoItem.js before that, we now need to know which one we are marking complete.
We pass along the ID by going to ToDoItem.js and bind(this, this.props.todoo.id)
Use destructuring to pull the variables out of the todoo and the props.
Manipulate the state byt removing one of the items using the filter method.
Loops through and based on a condition it will return another array.
Pass in the state object which is todo. Use the spread operator (...) to copy everything that is already there.
For each todoo, we want to filter/return any todoo where the id is not equal to the id that is passed in as an argument of delToDo.

The will come back when we refresh because they are not persisting to a database.

Use setState and the spread operator for AddToDo. We need to make a copy of the state. Create a new variable called newToDo
*/