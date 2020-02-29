import React, { useState } from "react";
import cn from "classnames";

function Task(props) {
  const { todoItem, toggleTask } = props;
  const [dateCompleted, setDateCompleted] = useState(null);

  const addclickHandler = () => {
    setDateCompleted(Date.now());
    toggleTask(todoItem.id);
  };

  const todoClassName = cn("task", {
    completed: todoItem.completed
  });

  return (
    <div className={todoClassName} onClick={addclickHandler}>
      <p>{todoItem.task}</p>
      {dateCompleted && <p>Completed at: {dateCompleted}</p>}
    </div>
  );
}

export default Task;
