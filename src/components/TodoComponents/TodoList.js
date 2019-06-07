import React from "react";
import Task from "./Todo";

function TodoList(props) {
    return (
        <div className="todo-list">
            {props.todos.map(task => {
                return (
                    <Task
                        todoItem={task}
                        toggleTask={props.toggleTask}
                        key={task.id}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;

