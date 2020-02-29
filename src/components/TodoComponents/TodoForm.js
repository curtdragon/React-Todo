import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    changeHandler = event => {
        this.setState({ inputValue: event.target.value });
    };

    submitHandler = () => {
        if (this.state.inputValue.trim()){
            this.props.addNewItem(this.state.inputValue);
            this.setState({ inputValue: "" });
        }
    };

    onKeyDown = event => {
        const keyCode = event.keyCode
        if (keyCode === 13) {
            this.submitHandler()
        }
    }
 
    render() {
        return (
                <div className="todoform">
                    <input
                        value={this.state.inputValue}
                        placeholder="New Item"
                        type="text"
                        onChange={this.changeHandler}
                        onKeyDown={this.onKeyDown}                        
                    />
                    <button onClick={this.submitHandler}>Add Todo</button>
                    <button onClick={this.props.clearTodoTask}>Clear Completed</button>
                </div>
        );
    }
}

export default TodoForm;