import React, { Component} from 'react';
import ToDoItem from './ToDoItem';
import './style.css';

class ToDo extends Component {
  render() {
    return this.props.todo.map((todoo) => (
      <ToDoItem key={todoo.id} className="todoo" todoo={todoo} markComplete={this.props.markComplete} delToDo={this.props.delToDo} />
    ));
  }
}

export default ToDo;

/*
Since we have this array of todo's, we want to loop through them and output something such as the actual text. Use the map higher order array method for this.
It can return an array from an array.
We will just use it to loop through and output JSX.
Use an arrow function inside the map method with a parameter of todoitem.
For each todo that we map through, write what do we want to display in the browser.
todooitem will be an object and choose the property we want (title).
We want to load a whole new item called todoitem.
Create a new file in components called ToDoItem.js.
todoo is a prop so we can use it in ToDoItem.js.

When we map through something, it is creating a list. Lists should have keys.
Add a unique key to <ToDoItem />

prop types are validations for properties that a component should have. We can set the type and to be required or not. 
*/