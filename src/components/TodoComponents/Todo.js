import React from "react";

function Task(props) {

    const addclickHandler = () => {
        props.toggleTask(props.todoItem.id);
    };
    return (
        <div
            className={`task${props.todoItem.completed ? " completed" : ""}`}
            onClick={addclickHandler}
        >
            <p>{props.todoItem.task}</p>
        </div>
    );
}

export default Task;