import React, { Component } from 'react';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddToDo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add To Do..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="submitBtn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddToDo;

/*
Create a method called onChange with an arrow function, we write this.setState
The state is in this particular component so we don't have to go to other files.
This is an example of component state.
the todo's are App level state because we are sharing between components --> use Redux for this to manage App level state.
We want to set this.setState to whatever the value is inputted but the user and we can get this by using the event parameter and writing e.target.value
We are setting the title in state to whatever is typed in to the input box.

This is fine for now as we only have one input box. If we had several for example, we wouldn't want to create an onChange for each one.
We could put in some square brackets and do [e.target.name]: e.target.value as long as the name is equal to whatever the field is in the form (name="title").

Next we need a submit event. add onSubmit to the form.
As it is in JavaScript, it is going to want to submit to the actual file and we want to prevent that using e.preventDefault();
We call the props method because we want to pass this in and title is the parameter.
We want the field to clear after it has been submitted so we set the state of title to nothing.
*/