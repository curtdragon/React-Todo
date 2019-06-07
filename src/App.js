import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: todos
    };
  }

  addTask = newtask => {
    const newTodoItem = {
      task: newtask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      currentTodo: [...this.state.currentTodo, newTodoItem]
    });
  };

  toggleTask = id => {
    const newList = this.state.currentTodo.map(task => {
      if (task.id === id) {
        const newObject = {
          ...task,
          completed: !task.completed
        };
        return newObject;
      } else {
        return task;
      }
    });

    this.setState({ currentTodo: newList });
  };

  clearTask = id => {
    id.preventDefault();
    const newList = this.state.currentTodo.filter(todo => !todo.completed);
    this.setState({ currentTodo: newList });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoList
          todos={this.state.currentTodo}
          toggleTask={this.toggleTask}
        />
        <TodoForm 
          addNewItem={this.addTask} 
          clearTodoTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
