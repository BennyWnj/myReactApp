import React, { Component } from 'react';
import InputLine from "./InputLine";
import TodoList from "./TodoList";
import "./bootstrap.min.css";

//cd server/ && npm start
let tasks = [{taskText: "brush teeth", completed: false},
    {taskText: "go to bed", completed: true},
    {taskText: "be a good baoba", completed:true}];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    this.setState({todos: tasks})
  }

  addTodo(task) {
      tasks.push({taskText: task, completed: false});
      this.setState({todos: tasks});
  }

  removeTodo(index) {
      tasks.splice(index, 1);
      this.setState({todos: tasks});
  }



  render() {
    return (
      <div>
        <InputLine onSubmit={this.addTodo}/>
        <TodoList todos={this.state.todos}
                    todoXClick={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
