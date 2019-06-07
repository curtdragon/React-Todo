import React from "react";

function Task(props) {

    const clickHandler = () => {
        props.toggleTask(props.todoItem.id);
    };
    return (
        <div
            className={`task${props.todoItem.completed ? " completed" : ""}`}
            onClick={clickHandler}
        >
            <p>{props.todoItem.task}</p>
        </div>
    );
}

export default Task;