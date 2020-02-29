import React from "react";
import Task from "./Todo";

function TodoList(props) {
  const { todos, toggleTask } = props;
  return (
    <div className="todo-list">
      {todos.map(task => {
        return <Task todoItem={task} toggleTask={toggleTask} key={task.id} />;
      })}
    </div>
  );
}

export default TodoList;
