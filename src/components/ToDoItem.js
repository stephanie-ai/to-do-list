import React, { Component } from 'react';
import './style.css';

class ToDoItem extends Component {

    render() {
        const { id, title } = this.props.todoo;
        return (
            <div>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delToDo.bind(this, id)} className="btn">x</button>
                </p>
            </div>
        )
    }
}

export default ToDoItem;

/*
Lets add an event to the checkbox input. Use the onChange event and it is going to be a method called markComplete.
Add this method above render().
Lets use an arrow function otherwise we will have to bind(this).
We have to climb the ladder from ToDoItem.js to ToDo.js to App.js and we do this by creating methods inside of our props so that is why we call this.props.markComplete
Then we can go to ToDo.js and add a prop of markComplete to <ToDoItem />

*/