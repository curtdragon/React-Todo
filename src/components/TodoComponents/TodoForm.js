import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: ""
        };
    }

    changeHandler = event => {
        this.setState({ listItem: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewItem(this.state.listItem);
        this.setState({ listItem: "" });
    };
 
    render() {
        return (
                <form onSubmit={this.submitHandler}>
                    <input
                        value={this.state.listItem}
                        placeholder="New Item"
                        type="text"
                        onChange={this.changeHandler}
                    />
                    <button>Add Todo</button>
                    <button onClick={this.props.clearTodoTask}>Clear Completed</button>
                </form>
        );
    }
}

export default TodoForm;