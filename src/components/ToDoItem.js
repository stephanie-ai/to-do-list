import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ToDoItem extends Component {
    // getStyle = () => {
    //     return {
    //         background: "lightblue"
    //         padding: 10px
    //         borderBottom: '1px #ccc dotted'
    //         text-decoration: this.props.todoo.completed ? 'line-through' : 'none'
    //     }
    // }
    //  style={this.getStyle()}

    markComplete = (e) => {

    }

    render() {
        const { id, title } = this.props.todoo;
        return (
            <div>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                </p>
            </div>
        )
    }
}

// ToDoItem.propTypes = {
//     todoo: PropTypes.object.isRequired
// }

export default ToDoItem;

/*
Lets add an event to the checkbox input. Use the onChange event and it is going to be a method called markComplete.
Add this method above render().
Lets use an arrow function otherwise we will have to bind(this).
We have to climb the ladder from ToDoItem.js to ToDo.js to App.js and we do this by creating methods inside of our props so that is why we call this.props.markComplete
Then we can go to ToDo.js and add a prop of markComplete to <ToDoItem />

*/